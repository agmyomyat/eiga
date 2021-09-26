import { useState, useEffect } from 'react'
import {
   GetMovieDocument,
   GetMovieQuery,
   useGetRelatedMoviesQuery,
   GetMovieQueryResult,
} from '@graphgen'
import { NextRouter, useRouter } from 'next/router'
import { Box, Divider, Container } from '@mui/material'
import { initializeApollo } from '@apollo/index'
import { GetStaticPaths, GetStaticProps } from 'next'
import Iframe from '@components/movies/Iframe'
import RelatedMovies from '@components/movies/RelatedMovies'
import MovieInfo from '@components/movies/MovieInfo'
import { useAuth } from '@contexts/AuthContext'
import { useApolloClient } from '@apollo/client'

const client = initializeApollo()
export interface PageProps {
   data: GetMovieQuery
}

export default function MoviePage(props: PageProps) {
   const client = useApolloClient()
   const { data: relatedMoviesData, loading: relatedMoviesLoading } =
      useGetRelatedMoviesQuery()
   const { userData, getUserLoading } = useAuth()
   const router: NextRouter = useRouter()
   const [currentServer, setCurrentServer] = useState<string | null>(null)
   const [loading, setLoading] = useState<boolean>(true)
   const { id } = router.query
   const serverResult = props.data
   const movieData = serverResult?.getMovie

   function changeServer(server: string) {
      setCurrentServer(server)
      setLoading(server !== currentServer)
   }

   function iframeLoad(prop: boolean) {
      setLoading(prop)
   }

   useEffect(() => {
      // console.log('user', premiumUser);
      // console.log('fallback', router.isFallback);
      if (!router.isFallback && userData?.premium) {
         return setCurrentServer(movieData.vipServer1)
      } else if (!router.isFallback && !userData?.premium) {
         return setCurrentServer(movieData.freeServer1)
      } else {
         return
      }
   }, [
      router.isFallback,
      movieData?.vipServer1,
      movieData?.freeServer1,
      router.query.id,
      client,
      userData?.premium,
   ])

   return (
      <Container sx={{ mb: '100px' }}>
         {(router.isFallback || getUserLoading) && <h2>loading</h2>}
         {!router.isFallback && !getUserLoading && (
            <Box>
               <Iframe
                  currentServer={currentServer}
                  loading={loading}
                  setLoading={iframeLoad}
                  id={id}
                  freeServer1={movieData.freeServer1}
                  freeServer2={movieData.freeServer2}
                  vipServer1={movieData.vipServer1}
                  vipServer2={movieData.vipServer2}
                  changeServer={changeServer}
                  premiumUser={userData?.premium}
               />
               <Divider />
               <MovieInfo
                  name={movieData.name}
                  release_date={movieData.release_date}
                  body={movieData.body}
                  genres={movieData.genres}
               />
               <Divider />
               <RelatedMovies
                  data={relatedMoviesData}
                  loading={relatedMoviesLoading}
               />
            </Box>
         )}
      </Container>
   )
}

export const getStaticPaths: GetStaticPaths = async () => {
   return {
      paths: [],
      fallback: true,
   }
}

export const getStaticProps: GetStaticProps = async (context) => {
   const { id } = context.params

   const { data }: Partial<GetMovieQueryResult> = await client.query({
      query: GetMovieDocument,
      variables: { uuid: id },
   })
   console.log('asdfl', data)

   return {
      props: {
         data,
      },
   }
}
