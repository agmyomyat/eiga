
import { Modal, Snackbar, SnackbarProps } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import React from 'react';

type ModalProp = {
   open: boolean;
   handleClose: (event?: React.SyntheticEvent, reason?: string) => void;
};

export default function DetectOtherLogin<T extends ModalProp>({ open, handleClose }: T) {
   return (
      <div>
         {/* <Modal open={open} onClose={() => handleClose(false)}>
            <h1>We detect Another Login Do Not Share Your Account</h1>
         </Modal> */}
         <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" elevation={6} variant="filled">
               <AlertTitle>We detected Another Login</AlertTitle>
               Don&apos;t Share Your Account To Others!
            </Alert>
         </Snackbar>
      </div>
   );
}
