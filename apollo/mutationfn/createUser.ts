import { SignUpDocument, SignUpMutationResult } from '@graphgen'
import { setAccessToken, setRefreshToken } from '@helpers/accessToken'
import { initializeApollo } from '..'
const client = initializeApollo()
export async function createUser(authResult) {
   const { data, error }: Partial<SignUpMutationResult> = await client.mutate({
      mutation: SignUpDocument,
      variables: { uuid: authResult.user.email, fuuid: authResult.user.uid },
   })
   console.log('firebase callback', data)
   setAccessToken(data.signupClient.accessToken)
   setRefreshToken(data.signupClient.refreshToken)
   console.log('error', error)
}
