// import Carousel from '../components/carousel/Carousel';
import { useGetAllMoviesQuery } from '@graphgen';
import { initializeApollo } from '@apollo/index';
import { Movies as typeMovies, GetAllMoviesDocument } from '@graphgen';
import { GetStaticProps } from 'next';
import Movies from '@components/movies/Movies';
import { StyledContainer, classes } from '@styles/HomeStyles';

const apolloClient = initializeApollo();

function Home() {
   const { data } = useGetAllMoviesQuery();

   return (
      <StyledContainer className={classes.root}>
         <Movies movies={data.movies as typeMovies[]} />
      </StyledContainer>
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
