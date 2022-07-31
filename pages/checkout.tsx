import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTransaction_StatusLazyQuery } from '@graphgen'
import { QRCodeSVG } from 'qrcode.react'
import {
   Alert,
   LinearProgress,
   Stack,
   Box,
   CircularProgress,
   Typography,
} from '@mui/material'
import { GetStaticProps } from 'next'
import { useCheckUser } from '@contexts/global-states/useCheckUser'
import { setAccessToken } from '@helpers/accessToken'
import { useSuccessMessage } from '@contexts/global-states/useSuccessMessage'
const setSuccessMessage = useSuccessMessage.getState().setSuccessMessage
export default function Checkout() {
   const router = useRouter()
   const { transactionId, orderId, qrCode, paymentMethod } = router.query
   const [getTransactionStatus, { data }] = useTransaction_StatusLazyQuery({
      fetchPolicy: 'no-cache',
      onCompleted: (data) => {
         if (data.transaction_status.accessToken) {
            setSuccessMessage('Your Account Has upgraded')
            setAccessToken(data.transaction_status.accessToken)
            return useCheckUser.getState().setCheckUser(true)
         }
      },
   })

   // useEffect(() => {
   //    if (!PWAToken || PWAToken === 'null') return
   //    console.log('env', process.env.DINGER_MERCHANT_REDIRECT_URL)
   //    window.open(
   //       `${process.env.DINGER_MERCHANT_REDIRECT_URL}?transactionNo=${
   //          transactionId as string
   //       }&formToken=${PWAToken as string}&merchantOrderId=${
   //          orderId as string
   //       }`,
   //       '_blank'
   //    )
   // }, [PWAToken, orderId, qrCode, transactionId])
   useEffect(() => {
      let getTransaction: NodeJS.Timer
      if (transactionId && orderId) {
         getTransaction = setInterval(() => {
            // eslint-disable-next-line @typescript-eslint/no-extra-semi
            void (async () => {
               const _transaction_status = await getTransactionStatus({
                  variables: {
                     transactionId: transactionId as string,
                     orderId: orderId as string,
                  },
               })
               //should clear interval if transaction is completed to prevent querying again
               if (
                  _transaction_status.data.transaction_status
                     .transactionStatus === 'SUCCESS'
               ) {
                  clearInterval(getTransaction)
               }
            })()
         }, 3000) //run
         return
      }
      return () => {
         if (getTransaction) clearInterval(getTransaction)
      }
   }, [getTransactionStatus, orderId, router, transactionId])

   if (paymentMethod === 'QrCode') {
      return (
         <Box>
            {!data?.transaction_status && (
               <Box
                  height="70vh"
                  my="auto"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
               >
                  <CircularProgress />
               </Box>
            )}
            {data?.transaction_status?.transactionStatus === 'PENDING' && (
               <Stack justifyContent="center" alignItems="center" mt={10}>
                  <QRCodeSVG value={qrCode as string} size={256} />

                  <Box my={6}>
                     <Alert variant="filled" severity="info">
                        Please scan this QR Code with KBZ Pay mobile app.
                        <Box width={1} py={2}>
                           <LinearProgress color="info" />
                        </Box>
                     </Alert>
                  </Box>
               </Stack>
            )}
            {data?.transaction_status?.transactionStatus === 'SUCCESS' && (
               <Stack justifyContent="center" alignItems="center" mt={10}>
                  <Alert variant="filled" severity="success">
                     Transaction succeeded.
                  </Alert>
               </Stack>
            )}
         </Box>
      )
   }

   return (
      <Box
         height="70vh"
         my="auto"
         display="flex"
         justifyContent="center"
         alignItems="center"
      >
         <Stack justifyContent="center" alignItems="center" spacing={5}>
            <CircularProgress />
            {data?.transaction_status?.transactionStatus === 'PENDING' && (
               <Typography variant="h6">Redirecting</Typography>
            )}
         </Stack>
      </Box>
   )
}
export const getStaticProps: GetStaticProps = () => {
   return {
      props: {
         title: `Checkout`,
      },
   }
}
