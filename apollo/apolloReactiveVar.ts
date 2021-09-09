import { makeVar, ReactiveVar } from '@apollo/client';
export type ReactiveValue= {logOut:boolean}
export type ReactivecurrentUser = {user:boolean}
export const gqlInvalidToken:ReactiveVar<ReactiveValue>= makeVar({logOut:false})
export const ReactiveCurrentUser:ReactiveVar<ReactivecurrentUser> = makeVar({user:false})

