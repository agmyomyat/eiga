
import { useEffect, useState } from 'react';
import { useGetMovieLazyQuery } from '../../graphgen/graphql';
import { NextRouter, useRouter } from 'next/router';

export default function MoviePage(){
   const [getMovie, { data }] = useGetMovieLazyQuery({
      fetchPolicy: 'network-only',
   });
   const router:NextRouter = useRouter();
   const { id } = router.query;
   console.log(id);
   useEffect(() => {
      if (id && !data) {
         getMovie({
            variables: { uuid: id as string },
         });
      }
      console.log('data', data);
   }, [data, getMovie, id]);

   return (
      <div>movies</div>
     );
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
