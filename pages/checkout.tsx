import { useEffect } from 'react'
import { useRouter } from 'next/router'
export default function Checkout() {
   const router = useRouter()
   const { transactionId, orderId, PWAToken, qrCode } = router.query
   useEffect(() => {
      console.count('reRender count')
      console.log('trasactionid', transactionId)
      console.log('orderid', orderId)
      console.log('qrcode', qrCode)
      console.log('pwaToken', PWAToken)
   }, [PWAToken, orderId, qrCode, transactionId])
   return <div>Checkout</div>
}
