import React, { Dispatch, SetStateAction } from 'react'
import jwt_decode from 'jwt-decode'
import { Genres } from '@graphgen'
import {
   CircularProgress,
   Box,
   Breadcrumbs,
   Typography,
   Button,
} from '@mui/material'
import Link from '../ui/Link'
import { getAccessToken, setAccessToken } from '@helpers/accessToken'
import { handleFetch } from '@apollo/index'
import { useRouter, NextRouter } from 'next/router'
export type TMovies<P, U> = Partial<Omit<P, 'genres'> & U>
export type PartialGenres = { [P in keyof Genres]?: Genres[P] }[]
export type TGenres = { genres: PartialGenres; name: string }

// const config = { attributes: true, childList: true, subtree: true }
// function mutationCallback(currentServer, router: NextRouter): MutationCallback {
//    return function (mutationsList) {
//       // Use traditional 'for loops' for IE 11

//       for (const mutation of mutationsList) {
//          if (
//             (mutation.target as any).attributes?.src?.value &&
//             (mutation.target as any).attributes?.src?.value !== currentServer
//          )
//             router.push('/404')
//          if (mutation.type === 'childList') {
//             console.log('A child node has been added or removed.')
//          } else if (mutation.type === 'attributes') {
//             // router.push('/404')
//             console.log(
//                'The ' + mutation.attributeName + ' attribute was modified.'
//             )
//          }
//       }
//    }
// }
// const observer = (callback: MutationCallback) =>
//    typeof window !== 'undefined' && new MutationObserver(callback)

interface IframeProp {
   currentServer: string
   loading: boolean
   setLoading: Dispatch<SetStateAction<boolean>>
   id: string | string[]
   freeServer1: string
   freeServer2: string
   vipServer1: string
   vipServer2: string
   changeServer: (server: string) => void
   premiumUser: boolean
   isSeries: boolean
   premiumOnly: boolean
   movieName: string
}

const Iframe: React.FC<IframeProp> = ({
   currentServer,
   loading,
   setLoading,
   id,
   freeServer1,
   freeServer2,
   vipServer1,
   vipServer2,
   changeServer,
   premiumUser,
   isSeries,
   premiumOnly,
   movieName,
}) => {
   const refer = React.useRef(null)
   const downloadUrl = React.useRef(null)
   const { push }: NextRouter = useRouter()
   const notAccessPremium = premiumOnly && !premiumUser
   // const _callback = mutationCallback(currentServer, router)
   // const __observer = useMemo(() => observer(_callback), [_callback])
   // // console.log('server1', freeServer1)
   // console.log('server2', freeServer2)
   // console.log('current Server', currentServer)
   /**
    * @description
    * this useEffect checks accessToken to include in vip server1 url query String
    * and fetch if token expire
    */
   React.useEffect(() => {
      const accessToken = getAccessToken()
      if (!currentServer || !refer.current) return
      if (notAccessPremium) return

      async function _setQueryString() {
         console.log('currentServer', currentServer)
         console.log('reference', refer.current)
         if (currentServer === vipServer1 || currentServer === vipServer2) {
            const { exp }: any = accessToken ?? jwt_decode(accessToken)
            let _token: { accessToken: string }
            if (accessToken && Date.now() >= exp * 1000) {
               try {
                  _token = await handleFetch()
                  setAccessToken(_token.accessToken)
               } catch (e) {
                  console.log(e.message)
               }
            }

            const reversedUrl = currentServer.split('').reverse().join('')
            const index = reversedUrl.indexOf('/')
            const uuid = reversedUrl
               .slice(0, index)
               .split('')
               .reverse('')
               .join('')
            downloadUrl.current = `https://embed.eiga.sbs/download/${uuid}?token=${
               _token || accessToken
            }&name=${movieName}`
            refer.current.src = `${
               currentServer === vipServer1 ? vipServer1 : vipServer2
            }?token=${_token || accessToken}` //variable _token could be undefined if accessToken is not expire
            return
         }
         refer.current.src = currentServer
      }
      _setQueryString()
   }, [currentServer, vipServer1, vipServer2, notAccessPremium, movieName])

   console.log('iframe src', refer.current?.src)
   // console.log('copy server', copy?.current)

   return (
      <>
         <Breadcrumbs
            sx={{
               my: 1,
               py: {
                  xs: 0.5,
                  sm: 2,
               },
            }}
         >
            <Typography
               color="textSecondary"
               sx={{
                  fontSize: { xs: 'caption.fontSize', sm: 'body1.fontSize' },
               }}
            >
               <Link href="/" color="inherit">
                  Home
               </Link>
            </Typography>
            <Typography
               color="textSecondary"
               sx={{
                  fontSize: { xs: 'caption.fontSize', sm: 'body1.fontSize' },
               }}
            >
               {isSeries ? 'series' : 'movies'}
            </Typography>
            <Typography
               color="textPrimary"
               sx={{
                  fontSize: { xs: 'caption.fontSize', sm: 'body1.fontSize' },
               }}
            >
               {id}
            </Typography>
         </Breadcrumbs>
         <Box
            sx={{
               position: 'relative',
               width: 1,
               paddingBottom: '56.25%',
            }}
         >
            <Box
               sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 1000,
               }}
            >
               {notAccessPremium ? (
                  <Typography variant="body2" sx={{ textAlign: 'center' }}>
                     This movie is only available for premium users
                  </Typography>
               ) : (
                  <>
                     {!currentServer ? (
                        <Typography variant="h5" sx={{ textAlign: 'center' }}>
                           Not Available
                        </Typography>
                     ) : (
                        loading && <CircularProgress color="inherit" />
                     )}
                  </>
               )}
            </Box>
            <Box
               component="iframe"
               id="ammm"
               ref={refer}
               sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  border: 0,
                  width: 1,
                  height: 1,
                  zIndex: 99,
               }}
               onLoad={() => {
                  setLoading(false)
               }}
               scrolling="no"
               allowFullScreen
               key={currentServer}
            ></Box>
         </Box>
         <Box py={1}>
            <Button
               variant={`${
                  currentServer === freeServer1 || currentServer === vipServer1
                     ? 'contained'
                     : 'outlined'
               }`}
               size="small"
               color="primary"
               onClick={() =>
                  changeServer(premiumUser ? vipServer1 : freeServer1)
               }
               sx={{
                  my: 2,
               }}
            >
               MMSub
            </Button>
            <Button
               variant={`${
                  currentServer === freeServer2 || currentServer === vipServer2
                     ? 'contained'
                     : 'outlined'
               }`}
               size="small"
               color="primary"
               onClick={() =>
                  changeServer(premiumUser ? vipServer2 : freeServer2)
               }
               sx={{
                  my: 2,
                  ml: 2,
               }}
            >
               EngSub
            </Button>
            <Button
               variant="contained"
               size="small"
               color="success"
               onClick={() => push(downloadUrl.current)}
               sx={{
                  my: 2,
                  ml: 2,
               }}
            >
               Download
            </Button>
         </Box>
      </>
   )
}

export default Iframe
