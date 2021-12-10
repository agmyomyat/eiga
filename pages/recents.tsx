import React, { useState, useRef, useEffect } from 'react'
import { GetStaticProps } from 'next'
import { useAuth } from '@contexts/AuthContext'
import { useWatchHistoriesLazyQuery } from '@graphgen'
import Movie from '@components/movies/Movie'
import { Container, Box, CircularProgress, Typography } from '@mui/material'
import MoviesSkeleton from '@components/skeleton/MoviesSkeleton'
import { grid } from '@helpers/moviesGrid'
import { useApolloClient } from '@apollo/client'

export default function Recents() {
   const apolloClient = useApolloClient()
   const [limit, setLimit] = useState<number>(5)
   const { userData, getUserLoading } = useAuth()
   const sentinel = useRef<HTMLDivElement>()
   const [hasMore, setHasMore] = useState<boolean>(true)
   const [scrollLoading, setScrollLoading] = useState<boolean>(false)
   const [getHistories, { data, loading, fetchMore }] =
      useWatchHistoriesLazyQuery()
   /**
    * @description
    * this useEffect is to avoid duplicate data showing if coming from dynamic route
    */
   useEffect(() => {
      apolloClient.cache.evict({
         fieldName: 'watchHistories',
         broadcast: false,
      })
      apolloClient.cache.gc()
   }, [apolloClient.cache])
   useEffect(() => {
      if (!userData?.userId) return
      console.log('user is ', userData.userId)
      if (userData?.userId) {
         getHistories({
            variables: {
               limit,
               start: 0,
               user: userData?.userId || null,
            },
         })
      }
      if (!data?.watchHistories.length) return
      const onSentinelIntersection = (entries: IntersectionObserverEntry[]) => {
         console.log('intersecting', entries)
         entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting && hasMore) {
               setScrollLoading(true)
               fetchMore({
                  variables: {
                     start: data?.watchHistories?.length,
                     limit: 5,
                  },
               }).then((fetchMoreResult) => {
                  // Update variables.limit for the original query to include
                  // the newly added feed items.
                  setScrollLoading(false)
                  setHasMore(fetchMoreResult.data.watchHistories.length > 0)
                  setLimit(
                     data.watchHistories.length +
                        fetchMoreResult.data.watchHistories.length
                  )
               })
            }
         })
      }

      const observer = new IntersectionObserver(onSentinelIntersection, {})
      if (sentinel.current) {
         observer.observe(sentinel.current)
      }

      return () => {
         observer.disconnect()
         console.log('unmount')
      }
   }, [
      fetchMore,
      data?.watchHistories?.length,
      limit,
      hasMore,
      userData?.userId,
      getHistories,
   ])

   return (
      <Container>
         <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
               mb: 3,
            }}
         >
            Watch Histories
         </Typography>
         {loading || getUserLoading ? (
            <MoviesSkeleton items={6} />
         ) : (
            <>
               {data?.watchHistories.length ? (
                  <>
                     <Box
                        display="grid"
                        rowGap={3}
                        columnGap={2}
                        py={2}
                        sx={grid}
                     >
                        {data.watchHistories.map((r) => (
                           <Movie key={r.movie.uuid} {...r.movie} />
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
                     No Histories Available.
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
         title: `Watch History`,
      },
   }
}
