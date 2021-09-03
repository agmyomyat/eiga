import { useState, useEffect } from 'react';
import {GetMovieDocument,usePremiumUserLazyQuery, GetMovieQuery  } from '@graphgen';
import { NextRouter, useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '@styles/MoviePage';
import { Box, Button, Typography, Breadcrumbs } from '@material-ui/core';
import Iframe from '@components/movies/Iframe';
import {initializeApollo} from '@apollo'
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAccessToken } from '@helpers/accessToken';
const useStyles = makeStyles(styles);
const client = initializeApollo();

export default function MoviePage(props) {
   const AccessToken = getAccessToken();
   const [checkPremium,{ data }]= usePremiumUserLazyQuery({
      variables:{token:AccessToken},
      fetchPolicy: 'network-only',
   });
   const classes = useStyles();
   const [currentServer, setCurrentServer] = useState<string | null>(null);
   const [loading, setLoading] = useState<boolean>(true);
   const router: NextRouter = useRouter();
   const { id } = router.query;
   const serverResult:GetMovieQuery= props.data
   const server = serverResult?.getMovie
   const refFreeServer1:string= server?.freeServer1
   const refFreeServer2:string= server?.freeServer2
   const refVipServer1:string= server?.vipServer1
   const refVipServer2:string= server?.vipServer2
   const premiumUser:boolean =  data?.premiumCheck.premiumUser 
  function changeServer(server:string) {
      setCurrentServer(server);
      setLoading(server !== currentServer);
   }
      useEffect(()=>{
         if(!data){
            checkPremium()
         }
      },[data,checkPremium])
      
      useEffect(() => {
      console.log("movie",props)
      console.log("user",premiumUser)
      if(!router.isFallback&&premiumUser){
      return setCurrentServer(server.vipServer1)

      }else if (!router.isFallback&&!premiumUser){
         return setCurrentServer(server.freeServer1)
      }else{
         return
      } 
     
   }, [router.isFallback, premiumUser, props,server ,]);

 


   return (
      <div className={classes.root}>
         {router.isFallback || !data && <h2>loading</h2>}
         {!router.isFallback&&data&& (
            <Box>
               <Breadcrumbs className={classes.breadcrumbs}>
                  <Typography color="textSecondary" className={classes.breadItem}>
                     Home
                  </Typography>
                  <Typography color="textSecondary" className={classes.breadItem}>
                     Movies
                  </Typography>
                  <Typography color="textPrimary" className={classes.breadItem}>
                     {id}
                  </Typography>
               </Breadcrumbs>
               <Iframe server={currentServer} loading={loading} setLoading={setLoading} />
               <Button
                  variant={`${(currentServer === refFreeServer1)
                  ||(currentServer===refVipServer1)?'contained' : 'outlined'}`}
                  size="small"
                  color="secondary"
                  onClick={() => changeServer(premiumUser?server.vipServer1:server.freeServer1)}
                  className={classes.button}
               >
                  Server1
               </Button>
               <Button
                   variant={`${(currentServer === refFreeServer2)
                  ||(currentServer===refVipServer2)?'contained' : 'outlined'}`}
                  size="small"
                  color="secondary"
                  onClick={() => changeServer(premiumUser?server.vipServer2:server.freeServer2)}
               >
                  Server2
               </Button>
            </Box>
         )}
      </div>
   );
}

export const getStaticPaths:GetStaticPaths = async ()=> {
   return {
      paths: [],
      fallback: true,
   };
}

export const getStaticProps:GetStaticProps = async(context)=> {
   const { id } = context.params;

   const {data}=await client.query({
      query: GetMovieDocument,
      variables: { uuid:id },
   });

   return {
      props: {
        data 
      },
   };
}
