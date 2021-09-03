import { useState, useEffect } from 'react';
import { GetMovieDocument, useGetMovieLazyQuery } from '@graphgen';
import { NextRouter, useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '@styles/MoviePage';
import { Box, Button, Typography, Breadcrumbs } from '@material-ui/core';
import Iframe from '@components/movies/Iframe';
import {PremiumUserQuery} from '@graphgen'
import {initializeApollo} from '@apollo'
import { GetStaticPaths, GetStaticProps } from 'next';
const useStyles = makeStyles(styles);
const client = initializeApollo();

export default function MoviePage(props) {
   // const [getMovie, { data }] = useGetMovieLazyQuery({
      //    fetchPolicy: 'network-only',
      // });
      const classes = useStyles();
      const [currentServer, setCurrentServer] = useState<string | null>(null);
      const [loading, setLoading] = useState<boolean>(true);
      const router: NextRouter = useRouter();
      const { id } = router.query;
      const data = props.data
      
      useEffect(() => {
      console.log("movie",data)
      setCurrentServer(data.getMovie.freeServer1)
     
   }, [data]);

   function changeServer(server: string) {
      setCurrentServer(server);
      setLoading(server !== currentServer);
   }

   console.log('dynamic page(server)', currentServer);

   return (
      <div className={classes.root}>
         {router.isFallback || !data && <h2>loading</h2>}
         {data && (
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
                  variant={`${currentServer === data.getMovie?.freeServer1 ?'contained' : 'outlined'}`}
                  size="small"
                  color="secondary"
                  onClick={() => changeServer(data.getMovie?.freeServer1)}
                  className={classes.button}
               >
                  Server1
               </Button>
               <Button
                  variant={`${currentServer === data.getMovie?.freeServer2 ? 'contained' : 'outlined'}`}
                  size="small"
                  color="secondary"
                  onClick={() => changeServer(data.getMovie?.freeServer2)}
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
