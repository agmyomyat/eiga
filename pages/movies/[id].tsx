import { useState, useEffect } from 'react';
import { useGetMovieLazyQuery } from '@graphgen';
import { NextRouter, useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '@styles/MoviePage';
import { Box, Button, Typography, Breadcrumbs, Grid } from '@material-ui/core';
import Iframe from '@components/movies/Iframe';
import Episodes from '@components/movies/Episodes';
import { initializeApollo } from '@apollo';

const useStyles = makeStyles(styles);
const apolloClient = initializeApollo();

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
            <Grid container spacing={2}>
               <Grid item sm={8} xs={12}>
                  <Iframe
                     server={currentServer}
                     loading={loading}
                     setLoading={setLoading}
                     id={id}
                     data={data}
                     changeServer={changeServer}
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

export async function getStaticPaths() {
   return {
      paths: [],
      fallback: true,
   };
}

export async function getStaticProps({ params }) {
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
