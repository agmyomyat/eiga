import { useEffect } from 'react'
import { useUpdateMovieViewMutation } from '@graphgen'
export default function useUpdateViews(uuid: string) {
   const [updateMovieView, { data }] = useUpdateMovieViewMutation({
      variables: { uuid },
   })
   useEffect(() => {
      const _timerRef = setTimeout(updateMovieView, 180000)
      return () => clearTimeout(_timerRef)
   }, [updateMovieView])
}
