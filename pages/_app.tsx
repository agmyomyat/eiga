import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@apollo/index';
import { ThemeProvider } from '@mui/material/styles';
import AuthProvider from '@contexts/AuthContext';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@components/ui/theme';
import createEmotionCache from '@components/ui/createEmotionCache';
import Layout from '@components/layout/Layout';
import { CacheProvider, EmotionCache } from '@emotion/react';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
   emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
   const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
   const apolloClient = useApollo(pageProps.initialApolloState);

   return (
      <CacheProvider value={emotionCache}>
         <Head>
            <title>My page</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
         </Head>
         <ApolloProvider client={apolloClient}>
            <ThemeProvider theme={theme}>
               {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
               <AuthProvider>
                  <Layout>
                     <CssBaseline />
                     <Component {...pageProps} />
                  </Layout>
               </AuthProvider>
            </ThemeProvider>
         </ApolloProvider>
      </CacheProvider>
   );
}

export default MyApp;
