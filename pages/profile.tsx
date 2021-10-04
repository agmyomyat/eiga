import React, { useEffect } from 'react'
import { useRouter, NextRouter } from 'next/router'
import { useAuth } from '@contexts/AuthContext'
import { createUser } from '@apollo/mutationfn/createUser'
import { Container, Button, Stack, Box, Typography, Paper } from '@mui/material'
import {
   getRedirectResult,
   GoogleAuthProvider,
   signInWithRedirect,
} from 'firebase/auth'
import { auth } from '@lib'
import { useCheckUser } from '@contexts/global-states/useCheckUser'
import { useAuthLoading } from '@contexts/global-states/useAuthLoading'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

const setAuthLoading = useAuthLoading.getState().setLoading

function redirect() {
   const provider = new GoogleAuthProvider()
   signInWithRedirect(auth, provider)
}
/**
 * @TODO: put error handle for redirctAuth user canceled or orther
 */
function redirectAuth() {
   setAuthLoading(true)
   getRedirectResult(auth)
      .then((result) => {
         // This gives you a Google Access Token. You can use it to access Google APIs.
         const credential = GoogleAuthProvider.credentialFromResult(result)
         const token = credential.accessToken
         console.log('asdlfdaskfkdsf', result)
         createUser(result).then(() => {
            useCheckUser.getState().setCheckUser(true)
            setAuthLoading(false)
         })

         // The signed-in user info.
         const user = result.user
      })
      .catch((error) => {
         setAuthLoading(false)
         console.log(error)
         const errorCode = error.code
         const errorMessage = error.message
         // The email of the user's account used.
         const email = error.email
         // The AuthCredential type that was used.
         const credential = GoogleAuthProvider.credentialFromError(error)
         console.log(errorCode)
         console.log(errorMessage)
         // ...
      })
}

export default function Profile() {
   const authLoading = useAuthLoading((state) => state.loading)
   const { getUserLoading, userData, logOut } = useAuth()
   const { push }: NextRouter = useRouter()
   useEffect(() => {
      redirectAuth()
   }, [])

   const handleSignOut = async () => {
      logOut()
   }

   if (getUserLoading || authLoading) {
      return <h1>Loading...</h1>
   }

   return (
      <Container sx={{ mb: '100px' }}>
         <Typography
            align="center"
            variant="h5"
            component="h3"
            fontWeight="bold"
         >
            Profile
         </Typography>
         {userData?.userName ? (
            <Box sx={{ mt: 1 }}>
               <Stack
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                  mt={3}
                  sx={{
                     maxWidth: '600px',
                     mx: 'auto',
                  }}
               >
                  <Paper
                     sx={{
                        width: 1,
                        bgcolor: 'secondary.main',
                        p: 2,
                        borderRadius: 3,
                     }}
                     elevation={3}
                  >
                     <Typography color="textSecondary" sx={{ pb: 2 }}>
                        Email
                     </Typography>

                     <Typography>{userData.userName}</Typography>
                  </Paper>

                  <Paper
                     sx={{
                        width: 1,
                        bgcolor: 'secondary.main',
                        p: 2,
                        borderRadius: 3,
                     }}
                     elevation={3}
                  >
                     <Typography color="textSecondary" sx={{ pb: 2 }}>
                        Current Plan
                     </Typography>

                     <Typography>
                        {userData?.premium ? 'Premium' : 'Free'}
                     </Typography>
                  </Paper>

                  <Paper
                     sx={{
                        width: 1,
                        bgcolor: 'secondary.main',
                        p: 2,
                        borderRadius: 3,
                     }}
                     elevation={3}
                  >
                     <Typography color="textSecondary" sx={{ pb: 2 }}>
                        Verified
                     </Typography>

                     <Typography>{userData.verify ? 'Yes' : 'No'}</Typography>
                  </Paper>

                  <Paper
                     sx={{
                        width: 1,
                        bgcolor: 'secondary.main',
                        p: 2,
                        borderRadius: 3,
                     }}
                     elevation={3}
                  >
                     <Typography color="textSecondary" sx={{ pb: 2 }}>
                        Remaining Time
                     </Typography>

                     <Typography>26 days</Typography>
                  </Paper>

                  <Paper
                     sx={{
                        width: 1,
                        bgcolor: 'secondary.main',
                        p: 2,
                        borderRadius: 3,
                     }}
                     elevation={3}
                  >
                     <Typography color="textSecondary" sx={{ pb: 2 }}>
                        How To Subscribe
                     </Typography>

                     <Button
                        color="inherit"
                        endIcon={<ArrowRightAltIcon />}
                        onClick={() => push('/pricing')}
                     >
                        Go Check For Pricing
                     </Button>
                  </Paper>

                  <Paper
                     sx={{
                        width: 1,
                        bgcolor: 'secondary.main',
                        p: 2,
                        borderRadius: 3,
                     }}
                     elevation={3}
                  >
                     <Typography color="textSecondary" sx={{ pb: 2 }}>
                        History
                     </Typography>

                     <Button
                        color="inherit"
                        endIcon={<ArrowRightAltIcon />}
                        onClick={() => push('/recents')}
                     >
                        Click
                     </Button>
                  </Paper>

                  <Button
                     variant="contained"
                     color="error"
                     onClick={handleSignOut}
                     sx={{
                        px: 3,
                        py: 1.5,
                        width: { xs: 1 },
                     }}
                  >
                     Log Out
                  </Button>
               </Stack>
            </Box>
         ) : (
            // <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
            <button onClick={() => redirect()}>redirect login</button>
         )}
      </Container>
   )
}
