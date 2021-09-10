import { useRef, useState, useEffect } from 'react';
import {
   GetMovieDocument,
   usePremiumUserLazyQuery,
   GetMovieQuery,
   useGetRelatedMoviesQuery,
   Movies as typeMovies,
   Genres,
   GetMovieQueryResult,
} from '@graphgen';
import { NextRouter, useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '@styles/MoviePage';
import { Grid, Container } from '@material-ui/core';
import { getAccessToken } from '@helpers/accessToken';
import { initializeApollo } from '@apollo/index';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useAuth } from '@contexts/AuthContext';
import { gqlInvalidToken } from '@apollo/apolloReactiveVar';
import Iframe from '@components/movies/Iframe';
import RelatedMovies from '@components/movies/RelatedMovies';
import DetectOtherLogin from '@components/modals/detectOtherLogin';
import MovieInfo from '@components/movies/MovieInfo';

const useStyles = makeStyles(styles);
const client = initializeApollo();
interface PageProps {
   data: GetMovieQuery
}

export function MoviePage(props:PageProps) {
   const AccessToken = getAccessToken();

   const { reactiveToken, logOut } = useAuth();

   const [checkPremium, { data }] = usePremiumUserLazyQuery({
      fetchPolicy: 'network-only',
      ssr: false,
   });
   const { data: relatedMoviesData, loading: relatedMoviesLoading } = useGetRelatedMoviesQuery();
   const classes = useStyles();
   const [currentServer, setCurrentServer] = useState<string | null>(null);
   const [loading, setLoading] = useState<boolean>(true);
   const [loginDetect, setLoginDetect] = useState<boolean>(false);
   const router: NextRouter = useRouter();
   const { id } = router.query;
   const serverResult = props.data;
   const server = serverResult?.getMovie;
   const premiumUser: boolean = data?.premiumCheck?.premiumUser || null;
   const mountingPremium = useRef(false);

   function changeServer(server: string) {
      setCurrentServer(server);
      setLoading(server !== currentServer);
   }

   function iframeLoad(prop: boolean) {
      setLoading(prop);
   }

   const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
      if (reason === 'clickaway') return;

      setLoginDetect(false);
      gqlInvalidToken({ logOut: false });
   };

   useEffect(() => {
      if (!mountingPremium.current) {
         checkPremium({
            variables: { token: AccessToken },
         });
         console.log('checking premium', data);
      }
      return () => {
         mountingPremium.current = true;
         console.log('premiumcheck unmount');
      };
   }, [data, checkPremium, AccessToken]);

   useEffect(() => {
      if (reactiveToken.logOut) {
         logOut();
         return setLoginDetect(true);
      }
   }, [logOut, reactiveToken.logOut]);

   useEffect(() => {
      console.log('user', premiumUser);
      if (!router.isFallback && premiumUser) {
         return setCurrentServer(server.vipServer1);
      } else if (!router.isFallback && !premiumUser) {
         return setCurrentServer(server.freeServer1);
      } else {
         return;
      }
   }, [router.isFallback, premiumUser, server?.vipServer1, server?.freeServer1]);

   return (
      <Container className={classes.root}>
         {(router.isFallback || !data) && <h2>loading</h2>}
         {!router.isFallback && data && (
            <Grid container spacing={2}>
               <Grid item sm={8} xs={12}>
                  <Iframe
                     currentServer={currentServer}
                     loading={loading}
                     setLoading={iframeLoad}
                     id={id}
                     server={server}
                     changeServer={changeServer}
                     premiumUser={premiumUser}
                  />
                  <MovieInfo
                     name={server.name}
                     date={server.date}
                     body={server.body}
                     genres={server.genres as Partial<Genres[]>}
                  />
               </Grid>
               <Grid item sm={4} xs={12}>
                  <RelatedMovies data={relatedMoviesData} loading={relatedMoviesLoading} />
               </Grid>
            </Grid>
         )}

         <DetectOtherLogin open={loginDetect} handleClose={handleClose} />
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

   const { data }:GetMovieQueryResult = await client.query({
      query: GetMovieDocument,
      variables: { uuid: id },
   });

   return {
      props: {
         data,
      },
   };
};
