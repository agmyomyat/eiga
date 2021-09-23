import { ReactivecurrentUser } from 'apollo/apolloReactiveVar';
import { Dispatch } from 'react';
import { ReactiveVar } from '@apollo/client';
import { onAuthStateChanged, Unsubscribe } from '@firebase/auth';
import {auth} from '../lib/firebase'
export let unsubscribeAuth: Unsubscribe;

export const onAuthStateInit = (
   setCurrentUser?: Dispatch<any>,
   setAuthLoading?: Dispatch<any>
) => {
   return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(auth,user => {
         if (setCurrentUser && setAuthLoading) {
            console.log("authstate",user)
            setCurrentUser(user);
            setAuthLoading(false);
         }
         unsubscribeAuth = unsubscribe;
         if (user) {
            resolve(user);
         } else {
            resolve(false);
         }
      }, reject);
   });
};
