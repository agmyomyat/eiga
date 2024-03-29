import React, { useEffect } from 'react'
import { useRouter, NextRouter } from 'next/router'
import Head from 'next/head'
import type { AppProps /*, AppContext */ } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@apollo/index'
import { ThemeProvider } from '@mui/material/styles'
import AuthProvider from '@contexts/AuthContext'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@components/ui/theme'
import createEmotionCache from '@components/ui/createEmotionCache'
import Layout from '@components/layout/Layout'
import { CacheProvider, EmotionCache } from '@emotion/react'
import DetectOtherLogin from '@components/modals/detectOtherLogin'
import ErrorHandler from '@components/modals/errorHandler'
import Progress from '@components/progressBar/Progress'
import { useProgress } from '@contexts/global-states/useProgress'
import LoadingModal from '@components/ui/LoadingModal'
import SuccessModal from '@components/modals/successModal'
import { GoogleOAuthProvider } from '@react-oauth/google'

// console.log = function () {
//    return null
// }
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
   emotionCache?: EmotionCache
}

function MyApp(props: MyAppProps) {
   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
   const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
   // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
   const apolloClient = useApollo(pageProps.initialApolloState)

   const setIsAnimating = useProgress((state) => state.setIsAnimating)
   const isAnimating = useProgress((state) => state.isAnimating)
   const router: NextRouter = useRouter()
   const fallbackLoading = router?.isFallback

   useEffect(() => {
      const handleStart = () => {
         setIsAnimating(true)
      }

      const handleStop = () => {
         setIsAnimating(false)
      }

      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleStop)
      router.events.on('routeChangeError', handleStop)

      return () => {
         router.events.off('routeChangeStart', handleStart)
         router.events.off('routeChangeComplete', handleStop)
         router.events.off('routeChangeError', handleStop)
      }
   }, [router, setIsAnimating])

   const pageTitle = `${(pageProps as { title: string }).title} | Rose Stream`
   return (
      <CacheProvider value={emotionCache}>
         <Head>
            <title>{pageTitle}</title>
            <meta
               property="og:image"
               /* eslint-disable */
               content={pageProps?.data?.getMovie?.wide_poster}
               key="image"
            />
            <meta property="og:image:width" content="1600" key="image-width" />
            <meta property="og:image:height" content="900" key="image-height" />
            <meta
               name="viewport"
               content="minimum-scale=1, initial-scale=1, width=device-width"
            />
         </Head>
         <ApolloProvider client={apolloClient}>
            <ThemeProvider theme={theme}>
               {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
               <GoogleOAuthProvider
                  clientId={process.env.GOOGLE_PROVIDER_CLIENT_ID}
               >
                  <AuthProvider>
                     <CssBaseline />
                     <Progress isAnimating={isAnimating} />
                     <Layout>
                        <Component {...pageProps} />
                        <DetectOtherLogin />
                        <ErrorHandler />
                        <SuccessModal />
                        <LoadingModal open={fallbackLoading} />
                     </Layout>
                  </AuthProvider>
               </GoogleOAuthProvider>
            </ThemeProvider>
         </ApolloProvider>
      </CacheProvider>
   )
}

export default MyApp
