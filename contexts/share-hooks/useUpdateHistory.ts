import { GetWatchHistoryDocument } from './../../graphgen/graphql'
import {
   useUpdateHistoryMutation,
   UpdateHistoryMutationVariables,
} from '@graphgen'
import { useEffect, useMemo } from 'react'
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
   const memoProp = useMemo(
      () => {
         return [prop.episode, prop.season, currentServer]
      },
      [currentServer, prop.episode, prop.season] // in production you probably will have dependancies
   )
   // const refProp = useRef<UpdateHistoryMutationVariables>(prop)
   const router = useRouter()
   useEffect(() => {
      if (!premiumUser) return
      if (!router.asPath) return
      // console.log('ref', 'timerStart')
      let timerRef
      const unsub = useUpdateHistoryTimer.subscribe(
         (timer) => {
            if (timer) {
               // console.log('timer happen', timer)
               timerRef = setTimeout(updateHistory, 5000)
            }
            if (!timer) {
               // console.log('timerout happened', timer)
               clearTimeout(timerRef)
            }
         },
         (state) => state.timer
      )
      return () => {
         // console.log('unmount')
         clearTimeout(timerRef)
         unsub()
      }
      //       console.log('updateHistorty', data)
   }, [premiumUser, memoProp, router.asPath, updateHistory])
   const updateHistoryLoading = loading
   const updateHistoryData = data
   const updateHistoryError = error
   return {
      updateHistoryLoading,
      updateHistoryData,
      updateHistoryError,
   }
}
