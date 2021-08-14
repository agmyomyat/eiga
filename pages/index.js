// import Carousel from '../components/carousel/Carousel';
import { useApolloClient } from '@apollo/client';
import { initializeApollo } from '../apollo/index';
import { GET_ALL_MOVIES } from '../apollo/queries';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '../styles/HomeStyles';
import Container from '@material-ui/core/Container';
import Movies from '../components/movies/Movies';

const useStyles = makeStyles(styles);

function Home() {
   const classes = useStyles();

   const client = useApolloClient();

   const { movies } = client.readQuery({
      query: GET_ALL_MOVIES,
   });

   const newMovies = movies.map(movie => ({
      id: movie.id,
      title: movie.name.toUpperCase(),
      image: movie.photo_url,
      releaseDate: new Date(movie.date).getFullYear(),
      quality: movie.quality,
   }));

   return (
      <Container>
         <Movies movies={newMovies} />
      </Container>
   );
}

export default Home;

export async function getStaticProps() {
   const apolloClient = initializeApollo();

   await apolloClient.query({
      query: GET_ALL_MOVIES,
   });

   return {
      props: {
         initialApolloState: apolloClient.cache.extract(),
      },
      revalidate: 1,
   };
}
