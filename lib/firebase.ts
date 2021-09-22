import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";



const firebase=initializeApp({
      apiKey: 'AIzaSyCLCicRlhg4L8TZXuM5aIr_SfMd4a8A5-Q',
      authDomain: 'movie-auth-86c8f.firebaseapp.com',
      projectId: 'movie-auth-86c8f',
      storageBucket: 'movie-auth-86c8f.appspot.com',
      messagingSenderId: '1005160630630',
      appId: '1:1005160630630:web:01cb2f3317399ac9f7e0a7',
   });

export const auth =getAuth(firebase)

// export const uiConfig: firebaseui.auth.Config = {
//    signInFlow: 'popup',
//    signInOptions: [
//       {
//          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//          scopes: ['https://www.googleapis.com/auth/contacts.readonly'],
//          customParameters: {
//             prompt: 'select_account',
//          },
//       },
//       firebase.auth.EmailAuthProvider.PROVIDER_ID,
//    ],

//    callbacks: {
//       // Avoid redirects after sign-in.
//       signInSuccessWithAuthResult: authResult => {
//          console.log('authresult', authResult);
//          createUser(authResult);
//          return false;
//       },

//       // Process result. This will not trigger on merge conflicts.

//       // On success redirect to signInSuccessUrl.
//    },
// };
