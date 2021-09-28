import {
   useUpdateHistoryMutation,
   UpdateHistoryMutationVariables,
} from '@graphgen'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function useUpdateHistory({
   ...prop
}: UpdateHistoryMutationVariables) {
   const [updateHistory, { data, loading, error }] = useUpdateHistoryMutation({
      variables: prop,
   })
   const router = useRouter()
   useEffect(() => {
      let timer
      if (!timer) {
         updateHistory()
         return
      }
      function handleRouteChange() {
         console.log('timer', timer)
         if (router.query.id)
            return (timer = setTimeout(() => updateHistory(), 3000))
         return null
      }
      router.events.on('routeChangeStart', handleRouteChange)
      return () => {
         router.events.off('routeChangeStart', handleRouteChange)
         clearTimeout(timer)
      }
      //       console.log('updateHistorty', data)
   }, [router.events, router.query.id, updateHistory])
   const updateHistoryLoading = loading
   const updateHistoryData = data
   const updateHistoryError = error
   return { updateHistoryLoading, updateHistoryData, updateHistoryError }
}
