/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useEffect, useRef } from 'react'
import Movies from '@components/movies/Movies'

function Hits({ hits, hasMore, refineNext }) {
   const sentinel = useRef<HTMLDivElement | null>(null)
   // console.log('sentinel', sentinel);

   useEffect(() => {
      const onSentinelIntersection = (entries: IntersectionObserverEntry[]) => {
         entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting && hasMore) {
               refineNext()
            }
         })
      }

      const observer = new IntersectionObserver(onSentinelIntersection, {})
      // console.log('observer', observer)
      observer.observe(sentinel.current)

      return () => observer.disconnect()
   }, [hasMore, refineNext])

   return (
      <>
         <Movies movies={hits as []} />
         <div id="sentinel" ref={sentinel} />
      </>
   )
}

const CustomHits = Hits

export default CustomHits
