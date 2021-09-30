import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebase = initializeApp({
   apiKey: 'AIzaSyC9uVF1DBvR2qdxHV4Nxa5Mwbc99Okdx2E',
   authDomain: 'app.eiga.sbs',
   databaseURL: 'https://urnotalone-a16a9.firebaseio.com',
   projectId: 'urnotalone-a16a9',
   storageBucket: 'urnotalone-a16a9.appspot.com',
   messagingSenderId: '1029380852094',
   appId: '1:1029380852094:web:c806b50f516642641f4b2f',
   measurementId: 'G-S374934G2H',
})

export const auth = getAuth(firebase)

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
