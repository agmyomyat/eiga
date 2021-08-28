import { useEffect } from 'react';
import { useGetMovieLazyQuery } from '../../graphgen/graphql';
import { NextRouter, useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '../../styles/MoviePage';
import Iframe from '../../components/movies/Iframe';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const useStyles = makeStyles(styles as any);

export default function MoviePage() {
   const [getMovie, { data }] = useGetMovieLazyQuery({
      fetchPolicy: 'network-only',
   });
   const classes = useStyles();
   const router: NextRouter = useRouter();
   const { id } = router.query;

   useEffect(() => {
      if (id && !data) {
         getMovie({
            variables: { uuid: id as string },
         });
         console.log('data');
      }
   }, [data, getMovie, id]);

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
               <Iframe data={data} />
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
