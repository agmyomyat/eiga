import { useShouldLogOut } from '@contexts/global-states/useShouldLogOut'
import { Snackbar } from '@mui/material'
import { Alert, AlertTitle } from '@mui/material'
import React from 'react'

const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
   if (reason === 'clickaway') return
   useShouldLogOut.getState().setLogOut(false)
}

export default function DetectOtherLogin() {
   const shouldLogOut = useShouldLogOut((state) => state.logOut)
   return (
      <Snackbar open={shouldLogOut} onClose={handleClose}>
         <Alert
            onClose={handleClose}
            severity="error"
            elevation={6}
            variant="filled"
         >
            <AlertTitle>We detected Another Login</AlertTitle>
            This alert shows if you logged in from another device recently.You
            need to relogin again.
         </Alert>
      </Snackbar>
   )
}
