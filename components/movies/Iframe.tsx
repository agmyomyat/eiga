import React, { Dispatch, SetStateAction } from 'react'
import { Genres } from '@graphgen'
import {
   CircularProgress,
   Box,
   Breadcrumbs,
   Typography,
   Button,
} from '@mui/material'
import Link from '../ui/Link'

export type TMovies<P, U> = Partial<Omit<P, 'genres'> & U>
export type PartialGenres = { [P in keyof Genres]?: Genres[P] }[]
export type TGenres = { genres: PartialGenres }

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
}) => {
   const refer = React.useRef(null)
   const copy = React.useRef(currentServer)

   // console.log('server1', freeServer1)
   // console.log('server2', freeServer2)
   // console.log('current Server', currentServer)

   React.useEffect(() => {
      console.log('current', currentServer)
      copy.current = refer.current.src
   }, [currentServer])

   // console.log('iframe src', refer.current?.src)
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
               Movies
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
               {loading && <CircularProgress color="inherit" />}
            </Box>
            <Box
               component="iframe"
               ref={refer}
               sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  border: 0,
                  width: 1,
                  height: 1,
               }}
               onLoad={() => {
                  refer.current.src !== copy.current
                     ? console.log('gg')
                     : setLoading(false)
               }}
               src={currentServer}
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
               Server1
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
               Server2
            </Button>
         </Box>
      </>
   )
}

export default Iframe
