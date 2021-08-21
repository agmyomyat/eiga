import { useEffect, useState } from 'react';

import { useGetMovieLazyQuery } from '../../graphgen/graphql';

import { useRouter } from 'next/router';
import { GET_MOVIE } from '../../apollo/queries';
import { useLazyQuery } from '@apollo/client';

export default function MoviePage() {
   const [getMovie, { data }] = useGetMovieLazyQuery({
      fetchPolicy: 'network-only',
   });

   const { id } = query;
   console.log(query);
   useEffect(() => {
      if (id && !data) {
         getMovie({
            variables: { uuid: id },
         });
      }
      console.log('data', data);
   }, [data, getMovie, id]);

   return <div>Movie Page</div>;
}

export async function getStaticPaths() {
   return {
      paths: [],
      fallback: true,
   };
}

export async function getStaticProps() {
   // const { id } = params;

   // await apolloClient.query({
   //    query: GET_MOVIE,
   //    variables: { id },
   // });

   return {
      props: {
         greeting: 'hello',
      },
   };
}
