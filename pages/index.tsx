// import Carousel from '../components/carousel/Carousel';
import { useEffect } from 'react'
import { useGetAllMoviesQuery } from '@graphgen'
import { initializeApollo } from '@apollo/index'
import {
   Movies as typeMovies,
   WatchHistory,
   GetAllMoviesDocument,
   GetTrendingMoviesDocument,
   GetTrendingMoviesQuery,
   GetTrendingMoviesQueryResult,
   GetLastestMoviesDocument,
   GetLastestMoviesQuery,
   GetLastestMoviesQueryResult,
   useWatchHistoriesLazyQuery,
} from '@graphgen'
import { GetStaticProps } from 'next'
import { useAuth } from '@contexts/AuthContext'
import { Container, Box, Typography } from '@mui/material'
import Movies from '@components/movies/Movies'
import HomeSlides from '@components/splide/HomeSlides'

const apolloClient = initializeApollo()

interface Props {
   data: GetTrendingMoviesQuery
   lastestMovies: GetLastestMoviesQuery
}

function Home(props: Props) {
   const { data } = useGetAllMoviesQuery()
   const { userData } = useAuth()
   const [
      getHistories,
      { data: watchHistoriesData, loading: watchHistoriesLoading },
   ] = useWatchHistoriesLazyQuery()
   const { movies: trendingMovies } = props.data
   const { movies: lastestMovies } = props.lastestMovies
   const historyMovies = watchHistoriesData?.watchHistories

   useEffect(() => {
      if (userData?.userId) {
         getHistories({
            variables: {
               limit: 10,
               start: 0,
               user: userData?.userId,
            },
         })
      }
   }, [getHistories, userData])

   return (
      <Container>
         <HomeSlides
            trendingMovies={trendingMovies as Partial<typeMovies[]>}
            lastestMovies={lastestMovies as Partial<typeMovies[]>}
            historyMovies={historyMovies as Partial<WatchHistory[]>}
            loading={watchHistoriesLoading}
         />
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

   const { data: lastestMovies }: Partial<GetLastestMoviesQueryResult> =
      await apolloClient.query({
         query: GetLastestMoviesDocument,
      })

   return {
      props: {
         initialApolloState: apolloClient.cache.extract(),
         data,
         lastestMovies,
         title: `Home Page`,
      },
      revalidate: 300,
   }
}
