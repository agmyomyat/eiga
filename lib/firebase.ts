import firebase from 'firebase/app';
import 'firebase/auth';
import { initializeApollo } from '@apollo/index';
import { setAccessToken } from '@helpers/accessToken';
import { SignUpDocument } from '@graphgen';

async function createUser(authResult) {
   const { data, error } = await client.mutate({
      mutation: SignUpDocument,
      variables: { uuid: authResult.user.email },
   });
   console.log('firebase callback', data);
   setAccessToken(data.signupClient.accessToken);
   console.log('error', error);
}

const client = initializeApollo();

if (!firebase.apps.length) {
   firebase.initializeApp({
      apiKey: 'AIzaSyCLCicRlhg4L8TZXuM5aIr_SfMd4a8A5-Q',
      authDomain: 'movie-auth-86c8f.firebaseapp.com',
      projectId: 'movie-auth-86c8f',
      storageBucket: 'movie-auth-86c8f.appspot.com',
      messagingSenderId: '1005160630630',
      appId: '1:1005160630630:web:01cb2f3317399ac9f7e0a7',
   });
} else {
   firebase.app();
}

export const auth = firebase.auth();

export const uiConfig: firebaseui.auth.Config = {
   signInFlow: 'popup',
   signInOptions: [
      {
         provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
         scopes: ['https://www.googleapis.com/auth/contacts.readonly'],
         customParameters: {
            prompt: 'select_account',
         },
      },
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
   ],

   callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: authResult => {
         console.log('authresult', authResult);
         createUser(authResult);
         return false;
      },

      // Process result. This will not trigger on merge conflicts.

      // On success redirect to signInSuccessUrl.
   },
};
