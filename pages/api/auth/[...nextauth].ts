import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
   // Configure one or more authentication providers
   providers: [
      GoogleProvider({
         clientId:
            '1029380852094-9sja9vh1usvgb1dpfdderptkb81jkd1r.apps.googleusercontent.com',
         clientSecret: '6rzAufZaSlG1pspWsQEgpLcA',
      }),
      // ...add more providers here
   ],
   callbacks: {
      //       signIn({ account, profile }) {
      //          if (account.provider === 'google') {
      //             console.log('account', profile.email)
      //             console.log('account', profile)
      //          }
      //          return true // Do different verification for other providers that don't have `email_verified`
      //       },
      jwt({ token, account }) {
         // Persist the OAuth access_token to the token right after signin
         if (account) {
            console.log('token', token)
            console.log('account', account)

            token.accessToken = account.access_token
         }
         return token
      },
   },
})
