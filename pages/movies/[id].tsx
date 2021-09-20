import { useRef, useState, useEffect } from 'react';
import {
   GetMovieDocument,
   usePremiumUserLazyQuery,
   GetMovieQuery,
   useGetRelatedMoviesQuery,
   Movies as typeMovies,
   GetMovieQueryResult,
} from '@graphgen';
import { NextRouter, useRouter } from 'next/router';
import { Box, Divider, Container } from '@mui/material';
import { initializeApollo } from '@apollo/index';
import { GetStaticPaths, GetStaticProps } from 'next';
import Iframe from '@components/movies/Iframe';
import RelatedMovies from '@components/movies/RelatedMovies';
import DetectOtherLogin from '@components/modals/DetectOtherLogin';
import MovieInfo from '@components/movies/MovieInfo';
import { useAuth } from '@contexts/AuthContext';

const client = initializeApollo();
export interface PageProps {
   data: GetMovieQuery;
}

export default function MoviePage(props: PageProps) {
   const [checkPremium, { data, loading: checkPremiumLoading }] = usePremiumUserLazyQuery({
      fetchPolicy: 'network-only',
      ssr: false,
   });
   const { data: relatedMoviesData, loading: relatedMoviesLoading } = useGetRelatedMoviesQuery();
   const { currentUser } = useAuth();
   const router: NextRouter = useRouter();

   const [currentServer, setCurrentServer] = useState<string | null>(null);
   const prevPath = useRef(router.query.id);
   const [loading, setLoading] = useState<boolean>(true);
   const { id } = router.query;
   const serverResult = props.data;
   const movieData = serverResult?.getMovie;
   const premiumUser: boolean = data?.premiumCheck?.premiumUser || null;
   const unmountingPremium = useRef(false);

   function changeServer(server: string) {
      setCurrentServer(server);
      setLoading(server !== currentServer);
   }

   function iframeLoad(prop: boolean) {
      setLoading(prop);
   }
   useEffect(() => {
      if (router.query.id !== prevPath.current) {
         prevPath.current = router.query.id;
         unmountingPremium.current = false;
      }
      console.log('ref', unmountingPremium.current);
      if (!currentUser) {
         // to check again when log out
         unmountingPremium.current = false;
      }

      if (!unmountingPremium.current) {
         return checkPremium({
            variables: { token: '' }, // token will be auto filled in Apollo middleware
         });
      }
      return () => {
         unmountingPremium.current = true;
         console.log('premiumcheck unmount');
      };
   }, [checkPremium, currentUser, router.query.id]);

   useEffect(() => {
      console.log('user', premiumUser);
      console.log('fallback', router.isFallback);
      if (!router.isFallback && premiumUser) {
         return setCurrentServer(movieData.vipServer1);
      } else if (!router.isFallback && !premiumUser) {
         return setCurrentServer(movieData.freeServer1);
      } else {
         return;
      }
   }, [router.isFallback, premiumUser, movieData?.vipServer1, movieData?.freeServer1]);

   return (
      <Container sx={{ mb: '100px' }}>
         {(router.isFallback || checkPremiumLoading) && <h2>loading</h2>}
         {!router.isFallback && !checkPremiumLoading && (
            <Box>
               <Iframe
                  currentServer={currentServer}
                  loading={loading}
                  setLoading={iframeLoad}
                  id={id}
                  freeServer1={movieData.freeServer1}
                  freeServer2={movieData.freeServer2}
                  vipServer1={movieData.vipServer1}
                  vipServer2={movieData.vipServer2}
                  changeServer={changeServer}
                  premiumUser={premiumUser}
               />
               <Divider />
               <MovieInfo
                  name={movieData.name}
                  date={movieData.date}
                  body={movieData.body}
                  genres={movieData.genres}
               />
               <Divider />
               <RelatedMovies data={relatedMoviesData} loading={relatedMoviesLoading} />
            </Box>
         )}

         <DetectOtherLogin />
      </Container>
   );
}

export const getStaticPaths: GetStaticPaths = async () => {
   return {
      paths: [],
      fallback: true,
   };
};

export const getStaticProps: GetStaticProps = async context => {
   const { id } = context.params;

   const { data }: GetMovieQueryResult = await client.query({
      query: GetMovieDocument,
      variables: { uuid: id },
   });

   return {
      props: {
         data,
      },
   };
};
