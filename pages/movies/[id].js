import { useEffect, useState } from 'react';
import {useGetMovieLazyQuery} from '../../graphgen/graphql'
import { useRouter } from 'next/router';

export default function MoviePage() {
   const [getMovie,{ data, loading }] = useGetMovieLazyQuery({
     fetchPolicy:'network-only' 
   });
   const { query } = useRouter();
   const { id } = query;

   console.log(query);
   useEffect(()=>{
   if(id&&!data){
      getMovie({
         variables:{id}
      })
   }
   console.log(data)
   },[getMovie,id,data])
   


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
         greeting:"hello"
      },
   };
}
