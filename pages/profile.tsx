import React, { useEffect } from 'react'
import { GetStaticProps } from 'next'
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
import { useAlreadyLogin } from '@contexts/global-states/useAlreadyLogin'
import ProfileSkeleton from '@components/movies/ProfileSkeleton'
import { useErrorMessage } from '@contexts/global-states/useErrorMessage'

const setAuthLoading = useAuthLoading.getState().setLoading
const setAlreadyLogin = useAlreadyLogin.getState().setLogin
const setErrorMessageModal = useErrorMessage.getState().setErrorMessage

function redirect() {
   setAlreadyLogin(false)
   const provider = new GoogleAuthProvider()
   signInWithRedirect(auth, provider)
   setAuthLoading(true)
}
/**
 * @TODO: put error handle for redirctAuth user canceled or orther
 */
function redirectAuth() {
   const alreadyLogin = useAlreadyLogin.getState().login
   if (alreadyLogin) return
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
            setAlreadyLogin(true)
         })

         // The signed-in user info.
         const user = result.user
      })
      .catch((error) => {
         setAuthLoading(false)
         console.log(error)
         const errorCode = error.code
         const errorMessage = error.message
         setErrorMessageModal(error.message)
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
   const currentDate = new Date().getTime()
   const msToDay = 24 * 60 * 60 * 1000
   const expireDate = new Date(userData?.expire).getTime()
   const remainingDays = Math.round(
      Math.abs((expireDate - currentDate) / msToDay)
   )

   console.log('expire', new Date(userData?.expire))

   useEffect(() => {
      redirectAuth()
   }, [])

   const handleSignOut = async () => {
      logOut()
   }

   return (
      <Container>
         <Typography
            align="center"
            variant="h5"
            component="h3"
            fontWeight="bold"
         >
            Profile
         </Typography>
         {getUserLoading || authLoading ? (
            <ProfileSkeleton />
         ) : (
            <>
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

                           <Typography>
                              {userData.verify ? 'Yes' : 'No'}
                           </Typography>
                        </Paper>

                        {userData?.premium && (
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

                              <Typography>{remainingDays} days</Typography>
                           </Paper>
                        )}

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
                  <Box
                     display="flex"
                     justifyContent="center"
                     alignItems="center"
                     mt={5}
                     py={5}
                     maxWidth={500}
                     mx="auto"
                  >
                     <Button
                        variant="contained"
                        color="primary"
                        sx={{
                           width: 1,
                           py: 1,
                        }}
                        onClick={() => redirect()}
                     >
                        Contiune with Google
                     </Button>
                  </Box>
               )}
            </>
         )}
      </Container>
   )
}

export const getStaticProps: GetStaticProps = () => {
   return {
      props: {
         title: 'Profile',
      },
   }
}
