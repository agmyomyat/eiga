import { useEffect, useState } from 'react';
import { initializeApollo } from '../../apollo/index';
import { useLazyQuery } from '@apollo/client';
import { GET_MOVIE } from '../../apollo/queries';
import { useRouter } from 'next/router';

export default function MoviePage() {
   const { query } = useRouter();
   const { uuid } = query;

   const [getMovie, { data, loading }] = useLazyQuery(GET_MOVIE);

   useEffect(() => {
      if (uuid) {
         getMovie({ variables: { uuid } });
      }
   }, [uuid, getMovie]);

   return <div>Movie Page</div>;
}

// export async function getStaticPaths() {
//    return {
//       paths: [],
//       fallback: 'blocking',
//    };
// }

// export async function getStaticProps() {
//    // const { id } = params;

//    const apolloClient = initializeApollo();

//    // await apolloClient.query({
//    //    query: GET_MOVIE,
//    //    variables: { id },
//    // });

//    return {
//       props: {
//          initialApolloState: apolloClient.cache.extract(),
//       },
//    };
// }
