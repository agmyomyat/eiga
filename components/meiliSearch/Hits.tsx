import { useEffect, useCallback, useRef } from 'react';
import { connectInfiniteHits } from 'react-instantsearch-dom';
import { HitsProvided } from 'react-instantsearch-core';
import Movies from '../movies/Movies';

function Hits({ hits, hasMore, refineNext }: HitsProvided<any>) {
   const sentinel = useRef(null);
   // console.log('sentinel', sentinel);

   useEffect(() => {
      const onSentinelIntersection = entries => {
         entries.forEach(entry => {
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
      <div>
         <Movies movies={hits} />
         <div id="sentinel" ref={sentinel} />
      </div>
   );
}

const CustomHits = connectInfiniteHits(Hits);

export default CustomHits;
