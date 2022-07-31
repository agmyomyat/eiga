import { GetWatchHistoryDocument } from '@graphgen'
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
         // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
         if ((event.origin as string) !== 'https://embed.eiga.sbs') return
         void updateHistory({
            variables: {
               movieId: prop?.movieId,
               movieUuid: prop?.movieUuid,
               season: prop?.season,
               episode: prop?.episode,
               // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
               current_time: (event.data as string) || '',
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
