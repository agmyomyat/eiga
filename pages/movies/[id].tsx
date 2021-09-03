import { useState, useEffect } from 'react';
import { GetMovieDocument, usePremiumUserLazyQuery, GetMovieQuery } from '@graphgen';
import { NextRouter, useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '@styles/MoviePage';
import { Grid } from '@material-ui/core';
import Iframe from '@components/movies/Iframe';
import Episodes from '@components/movies/Episodes';
import { getAccessToken } from '@helpers/accessToken';
import { initializeApollo } from '@apollo';
import { GetStaticPaths, GetStaticProps } from 'next';

const useStyles = makeStyles(styles);
const client = initializeApollo();

export default function MoviePage(props) {
   const AccessToken = getAccessToken();
   const [checkPremium, { data = null }] = usePremiumUserLazyQuery({
      variables: { token: AccessToken },
      fetchPolicy: 'network-only',
   });
   const classes = useStyles();
   const [currentServer, setCurrentServer] = useState<string | null>(null);
   const [loading, setLoading] = useState<boolean>(true);
   const router: NextRouter = useRouter();
   const { id } = router.query;
   const serverResult: GetMovieQuery = props.data;
   const server = serverResult?.getMovie;
   const premiumUser: boolean = data?.premiumCheck?.premiumUser || null;

   function changeServer(server: string) {
      setCurrentServer(server);
      setLoading(server !== currentServer);
   }

   useEffect(() => {
      if (!data) {
         console.log('checking premium');
         checkPremium();
      }
   }, [data, checkPremium]);

   console.log('data', data);
   console.log('token', AccessToken);

   useEffect(() => {
      console.log('movie', props);
      console.log('user', premiumUser);
      if (!router.isFallback && premiumUser) {
         return setCurrentServer(server.vipServer1);
      } else if (!router.isFallback && !premiumUser) {
         return setCurrentServer(server.freeServer1);
      } else {
         return;
      }
   }, [router.isFallback, premiumUser, props, server]);

   console.log('router fallback', router.isFallback);

   return (
      <div className={classes.root}>
         {(router.isFallback || !data) && <h2>loading</h2>}
         {!router.isFallback && data && (
            <Grid container spacing={2}>
               <Grid item sm={8} xs={12}>
                  <Iframe
                     currentServer={currentServer}
                     loading={loading}
                     setLoading={setLoading}
                     id={id}
                     server={server}
                     changeServer={changeServer}
                     premiumUser={premiumUser}
                  />
               </Grid>
               <Grid item sm={4} xs={12}>
                  <Episodes />
               </Grid>
            </Grid>
         )}
      </div>
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

   const { data } = await client.query({
      query: GetMovieDocument,
      variables: { uuid: id },
   });

   console.log('data', data);

   return {
      props: {
         data,
      },
   };
};
