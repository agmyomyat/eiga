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
export default function Checkout() {
   const router = useRouter()
   const { transactionId, orderId, PWAToken, qrCode, paymentMethod } =
      router.query
   const [getTransactionStatus, { data }] = useTransaction_StatusLazyQuery({
      fetchPolicy: 'no-cache',
   })

   console.log('query', router.query)
   useEffect(() => {
      console.count('reRender count')
      console.log('trasactionid', transactionId)
      console.log('orderid', orderId)
      console.log('qrcode', qrCode)
      console.log('pwaToken', PWAToken)
   }, [PWAToken, orderId, qrCode, transactionId])
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
               // console.log(
               //    'transaction_status',
               //    _transaction_status.data.transaction_status.transactionStatus
               // )
            })()
         }, 3000) //run
         return
      }
      void router.replace('/404')
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
                     Transaction succeeded. You are now promoted to premium
                     user.
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
