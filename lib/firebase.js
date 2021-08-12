import firebase from 'firebase/app';
import 'firebase/auth';

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
         provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
         defaultCountry: 'MM',
         recaptchaParameters: {
            type: 'image', // 'audio'
            size: 'normal', // 'invisible' or 'compact'
            badge: 'bottomleft', //' bottomright' or 'inline' applies to invisible.
         },
      },
   ],
   callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
   },
};
