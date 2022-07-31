export function getAccessToken() {
   if (typeof window !== 'undefined') {
      return localStorage.getItem('eg0192')
   } else {
      return ''
   }
}
export function setAccessToken(value: string) {
   if (typeof window !== 'undefined') {
      return localStorage.setItem('eg0192', value)
   } else {
      return ''
   }
}
export function getRefreshToken() {
   if (typeof window !== 'undefined') {
      return localStorage.getItem('egrt')
   } else {
      return ''
   }
}
export function setRefreshToken(value: string) {
   if (typeof window !== 'undefined') {
      return localStorage.setItem('egrt', value)
   } else {
      return ''
   }
}
