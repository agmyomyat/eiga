import {
   useUpdateHistoryMutation,
   UpdateHistoryMutationVariables,
} from '@graphgen'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

export default function useUpdateHistory({
   ...prop
}: UpdateHistoryMutationVariables) {
   const [updateHistory, { data, loading, error }] = useUpdateHistoryMutation({
      variables: prop,
   })
   const timer = useRef<NodeJS.Timeout | null>(null)
   const router = useRouter()
   useEffect(() => {
      function handleRouteChange() {
         if (router.query.id) {
            clearTimeout(timer.current)
            // console.log('timer', timer)
            timer.current = setTimeout(() => {
               updateHistory()
            }, 10000)
         }
      }
      handleRouteChange()
      return () => {
         clearTimeout(timer.current)
      }
      //       console.log('updateHistorty', data)
   }, [router.query.id, updateHistory])
   const updateHistoryLoading = loading
   const updateHistoryData = data
   const updateHistoryError = error
   return { updateHistoryLoading, updateHistoryData, updateHistoryError }
}
