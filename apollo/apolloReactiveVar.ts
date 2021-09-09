import { makeVar, ReactiveVar } from '@apollo/client';
export type ReactiveValue = { logOut: boolean };
export const gqlInvalidToken: ReactiveVar<ReactiveValue> = makeVar({ logOut: false });
