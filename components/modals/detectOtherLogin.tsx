import { gqlInvalidToken } from '@apollo/apolloReactiveVar';
import { useAuth } from '@contexts/AuthContext';
import { Modal, Snackbar, SnackbarProps } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import React from 'react';

const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
   if (reason === "clickaway") return;
   gqlInvalidToken({ logOut: false });
};

export default function DetectOtherLogi() {
   const {reactiveToken} = useAuth()
   return (
      <Snackbar open={reactiveToken.logOut} onClose={handleClose}>
         <Alert onClose={handleClose} severity="error" elevation={6} variant="filled">
            <AlertTitle>We detected Another Login</AlertTitle>
            Don&apos;t Share Your Account To Others!
         </Alert>
      </Snackbar>
   );
}
