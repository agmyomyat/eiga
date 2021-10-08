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
   season: number
   episode: number
}) {
   const router = useRouter()
   const [
      getHistory,
      {
         data: getHistoryData,
         loading: getHistoryLoading,
         error: getHistoryError,
      },
   ] = useGetWatchHistoryLazyQuery()
   useEffect(() => {
      if (!router.query.id || !userId || !season || !episode) return
      getHistory({
         variables: { movieUuid: router.query.id as string, user: userId },
      })

      if (
         userId &&
         getHistoryData?.watchHistories[0]?.season === season &&
         getHistoryData?.watchHistories[0]?.episode === episode
      ) {
         return setTimer(false)
      }
      setTimer(true)
      return () => setTimer(true) //to update movies if route change from here
   }, [
      episode,
      getHistory,
      getHistoryData?.watchHistories,
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
