import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../apollo';
import { ThemeProvider } from '@material-ui/core/styles';
import AuthProvider from '../contexts/AuthContext';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../components/ui/theme';
import Layout from '../components/layout/Layout';
// import 'instantsearch.css/themes/reset.css';

function MyApp(props) {
   const { Component, pageProps } = props;
   const apolloClient = useApollo(pageProps.initialApolloState);

   React.useEffect(() => {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles) {
         jssStyles.parentElement.removeChild(jssStyles);
      }
   }, []);

   return (
      <React.Fragment>
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
      </React.Fragment>
   );
}

MyApp.propTypes = {
   Component: PropTypes.elementType.isRequired,
   pageProps: PropTypes.object.isRequired,
};

export default MyApp;
