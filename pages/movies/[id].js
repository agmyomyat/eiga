import { useEffect, useState } from 'react';
import { initializeApollo } from '../../apollo/index';
import { useQuery } from '@apollo/client';
import { GET_MOVIE } from '../../apollo/queries';
import { useRouter } from 'next/router';

export default function MoviePage() {
   const { query } = useRouter();
   const { id } = query;

   console.log(query);

   // const { data, loading } = useQuery(GET_MOVIE, {
   //    variables: { id },
   // });

   // console.log(data);

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
