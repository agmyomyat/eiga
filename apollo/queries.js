import { gql } from '@apollo/client';

export const GET_ALL_MOVIES = gql`
   {
      movies {
         name
         uuid
         id
         date
         quality
         photo_url
      }
   }
`;

export const GET_MOVIE = gql`
   query getMovie($uuid: String!) {
      movies(where: { uuid: $uuid }) {
         name
         id
         date
         quality
         photo_url
      }
   }
`;

export const GET_USER = gql`
   query getUser($uuid: String!) {
      userData(where: { uuid: $uuid }) {
         uuid
         verify
         expire
      }
   }
`;
