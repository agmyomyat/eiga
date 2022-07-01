import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTransaction_StatusLazyQuery } from '@graphgen'
export default function Checkout() {
   const router = useRouter()
   const { transactionId, orderId, PWAToken, qrCode } = router.query
   const [getTransactionStatus] = useTransaction_StatusLazyQuery({
      fetchPolicy: 'no-cache',
   })
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
               console.log(
                  'transaction_status',
                  _transaction_status.data.transaction_status.transactionStatus
               )
            })()
         }, 3000) //run
         return
      }
      void router.replace('/404')
      return () => {
         if (getTransaction) clearInterval(getTransaction)
      }
   }, [getTransactionStatus, orderId, router, transactionId])
   return <div>Checkout</div>
}
