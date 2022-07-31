import { useEffect } from 'react'
import { useUpdateMovieViewMutation } from '@graphgen'
export default function useUpdateViews({
   uuid,
   premiumUser,
}: {
   uuid: string
   premiumUser: boolean
}) {
   const [updateMovieView, { data }] = useUpdateMovieViewMutation({
      variables: { uuid },
   })
   useEffect(() => {
      if (!uuid || !premiumUser) return

      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      const _timerRef = setTimeout(updateMovieView, 60000)
      return () => clearTimeout(_timerRef)
   }, [premiumUser, updateMovieView, uuid])
}
