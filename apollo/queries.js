import { gql } from '@apollo/client';

export const GET_ALL_MOVIES = gql`
   {
      movies {
         name
         id
         date
         quality
         photo_url
      }
   }
`;
