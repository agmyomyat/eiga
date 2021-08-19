// import Carousel from '../components/carousel/Carousel';
import { useQuery } from '@apollo/client';
import { initializeApollo } from '../apollo/index';
import { GET_ALL_MOVIES } from '../apollo/queries';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '../styles/HomeStyles';
import Container from '@material-ui/core/Container';
import Movies from '../components/movies/Movies';

const useStyles = makeStyles(styles);

function Home() {
   const classes = useStyles();

   const { data } = useQuery(GET_ALL_MOVIES);

   return (
      <Container>
         <Movies movies={data.movies} />
      </Container>
   );
}

export default Home;

export async function getStaticProps() {
   const apolloClient = initializeApollo();

   const { data } = await apolloClient.query({
      query: GET_ALL_MOVIES,
   });

   return {
      props: {
         initialApolloState: apolloClient.cache.extract(),
      },
   };
}
