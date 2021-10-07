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
import { useApolloClient } from '@apollo/client'
import useUpdateHistory from '@contexts/share-hooks/useUpdateHistory'
import useFavouriteMovie from '@contexts/share-hooks/useFavouriteMovie'
import { useUpdateHistoryTimer } from '@contexts/global-states/useUpdateHistoryTimer'

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

   useUpdateHistory(
      {
         movieId: parseInt(movieData?.id || null),
         movieUuid: movieData?.uuid || null,
      },
      userData?.premium || null,
      currentServer
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

   // const [
   //    getFavouriteMovie,
   //    {
   //       data: favouriteMovieData,
   //       loading: favouriteMovieLoading,
   //       networkStatus: favouriteMovieNetworkStatus,
   //    },
   // ] = useGetFavouriteMoviesLazyQuery({
   //    fetchPolicy: 'network-only',
   //    notifyOnNetworkStatusChange: true,
   // })

   // const [createFavouriteMovie, { loading: createFavouriteMovieLoading }] =
   //    useCreateFavouriteMovieMutation()

   // const [deleteFavouriteMovie, { loading: deleteFavouriteMovieLoading }] =
   //    useDeleteFavouriteMovieMutation()

   // const favouriteMovieId = favouriteMovieData?.favouriteMovies?.[0]?.id

   function changeServer(server: string) {
      setCurrentServer(server)
      setLoading(server !== currentServer)
   }

   function iframeLoad(prop: boolean) {
      setLoading(prop)
   }

   // function handleAddFavourite() {
   //    createFavouriteMovie({
   //       variables: {
   //          movieId: movieData?.id,
   //          userId: userData?.userId,
   //       },
   //       refetchQueries: [GetFavouriteMoviesDocument],
   //    })
   // }

   // function handleDeleteFavourite() {
   //    deleteFavouriteMovie({
   //       variables: {
   //          movieId: favouriteMovieId,
   //       },
   //       refetchQueries: [GetFavouriteMoviesDocument],
   //    })
   // }

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
      userData?.premium,
   ])

   // useEffect(() => {
   //    if (!userData?.premium || !userData?.userId || !movieData?.id) return
   //    console.log('refetching')
   //    console.log('movieId', movieData?.id)
   //    getFavouriteMovie({
   //       variables: {
   //          userId: userData.userId,
   //          movieId: movieData?.id,
   //       },
   //    })
   // }, [
   //    getFavouriteMovie,
   //    movieData?.id,
   //    router.asPath,
   //    userData?.premium,
   //    userData?.userId,
   // ])

   // console.log('fav data', favouriteMovieData?.favouriteMovies)
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
                  movie={movieData as Partial<Movies>}
                  favouriteData={favouriteMovieData}
                  isDisabled={isDisabled}
                  handleAddFavourite={handleAddFavourite}
                  handleDeleteFavourite={handleDeleteFavourite}
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
