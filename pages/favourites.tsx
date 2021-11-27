import React, { useState, useRef, useEffect } from 'react'
import { GetStaticProps } from 'next'
import { useAuth } from '@contexts/AuthContext'
import { useGetFavouriteMoviesLazyQuery } from '@graphgen'
import Movie from '@components/movies/Movie'
import { Container, Box, CircularProgress, Typography } from '@mui/material'
import MoviesSkeleton from '@components/skeleton/MoviesSkeleton'
import { grid } from '@helpers/moviesGrid'
import { useApolloClient } from '@apollo/client'

export default function Favourites() {
   const apolloClient = useApolloClient()
   const [limit, setLimit] = useState<number>(5)
   const { userData, getUserLoading } = useAuth()
   const sentinel = useRef<HTMLDivElement>()
   const [hasMore, setHasMore] = useState<boolean>(true)
   const [scrollLoading, setScrollLoading] = useState<boolean>(false)
   const [getFavouriteMovies, { data, loading, fetchMore }] =
      useGetFavouriteMoviesLazyQuery()
   /**
    * @description
    * this useEffect is to avoid duplicate data showing if coming from dynamic route
    */
   useEffect(() => {
      apolloClient.cache.evict({
         fieldName: 'favouriteMovies',
         broadcast: false,
      })
      apolloClient.cache.gc()
   }, [apolloClient.cache])
   useEffect(() => {
      if (!userData?.userId) return
      if (userData?.userId) {
         getFavouriteMovies({
            variables: {
               userId: userData?.userId,
               start: 0,
               limit,
            },
         })
      }
      console.log('limit is ', limit)
      console.log('hasmore is ', hasMore)
      if (!data?.favouriteMovies?.length) return
      const onSentinelIntersection = (entries: IntersectionObserverEntry[]) => {
         entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting && hasMore) {
               console.log('hello')
               setScrollLoading(true)
               fetchMore({
                  variables: {
                     start: data?.favouriteMovies.length,
                     limit: 5,
                  },
               }).then((fetchMoreResult) => {
                  // Update variables.limit for the original query to include
                  // the newly added feed items.
                  setScrollLoading(false)
                  setHasMore(fetchMoreResult.data.favouriteMovies.length > 0)
                  setLimit(
                     data.favouriteMovies.length +
                        fetchMoreResult.data.favouriteMovies.length
                  )
               })
            }
         })
      }

      const observer = new IntersectionObserver(onSentinelIntersection, {})
      if (sentinel.current) {
         observer.observe(sentinel?.current)
      }

      return () => {
         observer.disconnect()
      }
   }, [
      fetchMore,
      data?.favouriteMovies.length,
      limit,
      hasMore,
      userData?.userId,
      getFavouriteMovies,
      apolloClient.cache,
   ])

   console.log('favourite movies', data?.favouriteMovies)

   // console.log('userData', userData)

   return (
      <Container sx={{ mb: '100px' }}>
         <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
               mb: 3,
            }}
         >
            Favourites
         </Typography>
         {loading || getUserLoading ? (
            <MoviesSkeleton items={6} />
         ) : (
            <>
               {data?.favouriteMovies.length ? (
                  <>
                     <Box
                        display="grid"
                        rowGap={3}
                        columnGap={2}
                        py={2}
                        sx={grid}
                     >
                        {data.favouriteMovies.map((r) => (
                           <Movie key={r.movie.id} {...r.movie} />
                        ))}
                     </Box>
                     {scrollLoading && (
                        <Box
                           display="flex"
                           justifyContent="center"
                           alignItems="center"
                           py={2}
                        >
                           <CircularProgress />
                        </Box>
                     )}
                     {!hasMore && (
                        <Typography
                           variant="subtitle1"
                           align="center"
                           sx={{ color: 'text.disabled' }}
                        >
                           You&rsquo;ve reached the end of results
                        </Typography>
                     )}
                  </>
               ) : (
                  <Typography align="center" sx={{ color: 'text.secondary' }}>
                     Favourite Movies List Is Empty.
                  </Typography>
               )}
            </>
         )}
         <div id="histroySentienl" ref={sentinel}></div>
      </Container>
   )
}

export const getStaticProps: GetStaticProps = () => {
   return {
      props: {
         title: `Favourite Movies`,
      },
   }
}
