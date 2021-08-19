import { gql } from '@apollo/client';

export const CREATE_USER = gql`
   mutation signup($uuid: String!) {
      signupClient(uuid: $uuid) {
         ok
         status
         accessToken
      }
   }
`;
