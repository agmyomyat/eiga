import {
   Box,
   Typography,
   Button,
   Divider,
   Alert,
   AlertTitle,
   FormControl,
   InputLabel,
   MenuItem,
   Select,
   SelectChangeEvent,
} from '@mui/material'
import { Plan } from '@helpers/plans'
import Link from 'next/link'
import { Link as MuiLink } from '@mui/material'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useGetTransactionTokenLazyQuery } from '@graphgen'
import { useErrorMessage } from '@contexts/global-states/useErrorMessage'

const setErrorMessageModal = useErrorMessage.getState().setErrorMessage
interface Ivoucher {
   isLoggedIn: boolean
   handleBack: () => void
   currentPlan: Plan
}
enum PaymentMethod {
   QrCode = 'QrCode',
   KBZApp = 'KBZApp',
}

const Voucher: React.FC<Ivoucher> = ({
   isLoggedIn,
   handleBack,
   currentPlan,
}) => {
   const router = useRouter()
   const [paymentMethod, setPaymentMethod] = useState<string>(
      PaymentMethod.QrCode
   )
   /**@important no-cache policy must be set */
   const [getTransactionToken, { loading: getTransactionTokenLoading }] =
      useGetTransactionTokenLazyQuery({ fetchPolicy: 'no-cache' })
   const paymentMethodHandleChange = (event: SelectChangeEvent) => {
      setPaymentMethod(event.target.value)
   }
   const handleRedirect = async () => {
      const transactionToken = await getTransactionToken({
         variables: {
            paymentMethod: paymentMethod === PaymentMethod.KBZApp ? 2 : 1,
            quantity: parseInt(currentPlan.month),
         },
      })
      //redirect to checkout with qr or pwa token to generate qr code or redirect link, order id and transaction id to query transaction status
      if (transactionToken.data.transactionPaymentToken.orderId) {
         if (
            transactionToken.data.transactionPaymentToken.PwaToken &&
            transactionToken.data.transactionPaymentToken.PwaToken !== 'null'
         ) {
            window.open(
               `${process.env.DINGER_MERCHANT_REDIRECT_URL}?transactionNo=${transactionToken.data.transactionPaymentToken.transactionId}&formToken=${transactionToken.data.transactionPaymentToken.PwaToken}&merchantOrderId=${transactionToken.data.transactionPaymentToken.orderId}`,
               '_blank'
            )
         }
         void router.push(
            `/checkout?transactionId=${transactionToken.data.transactionPaymentToken.transactionId}&orderId=${transactionToken.data.transactionPaymentToken.orderId}&qrCode=${transactionToken.data.transactionPaymentToken.qrCode}&PWAToken=${transactionToken.data.transactionPaymentToken.PwaToken}&paymentMethod=${paymentMethod}`
         )
         return null
      }
      setErrorMessageModal('Something went wrong try refreshing the page')
   }

   return (
      <Box width={1} my={5} py={5}>
         {isLoggedIn ? (
            <Box
               maxWidth="400px"
               mx="auto"
               sx={{
                  mt: {
                     xs: 1,
                     sm: 5,
                  },
               }}
               p={5}
               pt={2}
               boxShadow={10}
            >
               <Box py={3}>
                  <Typography variant="h5" component="h2" align="center">
                     Subscription Details
                  </Typography>
               </Box>
               <Divider />
               <Box>
                  <Box py={2}>
                     <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                           Payment Method
                        </InputLabel>
                        <Select
                           labelId="payment-select-label"
                           id="payment-select"
                           value={paymentMethod}
                           label="Payment Method"
                           onChange={paymentMethodHandleChange}
                        >
                           <MenuItem value={PaymentMethod.QrCode}>
                              QrCode
                           </MenuItem>
                           <MenuItem value={PaymentMethod.KBZApp}>
                              KBZApp
                           </MenuItem>
                        </Select>
                     </FormControl>
                     <Typography
                        variant="subtitle2"
                        component="h3"
                        color="textSecondary"
                        sx={{ py: 1 }}
                     >
                        Selected Plan
                     </Typography>
                     <Typography variant="subtitle1" component="h4">
                        Premium - {currentPlan.month}
                     </Typography>
                  </Box>
                  <Box py={2}>
                     <Typography
                        variant="subtitle2"
                        component="h3"
                        color="textSecondary"
                        sx={{ py: 1 }}
                     >
                        Total Price
                     </Typography>
                     <Typography variant="subtitle1" component="h4">
                        {currentPlan.price}MMK
                     </Typography>
                  </Box>
                  <Divider />
                  <Box
                     sx={{
                        pt: 4,
                        width: 1,
                        display: 'flex',
                        justifyContent: 'flex-end',
                     }}
                  >
                     <Button
                        disabled={getTransactionTokenLoading}
                        variant="outlined"
                        size="small"
                        sx={{ mr: 2 }}
                        onClick={handleBack}
                     >
                        Cancel
                     </Button>
                     <Button
                        disabled={getTransactionTokenLoading}
                        variant="contained"
                        size="small"
                        onClick={() => void handleRedirect()}
                     >
                        {getTransactionTokenLoading
                           ? 'Redirecting...'
                           : 'Confirm'}
                     </Button>
                  </Box>
               </Box>
            </Box>
         ) : (
            <Box
               maxWidth="600px"
               mx="auto"
               sx={{
                  mt: {
                     xs: 2,
                     sm: 5,
                  },
                  py: {
                     xs: 2,
                     sm: 5,
                  },
               }}
            >
               <Alert severity="error">
                  <AlertTitle>You&apos;re Not Logged In</AlertTitle>
                  Please login first to subscribe.
               </Alert>
               <Box
                  display="flex"
                  justifyContent="space-between"
                  mt={2}
                  color="text.secondary"
               >
                  <MuiLink
                     component="button"
                     variant="body2"
                     color="inherit"
                     onClick={handleBack}
                  >
                     Back
                  </MuiLink>
                  <Typography variant="body2">
                     <Link href="/profile" passHref>
                        <MuiLink color="inherit" underline="hover">
                           Log In?
                        </MuiLink>
                     </Link>
                  </Typography>
               </Box>
            </Box>
         )}
      </Box>
   )
}

export default Voucher
