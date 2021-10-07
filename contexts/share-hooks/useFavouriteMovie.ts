import { useEffect } from 'react'
import { NetworkStatus } from '@apollo/client'
import {
   useGetFavouriteMoviesLazyQuery,
   useCreateFavouriteMovieMutation,
   useDeleteFavouriteMovieMutation,
   GetFavouriteMoviesDocument,
   CreateFavouriteMovieMutationVariables,
} from '@graphgen'
import { NextRouter } from 'next/router'

export default function useFavouriteMovie(
   favVariables: CreateFavouriteMovieMutationVariables,
   premiumUser: boolean,
   router: NextRouter
) {
   const [
      getFavouriteMovie,
      {
         data: favouriteMovieData,
         loading: favouriteMovieLoading,
         networkStatus: favouriteMovieNetworkStatus,
      },
   ] = useGetFavouriteMoviesLazyQuery({
      fetchPolicy: 'network-only',
      notifyOnNetworkStatusChange: true,
   })

   const [createFavouriteMovie, { loading: createFavouriteMovieLoading }] =
      useCreateFavouriteMovieMutation()

   const [deleteFavouriteMovie, { loading: deleteFavouriteMovieLoading }] =
      useDeleteFavouriteMovieMutation()

   const favouriteMovieId = favouriteMovieData?.favouriteMovies?.[0]?.id
   const isDisabled =
      !premiumUser ||
      favouriteMovieLoading ||
      createFavouriteMovieLoading ||
      deleteFavouriteMovieLoading ||
      favouriteMovieNetworkStatus === NetworkStatus.refetch

   function handleAddFavourite() {
      createFavouriteMovie({
         variables: favVariables,
         refetchQueries: [GetFavouriteMoviesDocument],
      })
   }

   function handleDeleteFavourite() {
      deleteFavouriteMovie({
         variables: {
            movieId: favouriteMovieId,
         },
         refetchQueries: [GetFavouriteMoviesDocument],
      })
   }

   useEffect(() => {
      if (!premiumUser || !favVariables?.userId || !favVariables?.movieId)
         return

      getFavouriteMovie({
         variables: {
            userId: favVariables.userId,
            movieId: favVariables.movieId,
         },
      })
   }, [
      getFavouriteMovie,
      favVariables.movieId,
      router.asPath,
      premiumUser,
      favVariables.userId,
   ])

   return {
      favouriteMovieData,
      isDisabled,
      handleAddFavourite,
      handleDeleteFavourite,
   }
}
