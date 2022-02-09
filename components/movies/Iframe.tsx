import React, { useState, Dispatch, SetStateAction } from 'react'
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
export type TMovies<P, U> = Partial<Omit<P, 'genres'> & U>
export type PartialGenres = { [P in keyof Genres]?: Genres[P] }[]
export type TGenres = { genres: PartialGenres; name: string }

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
   current_time: string
   getHistoryLoading: boolean
   isSameHistoryAndCurrent?: boolean
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
   current_time,
   getHistoryLoading,
   isSameHistoryAndCurrent,
}) => {
   const refer = React.useRef(null)
   const notAccessPremium = premiumOnly && !premiumUser
   const [isServer1, setIsServer1] = useState(true)
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
      if (getHistoryLoading) return // currenttime is not available if this loading

      async function _setQueryString() {
         console.log('currentServer', currentServer)
         console.log('reference', refer.current)
         /**
          * @toDo
          * isServer1 not setting true because of empty strings is optional
          */
         if (currentServer === vipServer1 || freeServer1) {
            setIsServer1(true)
         }
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

            refer.current.src = `${
               currentServer === vipServer1 ? vipServer1 : vipServer2
               // check if url has hls query
            }${currentServer.indexOf('?hls') > -1 ? '&' : '?'}token=${
               _token || getAccessToken()
            }&ct=${
               !isSeries || (isSeries && isSameHistoryAndCurrent)
                  ? current_time ?? (current_time || '')
                  : '' || ''
               // if a movie or a series with same S and E with current, the current time is set
            }` //variable _token could be undefined if accessToken is not expire
            return
         }
         refer.current.src = currentServer
      }
      if (!refer.current.src) {
         _setQueryString()
      }
   }, [
      currentServer,
      vipServer1,
      vipServer2,
      notAccessPremium,
      movieName,
      getHistoryLoading,
      current_time,
      isSeries,
      isSameHistoryAndCurrent,
      freeServer1,
      freeServer2,
   ])

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
                        <Typography
                           variant="body2"
                           sx={{ textAlign: 'center' }}
                        >
                           Not available, try another subtitle below
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
                  isServer1 &&
                  (currentServer === freeServer1 ||
                     currentServer === vipServer1)
                     ? 'contained'
                     : 'outlined'
               }`}
               size="small"
               color="primary"
               onClick={() => {
                  setIsServer1(true)
                  changeServer(premiumUser ? vipServer1 : freeServer1)
               }}
               sx={{
                  my: 2,
               }}
            >
               MMSub
            </Button>
            <Button
               variant={`${
                  !isServer1 &&
                  (currentServer === freeServer2 ||
                     currentServer === vipServer2)
                     ? 'contained'
                     : 'outlined'
               }`}
               size="small"
               color="primary"
               onClick={() => {
                  setIsServer1(false)
                  changeServer(premiumUser ? vipServer2 : freeServer2)
               }}
               sx={{
                  my: 2,
                  ml: 2,
               }}
            >
               EngSub
            </Button>
         </Box>
      </>
   )
}

export default Iframe
