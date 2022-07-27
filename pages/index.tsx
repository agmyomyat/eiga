// import Carousel from '../components/carousel/Carousel';
import { useEffect } from 'react'
import { initializeApollo } from '@apollo/index'
import {
   GetSuggestedMoviesDocument,
   useGetAllMoviesQuery,
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
   GetSuggestedMoviesQuery,
   GetSuggestedMoviesQueryVariables,
} from '@graphgen'
import { GetStaticProps } from 'next'
import { useAuth } from '@contexts/AuthContext'
import { Container, Box, Typography } from '@mui/material'
import Movies from '@components/movies/Movies'
import HomeSlides from '@components/splide/HomeSlides'

const apolloClient = initializeApollo()

interface Props {
   trendingMovies: GetTrendingMoviesQuery
   lastestMovies: GetLastestMoviesQuery
   suggestedMovies: GetSuggestedMoviesQuery
}

function Home(props: Props) {
   const { data } = useGetAllMoviesQuery()
   const { userData } = useAuth()
   const [
      getHistories,
      { data: watchHistoriesData, loading: watchHistoriesLoading },
   ] = useWatchHistoriesLazyQuery()
   const { movies: trendingMovies } = props.trendingMovies
   const { movies: lastestMovies } = props.lastestMovies
   const suggestedMovies = props.suggestedMovies.getSuggestedMovies
   const historyMovies = watchHistoriesData?.watchHistories
   useEffect(() => {
      console.log('suggest', suggestedMovies)
   }, [suggestedMovies])
   useEffect(() => {
      if (userData?.userId) {
         void getHistories({
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
   const { data: trendingMovies }: Partial<GetTrendingMoviesQueryResult> =
      await apolloClient.query({
         query: GetTrendingMoviesDocument,
         variables: { last7day: sevenDaysAgo.toISOString() },
      })

   const { data: lastestMovies }: Partial<GetLastestMoviesQueryResult> =
      await apolloClient.query({
         query: GetLastestMoviesDocument,
      })
   const { data: suggestedMovies } = await apolloClient.query<
      GetSuggestedMoviesQuery,
      GetSuggestedMoviesQueryVariables
   >({
      query: GetSuggestedMoviesDocument,
      variables: { genres_limit: 5, movies_limit: 10 },
   })
   console.log('suggested', suggestedMovies)

   return {
      props: {
         initialApolloState: apolloClient.cache.extract(),
         trendingMovies,
         suggestedMovies,
         lastestMovies,
         title: `Home Page`,
      },
      revalidate: 10,
   }
}
