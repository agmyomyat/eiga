import { useEffect } from 'react'
import { useUpdateMovieViewMutation } from '@graphgen'
export default function useUpdateViews(uuid: string) {
   const [updateMovieView, { data }] = useUpdateMovieViewMutation({
      variables: { uuid },
   })
   useEffect(() => {
      if (!uuid) return
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      const _timerRef = setTimeout(updateMovieView, 18000)
      return () => clearTimeout(_timerRef)
   }, [updateMovieView, uuid])
}
