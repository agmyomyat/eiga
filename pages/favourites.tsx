import React, { useState, useRef, useEffect } from 'react'
import { useAuth } from '@contexts/AuthContext'
import { useGetFavouriteMoviesLazyQuery } from '@graphgen'
import Movie from '@components/movies/Movie'
import { Container, Box, CircularProgress, Typography } from '@mui/material'
export default function Favourites() {
   const [limit, setLimit] = useState<number>(1)
   const { userData } = useAuth()
   const sentinel = useRef<HTMLDivElement>()
   const [hasMore, setHasMore] = useState<boolean>(true)
   const [scrollLoading, setScrollLoading] = useState<boolean>(false)
   const [getFavouriteMovies, { data, loading, fetchMore }] =
      useGetFavouriteMoviesLazyQuery()

   useEffect(() => {
      if (userData?.userId) {
         getFavouriteMovies({
            variables: {
               userId: userData?.userId,
            },
         })
      }
      console.log('limit is ', limit)
      const onSentinelIntersection = (entries: IntersectionObserverEntry[]) => {
         entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting && hasMore) {
               setScrollLoading(true)
               fetchMore({
                  variables: {
                     start: data?.favouriteMovies.length,
                     limit: 1,
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

      return () => observer.disconnect()
   }, [
      fetchMore,
      data?.favouriteMovies.length,
      limit,
      hasMore,
      userData?.userId,
      getFavouriteMovies,
   ])

   // console.log('userData', userData)
   if (loading) return <p>Loading</p>
   return (
      <Container sx={{ mb: '100px' }}>
         <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
               mb: 3,
            }}
         >
            Watch History
         </Typography>
         {data?.favouriteMovies ? (
            <>
               <Box
                  display="grid"
                  rowGap={3}
                  columnGap={2}
                  py={2}
                  sx={{
                     gridTemplateColumns: {
                        xs: 'repeat(auto-fill, minmax(120px,1fr))',
                        sm: 'repeat(auto-fill, minmax(150px,1fr))',
                        md: 'repeat(auto-fill, minmax(170px,1fr))',
                        lg: 'repeat(auto-fill, minmax(200px,1fr))',
                     },
                  }}
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
               <div id="histroySentienl" ref={sentinel}></div>
               {!hasMore && (
                  <Typography
                     variant="subtitle1"
                     align="center"
                     sx={{ color: 'text.disabled' }}
                  >
                     Youve reached the end of results
                  </Typography>
               )}
            </>
         ) : (
            <Typography align="center" sx={{ color: 'text.secondary' }}>
               No Histories Available
            </Typography>
         )}
      </Container>
   )
}
