import { useState, useEffect } from 'react';
import { useGetMovieLazyQuery } from '@graphgen';
import { NextRouter, useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '@styles/MoviePage';
import Iframe from '@components/movies/Iframe';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Button from '@material-ui/core/Button';
import { Movies } from '@graphgen';

const useStyles = makeStyles(styles);

export default function MoviePage() {
   const [getMovie, { data }] = useGetMovieLazyQuery({
      fetchPolicy: 'network-only',
   });
   const classes = useStyles();
   const [servers, setServers] = useState<Partial<Movies> | null>(null);
   const [currentServer, setCurrentServer] = useState<string | null>(null);
   const router: NextRouter = useRouter();
   const { id } = router.query;

   console.log('Servers', servers);

   useEffect(() => {
      if (id && !data) {
         getMovie({
            variables: { uuid: id as string },
         });
      }
      if (data) {
         setServers(data.getMovie);
      }
   }, [data, getMovie, id]);

   useEffect(() => {
      if (servers) {
         setCurrentServer(servers.server1);
      }
   }, [servers]);

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
               <Iframe server={currentServer} />
               <Button
                  variant={`${currentServer === servers?.server1 ? 'contained' : 'outlined'}`}
                  size="small"
                  color="secondary"
                  onClick={() => setCurrentServer(servers.server1)}
                  className={classes.button}
               >
                  Server1
               </Button>
               <Button
                  variant={`${currentServer === servers?.server2 ? 'contained' : 'outlined'}`}
                  size="small"
                  color="secondary"
                  onClick={() => setCurrentServer(servers.server2)}
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
