// import Carousel from '../components/carousel/Carousel';
import { useGetAllMoviesQuery } from '../graphgen/graphql';
import { gql } from '@apollo/client';
import { initializeApollo } from '../apollo/index';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '../styles/HomeStyles';
import Container from '@material-ui/core/Container';
import Movies from '../components/movies/Movies';

const useStyles = makeStyles(styles);
const apolloClient = initializeApollo();

function Home() {
   const classes = useStyles();

   const { data } = useGetAllMoviesQuery();

   return (
      <Container>
         <Movies movies={data.movies} />
      </Container>
   );
}

export default Home;

export async function getStaticProps() {
   const GET_ALL_MOVIES = gql`
      query getAllMovies {
         movies {
            name
            uuid
            id
            date
            quality
            photo_url
         }
      }
   `;

   await apolloClient.query({
      query: GET_ALL_MOVIES,
   });

   return {
      props: {
         initialApolloState: apolloClient.cache.extract(),
      },
   };
}
