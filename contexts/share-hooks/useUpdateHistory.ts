import { GetWatchHistoryDocument } from './../../graphgen/graphql'
import {
   useUpdateHistoryMutation,
   UpdateHistoryMutationVariables,
} from '@graphgen'
import { useEffect } from 'react'
export default function useUpdateHistory(
   { ...prop }: UpdateHistoryMutationVariables,
   premiumUser: boolean
) {
   const [updateHistory, { data, loading, error }] = useUpdateHistoryMutation({
      variables: prop,
      refetchQueries: [GetWatchHistoryDocument],
   })
   useEffect(() => {
      if (!prop.movieId || !prop.movieUuid || !premiumUser) return
      console.log('updatehistory loop')
      const updateHistoryListener = (event) => {
         if (event.origin !== 'https://embed.eiga.sbs') return
         updateHistory({
            variables: {
               movieId: prop?.movieId,
               movieUuid: prop?.movieUuid,
               season: prop?.season,
               episode: prop?.episode,
               current_time: event.data || '',
            },
         })
      }
      window.addEventListener('message', updateHistoryListener, false)
      return () =>
         window.removeEventListener('message', updateHistoryListener, false)
   }, [
      premiumUser,
      prop.episode,
      prop.movieId,
      prop.movieUuid,
      prop.season,
      updateHistory,
   ])
   const updateHistoryLoading = loading
   const updateHistoryData = data
   const updateHistoryError = error
   return {
      updateHistoryLoading,
      updateHistoryData,
      updateHistoryError,
   }
}
