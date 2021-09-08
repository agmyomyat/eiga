import { useRef,useState, useEffect } from 'react';
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
import { useAuth } from '@contexts';

const useStyles = makeStyles(styles);
const client = initializeApollo();

export default function MoviePage(props) {
   const AccessToken = getAccessToken();
   const {accessToken} = useAuth()
   const [checkPremium, { data }] = usePremiumUserLazyQuery({
   fetchPolicy: 'network-only',
   ssr:false
   });
      
   const classes = useStyles();
   const [currentServer, setCurrentServer] = useState<string | null>(null);
   const [loading, setLoading] = useState<boolean>(true);
   const router: NextRouter = useRouter();
   const { id } = router.query;
   const serverResult: GetMovieQuery = props.data;
   const server = serverResult?.getMovie;
   const premiumUser: boolean = data?.premiumCheck?.premiumUser || null;
   const mountingPremium = useRef(false)

   function changeServer(server: string) {
      setCurrentServer(server);
      setLoading(server !== currentServer);

   }
   function iframeLoad(prop){
      setLoading(prop)
      

   }
   useEffect(() => {
      if (!mountingPremium.current) {
         checkPremium({
            variables: { token: AccessToken },
         })
      console.log("checking premium",data)
      }
      return() =>{
         mountingPremium.current = true
         console.log("premiumcheck unmount")
      }
      
   }, [data, checkPremium, AccessToken]);
  
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

   return (
      <div className={classes.root}>
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
