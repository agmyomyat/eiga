import { useState, useEffect } from 'react'
import {
   GetMovieDocument,
   GetMovieQuery,
   useGetRelatedMoviesQuery,
   GetMovieQueryResult,
   Movies,
} from '@graphgen'
import { NextRouter, useRouter } from 'next/router'
import { Box, Divider, Container } from '@mui/material'
import { initializeApollo } from '@apollo/index'
import { GetStaticPaths, GetStaticProps } from 'next'
import Iframe from '@components/movies/Iframe'
import RelatedMovies from '@components/movies/RelatedMovies'
import MovieInfo from '@components/movies/MovieInfo'
import { useAuth } from '@contexts/AuthContext'
import useUpdateHistory from '@contexts/share-hooks/useUpdateHistory'
import useFavouriteMovie from '@contexts/share-hooks/useFavouriteMovie'
import DynamicSkeleton from '@components/skeleton/DynamicSkeleton'
import IframeSkeleton from '@components/skeleton/IframeSkeleton'
import MovieInfoSkeleton from '@components/skeleton/MovieInfoSkeleton'
import RelatedMoviesSkeleton from '@components/skeleton/RelatedMoviesSkeleton'
import useUpdateViews from '@contexts/share-hooks/useUpdateViews'
import useResumeMovie from '@contexts/share-hooks/useResumeMovie'

const client = initializeApollo()
export interface PageProps {
   data: GetMovieQuery
}

export default function MoviePage(props: PageProps) {
   const { data: relatedMoviesData, loading: relatedMoviesLoading } =
      useGetRelatedMoviesQuery()
   const { userData, getUserLoading } = useAuth()
   const router: NextRouter = useRouter()
   const [currentServer, setCurrentServer] = useState<string | null>(null)
   const [loading, setLoading] = useState<boolean>(true)
   const { id } = router.query
   const serverResult = props.data
   const movieData = serverResult?.getMovie
   useUpdateViews({ uuid: movieData?.uuid, premiumUser: userData?.premium })
   const { getHistoryData, getHistoryLoading } = useResumeMovie({
      userId: userData?.userId,
   })

   useUpdateHistory(
      {
         movieId: parseInt(movieData?.id || null),
         movieUuid: movieData?.uuid || null,
      },
      userData?.premium || null
   )

   const {
      favouriteMovieData,
      isDisabled,
      handleAddFavourite,
      handleDeleteFavourite,
   } = useFavouriteMovie(
      {
         movieId: movieData?.id,
         userId: userData?.userId,
      },
      userData?.premium,
      router
   )

   function changeServer(server: string) {
      setCurrentServer(server)
      setLoading(server !== currentServer)
   }

   function iframeLoad(prop: boolean) {
      setLoading(prop)
   }

   useEffect(() => {
      if (!router.isFallback && userData?.premium) {
         return setCurrentServer(movieData.vipServer2)
      }
   }, [router.isFallback, userData?.premium, movieData?.vipServer2])

   // console.log('fav data', favouriteMovieData?.favouriteMovies)

   return (
      <Container>
         {router?.isFallback || getUserLoading ? (
            <DynamicSkeleton>
               <IframeSkeleton />
               <MovieInfoSkeleton />
               <RelatedMoviesSkeleton />
            </DynamicSkeleton>
         ) : (
            <Box>
               <Iframe
                  currentServer={currentServer}
                  current_time={getHistoryData?.watchHistories[0]?.current_time}
                  getHistoryLoading={getHistoryLoading}
                  loading={loading}
                  setLoading={iframeLoad}
                  id={id}
                  movieName={movieData.uuid}
                  vipServer2={movieData.vipServer2}
                  changeServer={changeServer}
                  premiumUser={userData?.premium}
                  isSeries={movieData.isSeries}
                  premiumOnly={movieData.premiumOnly}
               />
               <Divider />
               <MovieInfo
                  movie={movieData as Partial<Movies>}
                  favouriteData={favouriteMovieData}
                  isDisabled={isDisabled}
                  handleAddFavourite={handleAddFavourite}
                  handleDeleteFavourite={handleDeleteFavourite}
                  premium={userData?.premium}
               />
               <Divider />
               {relatedMoviesLoading ? (
                  <RelatedMoviesSkeleton />
               ) : (
                  <RelatedMovies data={relatedMoviesData} />
               )}
            </Box>
         )}
      </Container>
   )
}

// eslint-disable-next-line @typescript-eslint/require-await
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

   return {
      props: {
         data,
         title: data?.getMovie?.name,
      },
      revalidate: 10,
   }
}
