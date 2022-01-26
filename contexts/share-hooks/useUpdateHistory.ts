import { GetWatchHistoryDocument } from './../../graphgen/graphql'
import {
   useUpdateHistoryMutation,
   UpdateHistoryMutationVariables,
} from '@graphgen'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useUpdateHistoryTimer } from '@contexts/global-states/useUpdateHistoryTimer'
export default function useUpdateHistory(
   { ...prop }: UpdateHistoryMutationVariables,
   premiumUser: boolean,
   currentServer: string
) {
   const [updateHistory, { data, loading, error }] = useUpdateHistoryMutation({
      variables: prop,
      refetchQueries: [GetWatchHistoryDocument],
   })
   const useTimer = useUpdateHistoryTimer((state) => state.timer)
   // const refProp = useRef<UpdateHistoryMutationVariables>(prop)
   const router = useRouter()
   useEffect(() => {
      if (!prop.movieId || !prop.movieUuid) return
      window.addEventListener(
         'message',
         (event) => {
            if (event.origin !== 'https://embed.eiga.sbs') return
            updateHistory({ variables: { ...prop, current_time: event.data } })
         },
         false
      )
   }, [prop, updateHistory])
   useEffect(() => {
      if (!router.asPath) return
      if (!premiumUser) return
      if (!prop.movieId || !prop.movieUuid) return
      const _timerRef = setTimeout(updateHistory, 18000)
      if (!useTimer) {
         clearTimeout(_timerRef)
      }
      return () => {
         clearTimeout(_timerRef)
      }
   }, [
      premiumUser,
      router.asPath,
      updateHistory,
      currentServer,
      useTimer,
      prop.movieId,
      prop.movieUuid,
      prop.episode,
      prop.season,
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
