import { signIn, signOut } from 'next-auth/react'
export default function Component() {
   return (
      <>
         <button onClick={() => void signOut()}>Sign out</button>
         Not signed in <br />
         <button onClick={() => void signIn()}>Sign in</button>
      </>
   )
}
