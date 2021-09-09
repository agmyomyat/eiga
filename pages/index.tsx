// import Carousel from '../components/carousel/Carousel';
import { useGetAllMoviesQuery } from '@graphgen';
import { initializeApollo } from '@apollo';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '@styles/HomeStyles';
import { Movies as typeMovies, GetAllMoviesDocument } from '@graphgen';
import { GetStaticProps } from 'next';
import Container from '@material-ui/core/Container';
import Movies from '@components/movies/Movies';

const useStyles = makeStyles(styles);
const apolloClient = initializeApollo();

function Home() {
   const classes = useStyles();

   const { data } = useGetAllMoviesQuery();

   return (
      <Container className={classes.root}>
         <Movies movies={data.movies as typeMovies[]} />
      </Container>
   );
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
   await apolloClient.query({
      query: GetAllMoviesDocument,
   });

   return {
      props: {
         initialApolloState: apolloClient.cache.extract(),
      },
   };
};