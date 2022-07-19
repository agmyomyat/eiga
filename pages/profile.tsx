import React, { useEffect } from 'react'
import { GetStaticProps } from 'next'
import { useRouter, NextRouter } from 'next/router'
import { useAuth } from '@contexts/AuthContext'
import { createUser } from '@apollo/mutationfn/createUser'
import {
   Container,
   Button,
   Stack,
   Box,
   Typography,
   Paper,
   InputBase,
   alpha,
} from '@mui/material'
// import { auth } from '@lib'
import { useCheckUser } from '@contexts/global-states/useCheckUser'
import { useAuthLoading } from '@contexts/global-states/useAuthLoading'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { useAlreadyLogin } from '@contexts/global-states/useAlreadyLogin'
import ProfileSkeleton from '@components/movies/ProfileSkeleton'
import { useErrorMessage } from '@contexts/global-states/useErrorMessage'
import { useCheckValidReferralCodeLazyQuery } from '@graphgen'
import { setAccessToken } from '@helpers/accessToken'
import { useSuccessMessage } from '@contexts/global-states/useSuccessMessage'
import { useGoogleLogin } from '@react-oauth/google'

const setAuthLoading = useAuthLoading.getState().setLoading
const setErrorMessageModal = useErrorMessage.getState().setErrorMessage
const setSuccessMessage = useSuccessMessage.getState().setSuccessMessage

export default function Profile() {
   const [referralCodeInboxValue, setreferralCodeInboxValue] =
      React.useState<string>('')
   const authLoading = useAuthLoading((state) => state.loading)
   const [checkValidReferralCode, { loading: checkValidReferralCodeLoading }] =
      useCheckValidReferralCodeLazyQuery({
         fetchPolicy: 'network-only',
         ssr: false,
         onCompleted: (data) => {
            if (data.checkValidReferralCode.ok) {
               setSuccessMessage('Your Account Has upgraded')
               setAccessToken(data.checkValidReferralCode.jwtRenewToken)
               return useCheckUser.getState().setCheckUser(true)
            }
            setErrorMessageModal('Your Referral Code is invalid')
         },
      })
   const { getUserLoading, userData, logOut } = useAuth()
   const { push, query, replace }: NextRouter = useRouter()
   const currentDate = new Date().getTime()
   const msToDay = 24 * 60 * 60 * 1000
   const expireDate = new Date(userData?.expire).getTime()
   const remainingDays = Math.round(
      Math.abs((expireDate - currentDate) / msToDay)
   )

   // console.log('expire', new Date(userData?.expire))
   const login = useGoogleLogin({
      onSuccess: (tokenResponse) => console.log(tokenResponse),
      flow: 'auth-code',
      redirect_uri: `${process.env.API_URL}/user-data/auth/google/callback`,
      ux_mode: 'redirect',
      scope: 'https://www.googleapis.com/auth/userinfo.profile',
   })

   const handleSignOut = () => {
      void logOut()
   }

   const handleSubmitReferralCode = async (
      e: React.FormEvent<HTMLFormElement>
   ) => {
      e.preventDefault()
      await checkValidReferralCode({
         variables: { code: referralCodeInboxValue },
      })
      console.log('referralValue', referralCodeInboxValue)
      setreferralCodeInboxValue('')
   }
   // why use replace method is i dont want to remain profile history with token query
   useEffect(() => {
      setAuthLoading(true)
      if (query.at && query.rt) {
         localStorage.setItem('eg0192', query.at as string)
         localStorage.setItem('egrt', query.rt as string)
         replace('/profile')
            .then(() => {
               setAuthLoading(false)
            })
            .catch((e) => console.log(e))
         return
      }
      if (query.error) {
         setErrorMessageModal(query.error as string)
         void replace('/profile')
         return
      }
      setAuthLoading(false)
   }, [query.at, query.error, query.rt, replace])
   //check dinger callback transaction fail or success
   useEffect(() => {
      if (query.KBZ_APP_STATUS === 'SUCCESS') {
         setSuccessMessage('Your transaction successful')
         void replace('/profile')
         return
      }
      if (query.KBZ_APP_STATUS === 'FAIL') {
         setErrorMessageModal('Your transaction failed')
         void replace('/profile')
         return
      }
   }, [query.KBZ_APP_STATUS, replace])

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

                           <Typography>{userData?.userName}</Typography>
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
                              {userData?.verify ? 'Yes' : 'No'}
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
                              onClick={() => void push('/pricing')}
                           >
                              Go Check For Pricing
                           </Button>
                        </Paper>
                        {/* editing */}
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
                              Referral Id
                           </Typography>

                           <Box
                              component="form"
                              noValidate
                              role="referral"
                              onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                                 void handleSubmitReferralCode(e)
                              }
                              sx={{
                                 display: 'flex',
                                 alignItems: 'center',
                                 position: 'relative',
                                 width: 1,
                              }}
                           >
                              <InputBase
                                 autoFocus
                                 placeholder="Enter referral id"
                                 inputProps={{ 'aria-label': 'referral' }}
                                 value={referralCodeInboxValue}
                                 onChange={(e) => {
                                    setreferralCodeInboxValue(e.target.value)
                                    if (!e.target.value) return
                                    setErrorMessageModal('') // this two setstate is needed in order not to conflict with two modals showing on each other
                                    setSuccessMessage('')
                                 }}
                                 sx={{
                                    color: 'inherit',
                                    '& .MuiInputBase-input': {
                                       borderRadius: 1,
                                       bgcolor: (theme) =>
                                          alpha(
                                             theme.palette.common.white,
                                             0.15
                                          ),
                                       '&:hover': {
                                          bgcolor: (theme) =>
                                             alpha(
                                                theme.palette.common.white,
                                                0.25
                                             ),
                                       },
                                       p: 1,
                                       // vertical padding + font size from searchIcon
                                       pl: 3,
                                       transition: (theme) =>
                                          theme.transitions.create('width'),
                                       width: 1,
                                    },
                                 }}
                              />
                              <Button
                                 color="primary"
                                 variant="contained"
                                 type="submit"
                                 disabled={checkValidReferralCodeLoading}
                                 sx={{ ml: 2 }}
                              >
                                 Procced
                              </Button>
                           </Box>

                           {/* editing */}
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
                        onClick={() => {
                           // void fetch('/api/callback?logOut=true')
                           // googleLogout()
                           login()
                        }}
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
