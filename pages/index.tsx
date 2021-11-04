// import Carousel from '../components/carousel/Carousel';
import { useGetAllMoviesQuery } from '@graphgen'
import { initializeApollo } from '@apollo/index'
import {
   Movies as typeMovies,
   GetAllMoviesDocument,
   GetTrendingMoviesDocument,
   GetTrendingMoviesQuery,
   GetTrendingMoviesQueryResult,
} from '@graphgen'
import { GetStaticProps } from 'next'
import Movies from '@components/movies/Movies'
import TrendingSlide from '@components/splide/TrendingSlide'
import { Container, Box, Typography } from '@mui/material'

const apolloClient = initializeApollo()

interface Props {
   data: GetTrendingMoviesQuery
}

function Home(props: Props) {
   const { data } = useGetAllMoviesQuery()
   const { movies: trendingMovies } = props.data
   console.log('trending movies', trendingMovies)

   return (
      <Container sx={{ mb: '100px' }}>
         <Box>
            <Typography
               variant="h6"
               fontWeight="bold"
               sx={{
                  mb: 3,
               }}
            >
               Trending
            </Typography>
            <Box
               my={2}
               sx={{
                  bgcolor: {
                     xs: 'transparent',
                     md: 'secondary.main',
                  },
                  p: {
                     xs: 0,
                     md: 3,
                  },
               }}
            >
               <TrendingSlide
                  movies={trendingMovies as Partial<typeMovies[]>}
               />
            </Box>
         </Box>
         <Box mt={5}>
            <Typography
               variant="h6"
               fontWeight="bold"
               sx={{
                  mb: 3,
               }}
            >
               Recommended
            </Typography>
            <Movies movies={data.movies as typeMovies[]} />
         </Box>
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
   const { data }: Partial<GetTrendingMoviesQueryResult> =
      await apolloClient.query({
         query: GetTrendingMoviesDocument,
         variables: { last7day: sevenDaysAgo.toISOString() },
      })

   return {
      props: {
         initialApolloState: apolloClient.cache.extract(),
         data,
         title: `Home Page`,
      },
      revalidate: 300,
   }
}
