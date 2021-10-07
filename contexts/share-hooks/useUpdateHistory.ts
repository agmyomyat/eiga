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
      refetchQueries:
         prop.season && prop.episode ? [GetWatchHistoryDocument] : null,
   })
   const useTimer = useUpdateHistoryTimer((state) => state.timer)
   // const refProp = useRef<UpdateHistoryMutationVariables>(prop)
   const router = useRouter()
   useEffect(() => {
      if (!router.asPath) return
      if (!premiumUser) return
      const timerRef = setTimeout(updateHistory, 5000)
      console.log('what the hell')
      if (!useTimer) {
         clearTimeout(timerRef)
      }
      return () => {
         clearTimeout(timerRef)
      }
   }, [premiumUser, router.asPath, updateHistory, currentServer, useTimer])
   const updateHistoryLoading = loading
   const updateHistoryData = data
   const updateHistoryError = error
   return {
      updateHistoryLoading,
      updateHistoryData,
      updateHistoryError,
   }
}
