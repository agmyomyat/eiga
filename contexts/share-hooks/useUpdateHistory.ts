import {
   useUpdateHistoryMutation,
   UpdateHistoryMutationVariables,
} from '@graphgen'
import { useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'

export default function useUpdateHistory(
   { ...prop }: UpdateHistoryMutationVariables,
   premiumUser: boolean,
   currentServer: string
) {
   const [updateHistory, { data, loading, error }] = useUpdateHistoryMutation({
      variables: prop,
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
      console.log('ref', memoProp)
      const timer = setTimeout(updateHistory, 10000)
      return () => {
         console.log('unmount')
         clearTimeout(timer)
      }
      //       console.log('updateHistorty', data)
   }, [premiumUser, memoProp, router.asPath, updateHistory])
   const updateHistoryLoading = loading
   const updateHistoryData = data
   const updateHistoryError = error
   return { updateHistoryLoading, updateHistoryData, updateHistoryError }
}
