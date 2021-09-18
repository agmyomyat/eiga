import { useEffect, useRef } from 'react';
import { connectInfiniteHits } from 'react-instantsearch-dom';
import { InfiniteHitsProvided } from 'react-instantsearch-core';
import Movies from '@components/movies/Movies';

function Hits({ hits, hasMore, refineNext }: InfiniteHitsProvided) {
   const sentinel = useRef<HTMLDivElement | null>(null);
   // console.log('sentinel', sentinel);

   useEffect(() => {
      const onSentinelIntersection = (entries: IntersectionObserverEntry[]) => {
         entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting && hasMore) {
               console.log('refining');
               refineNext();
            }
         });
      };

      const observer = new IntersectionObserver(onSentinelIntersection, {});
      observer.observe(sentinel.current);

      return () => observer.disconnect();
   }, [hasMore, refineNext]);

   return (
      <>
         <Movies movies={hits} />
         <div id="sentinel" ref={sentinel} />
      </>
   );
}

const CustomHits = connectInfiniteHits(Hits);

export default CustomHits;
