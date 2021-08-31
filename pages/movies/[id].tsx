import { useState, useEffect } from 'react';
import { useGetMovieLazyQuery } from '@graphgen';
import { NextRouter, useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '@styles/MoviePage';
import { Box, Button, Typography, Breadcrumbs } from '@material-ui/core';
import Iframe from '@components/movies/Iframe';

const useStyles = makeStyles(styles);

export default function MoviePage() {
   const [getMovie, { data }] = useGetMovieLazyQuery({
      fetchPolicy: 'network-only',
   });
   const classes = useStyles();
   const [currentServer, setCurrentServer] = useState<string | null>(null);
   const [loading, setLoading] = useState<boolean>(true);
   const router: NextRouter = useRouter();
   const { id } = router.query;

   useEffect(() => {
      if (id && !data) {
         getMovie({
            variables: { uuid: id as string },
         });
      }
      if (data) {
         setCurrentServer(data.getMovie.server1);
      }
   }, [data, getMovie, id]);

   function changeServer(server: string) {
      setCurrentServer(server);
      setLoading(server !== currentServer);
   }

   console.log('dynamic page(server)', currentServer);

   return (
      <div className={classes.root}>
         {router.isFallback || (!data && <h2>loading</h2>)}
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
                  variant={`${currentServer === data.getMovie?.server1 ? 'contained' : 'outlined'}`}
                  size="small"
                  color="secondary"
                  onClick={() => changeServer(data.getMovie?.server1)}
                  className={classes.button}
               >
                  Server1
               </Button>
               <Button
                  variant={`${currentServer === data.getMovie?.server2 ? 'contained' : 'outlined'}`}
                  size="small"
                  color="secondary"
                  onClick={() => changeServer(data.getMovie?.server2)}
               >
                  Server2
               </Button>
            </Box>
         )}
      </div>
   );
}

export async function getStaticPaths() {
   return {
      paths: [],
      fallback: true,
   };
}

export async function getStaticProps() {
   // const { id } = params;

   // await apolloClient.query({
   //    query: GET_MOVIE,
   //    variables: { id },
   // });

   return {
      props: {
         greeting: 'hello',
      },
   };
}
