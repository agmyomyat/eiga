import { useEffect } from 'react'
import { NetworkStatus } from '@apollo/client'
import {
   useCreateFavouriteMovieMutation,
   useDeleteFavouriteMovieMutation,
   GetFavouriteMovieDocument,
   CreateFavouriteMovieMutationVariables,
   useGetFavouriteMovieLazyQuery,
} from '@graphgen'

export default function useFavouriteMovie(
   favVariables: CreateFavouriteMovieMutationVariables,
   premiumUser: boolean
) {
   const [
      getFavouriteMovie,
      {
         data: favouriteMovieData,
         loading: favouriteMovieLoading,
         networkStatus: favouriteMovieNetworkStatus,
      },
   ] = useGetFavouriteMovieLazyQuery({
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
      void createFavouriteMovie({
         variables: favVariables,
         refetchQueries: [GetFavouriteMovieDocument],
      })
   }

   function handleDeleteFavourite() {
      void deleteFavouriteMovie({
         variables: {
            movieId: favouriteMovieId,
         },
         refetchQueries: [GetFavouriteMovieDocument],
      })
   }
   // useEffect(() => {
   //    if (favouriteMovieData?.favouriteMovies[0]?.id) {
   //       const normalizedId = apolloClient.cache.identify({
   //          id: favouriteMovieData.favouriteMovies[0].id,
   //          __typename: 'FavouriteMovies',
   //       })
   //       console.log('cache normal', normalizedId)
   //       apolloClient.cache.evict({ id: normalizedId })
   //       apolloClient.cache.gc()
   //    }
   // }, [apolloClient.cache, favouriteMovieData?.favouriteMovies])

   useEffect(() => {
      if (!premiumUser || !favVariables?.userId || !favVariables?.movieId)
         return

      void getFavouriteMovie({
         variables: {
            userId: favVariables.userId,
            movieId: favVariables.movieId,
         },
      })
   }, [
      getFavouriteMovie,
      favVariables.movieId,
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
