import firebase from 'firebase/app';
import 'firebase/auth';
import { initializeApollo } from '../apollo';
import { CREATE_USER } from '../apollo/mutations';

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

export const uiConfig = {
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
      signInSuccessWithAuthResult: async authResult => {
         const { data, error } = await client.mutate({
            mutation: CREATE_USER,
            variables: { uuid: authResult.user.email },
         });
         console.log('firebase callback', data);
         localStorage.setItem('EigaAccess',data.signupClient.AccessToken) 
         console.log('error', error);
         return false;
      },

      // Process result. This will not trigger on merge conflicts.

      // On success redirect to signInSuccessUrl.
   },
};
