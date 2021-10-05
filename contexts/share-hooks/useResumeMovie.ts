import { useGetWatchHistoryLazyQuery } from '@graphgen'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

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
   }, [episode, getHistory, router.query.id, season, userId])
   return {
      getHistoryData,
      getHistoryLoading,
      getHistoryError,
   }
}
