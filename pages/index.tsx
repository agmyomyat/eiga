// import Carousel from '../components/carousel/Carousel';
import { useGetAllMoviesQuery } from '@graphgen';
import { initializeApollo } from '@apollo/index';
import { Movies as typeMovies, GetAllMoviesDocument } from '@graphgen';
import { GetStaticProps } from 'next';
import Movies from '@components/movies/Movies';
import { Container } from '@mui/material';
import DetectOtherLogin from '@components/modals/detectOtherLogin';

const apolloClient = initializeApollo();

function Home() {
   const { data } = useGetAllMoviesQuery();

   return (
      <Container sx={{ mb: '100px' }}>
         <Movies movies={data.movies as typeMovies[]} />
         <DetectOtherLogin />
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
