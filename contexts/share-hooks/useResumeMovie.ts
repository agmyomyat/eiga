import { useGetWatchHistoryLazyQuery } from '@graphgen'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
export default function useResumeMovie({ userId }: { userId: string }) {
   const router = useRouter()
   const [
      getHistory,
      {
         data: getHistoryData,
         loading: getHistoryLoading,
         error: getHistoryError,
         refetch: getHistoryRefetch,
      },
   ] = useGetWatchHistoryLazyQuery({ fetchPolicy: 'network-only' })
   // useEffect(() => {
   //    if (getHistoryData?.watchHistories[0]?.id) {
   //       const normalizedId = apolloClient.cache.identify({
   //          id: getHistoryData?.watchHistories[0].id,
   //          __typename: 'WatchHistory',
   //       })
   //       apolloClient.cache.evict({ id: normalizedId })
   //       apolloClient.cache.gc()
   //    }
   // }, [apolloClient.cache, getHistoryData?.watchHistories, router.query.id])
   useEffect(() => {
      if (!router.query.id || !userId || router.isFallback) return
      getHistory({
         variables: { movieUuid: router.query.id as string, user: userId },
      })
   }, [getHistory, router.isFallback, router.query.id, userId])
   return {
      getHistoryData,
      getHistoryLoading,
      getHistoryError,
      getHistoryRefetch,
   }
}
