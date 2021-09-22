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
import DetectOtherLogin from '@components/modals/detectOtherLogin';
import MovieInfo from '@components/movies/MovieInfo';
import { useAuth } from '@contexts/AuthContext';
import { useApolloClient } from '@apollo/client';

const client = initializeApollo();
export interface PageProps {
   data: GetMovieQuery;
}

export default function MoviePage(props: PageProps) {
   const client = useApolloClient()
   const { data: relatedMoviesData, loading: relatedMoviesLoading } = useGetRelatedMoviesQuery();

   const {premiumUser,checkPremiumLoading} = useAuth()

   const router: NextRouter = useRouter();

   const [currentServer, setCurrentServer] = useState<string | null>(null);
   const [loading, setLoading] = useState<boolean>(true);
   const { id } = router.query;
   const serverResult = props.data;
   const movieData = serverResult?.getMovie;

   function changeServer(server: string) {
      setCurrentServer(server);
      setLoading(server !== currentServer);
   }

   function iframeLoad(prop: boolean) {
      setLoading(prop);
   }

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
   }, [router.isFallback, premiumUser, movieData?.vipServer1, movieData?.freeServer1, router.query.id, client]);

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
