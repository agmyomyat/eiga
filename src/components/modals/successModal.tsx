import { useSuccessMessage } from '@contexts/global-states/useSuccessMessage'
import { Snackbar } from '@mui/material'
import { Alert, AlertTitle } from '@mui/material'
import React from 'react'
const setMessage = useSuccessMessage.getState().setSuccessMessage
const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
   if (reason === 'clickaway') return
   setMessage('')
}

export default function SuccessModal() {
   const message = useSuccessMessage((state) => state.message)
   return (
      <Snackbar open={!!message} onClose={handleClose}>
         <Alert
            onClose={handleClose}
            severity="success"
            elevation={6}
            variant="filled"
         >
            <AlertTitle>{message}</AlertTitle>
         </Alert>
      </Snackbar>
   )
}
