import { useState, useEffect } from 'react';
import { GetMovieDocument, PremiumUserQuery, GetMovieQuery } from '@graphgen';
import { NextRouter, useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '@styles/MoviePage';
import { Grid } from '@material-ui/core';
import Iframe from '@components/movies/Iframe';
import Episodes from '@components/movies/Episodes';
import { initializeApollo } from '@apollo';
import { GetStaticPaths, GetStaticProps } from 'next';

const useStyles = makeStyles(styles);
const client = initializeApollo();

export default function MoviePage(props) {
   const classes = useStyles();
   const [currentServer, setCurrentServer] = useState<string | null>(null);
   const [loading, setLoading] = useState<boolean>(true);
   const router: NextRouter = useRouter();
   const { id } = router.query;
   const data = props.data;

   useEffect(() => {
      setCurrentServer(data.getMovie.freeServer1);
   }, [data]);

   function changeServer(server: string) {
      setCurrentServer(server);
      setLoading(server !== currentServer);
   }

   console.log('dynamic page(server)', currentServer);

   return (
      <div className={classes.root}>
         {(router.isFallback || !data) && <h2>loading</h2>}
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
