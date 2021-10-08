import { SignUpDocument, SignUpMutationResult } from '@graphgen'
import { setAccessToken } from '@helpers/accessToken'
import { initializeApollo } from '..'
const client = initializeApollo()
export async function createUser(authResult) {
   const { data, error }: Partial<SignUpMutationResult> = await client.mutate({
      mutation: SignUpDocument,
      variables: { uuid: authResult.user.email },
   })
   console.log('firebase callback', data)
   setAccessToken(data.signupClient.accessToken)
   console.log('error', error)
}
