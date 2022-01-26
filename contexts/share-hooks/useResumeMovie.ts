import { useUpdateHistoryTimer } from '@contexts/global-states/useUpdateHistoryTimer'
import { useGetWatchHistoryLazyQuery } from '@graphgen'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
const setTimer = useUpdateHistoryTimer.getState().setTimer
export default function useResumeMovie({
   userId,
   season,
   episode,
}: {
   userId: string
   season?: number
   episode?: number
}) {
   const router = useRouter()
   const [
      getHistory,
      {
         data: getHistoryData,
         loading: getHistoryLoading,
         error: getHistoryError,
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
      return () => setTimer(true) //to update movies if route change from here
   }, [
      episode,
      getHistory,
      getHistoryData?.watchHistories,
      router.isFallback,
      router.query.id,
      season,
      userId,
   ])
   return {
      getHistoryData,
      getHistoryLoading,
      getHistoryError,
   }
}
