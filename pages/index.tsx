// import Carousel from '../components/carousel/Carousel';
import { useGetAllMoviesQuery } from '@graphgen'
import { initializeApollo } from '@apollo/index'
import {
   Movies as typeMovies,
   GetAllMoviesDocument,
   GetTrendingMoviesDocument,
} from '@graphgen'
import { GetStaticProps } from 'next'
import Movies from '@components/movies/Movies'
import { Container } from '@mui/material'

const apolloClient = initializeApollo()

function Home(prop) {
   const { data } = useGetAllMoviesQuery()
   console.log('trending movies', prop)

   return (
      <Container sx={{ mb: '100px' }}>
         <Movies movies={data.movies as typeMovies[]} />
      </Container>
   )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
   const today = new Date()
   const sevenDaysAgo = new Date(today)

   sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
   await apolloClient.query({
      query: GetAllMoviesDocument,
   })
   const trendingMovies = await apolloClient.query({
      query: GetTrendingMoviesDocument,
      variables: { last7day: sevenDaysAgo.toISOString() },
   })

   return {
      props: {
         initialApolloState: apolloClient.cache.extract(),
         trendingMovies,
      },
      revalidate: 300,
   }
}
