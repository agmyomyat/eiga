import { makeVar, ReactiveVar } from '@apollo/client'
export type ReactiveValue = { shouldLogOut: boolean }
export type ReactivecurrentUser = { user: boolean }
export const gqlInvalidToken: ReactiveVar<ReactiveValue> = makeVar({
   shouldLogOut: false,
})
// export const ReactiveCurrentUser:ReactiveVar<ReactivecurrentUser> = makeVar({user:false})
