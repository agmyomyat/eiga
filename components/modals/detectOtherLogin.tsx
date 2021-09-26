import { gqlInvalidToken } from '@apollo/apolloReactiveVar'
import { useShouldLogOut } from '@contexts/global-states/useShouldLogOut'
import { Snackbar } from '@mui/material'
import { Alert, AlertTitle } from '@mui/material'
import React from 'react'

const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
   if (reason === 'clickaway') return
   gqlInvalidToken({ shouldLogOut: false })
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
            Don&apos;t Share Your Account To Others!
         </Alert>
      </Snackbar>
   )
}
