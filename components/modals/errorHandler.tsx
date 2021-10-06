import { useErrorMessage } from '@contexts/global-states/useErrorMessage'
import { Snackbar } from '@mui/material'
import { Alert, AlertTitle } from '@mui/material'
import React from 'react'
const setMessage = useErrorMessage.getState().setErrorMessage
const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
   if (reason === 'clickaway') return
   setMessage('')
}

export default function ErrorHandler() {
   const message = useErrorMessage((state) => state.message)
   return (
      <Snackbar open={!!message} onClose={handleClose}>
         <Alert
            onClose={handleClose}
            severity="error"
            elevation={6}
            variant="filled"
         >
            <AlertTitle>{message}</AlertTitle>
         </Alert>
      </Snackbar>
   )
}
