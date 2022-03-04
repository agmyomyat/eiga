import { NextRouter, useRouter } from 'next/router'
import { Movies } from '@graphgen'
import { Box, Card, Typography } from '@mui/material'
import Image from 'next/image'
import Link from '@components/ui/Link'

type TMovies<P, U> = Partial<Omit<P, 'isSeries' | 'release_date' | 'mmsub'> & U>
type TSeriesNDate = {
   isSeries: string[] | boolean
   release_date: string[] | number
   mmsub: string[] | boolean
}
export type TMovieProps = TMovies<Movies, TSeriesNDate>

const Movie: React.FC<TMovieProps> = ({
   uuid,
   name,
   photo_url,
   release_date,
   isSeries,
   mmsub,
   Imdb,
}) => {
   const { push }: NextRouter = useRouter()

   const newIsSeries =
      typeof isSeries === 'boolean' || isSeries === null
         ? isSeries
         : isSeries[0] === 'series'
   const isMmsub =
      typeof mmsub === 'boolean' || mmsub === null
         ? mmsub
         : mmsub[0] === 'Myanmar'
   const newReleaseDate =
      typeof release_date === 'number'
         ? release_date
         : parseInt(release_date[0])

   return (
      <Link
         href={{
            pathname: `/${newIsSeries ? 'series' : 'movies'}/[id]`,
            query: { id: uuid },
         }}
         underline="none"
         color="inherit"
      >
         <Card sx={{ width: 1, cursor: 'pointer', position: 'relative' }}>
            <Image
               src={photo_url}
               layout="responsive"
               width={600}
               height={900}
               alt={name}
            />
            <Typography
               variant="caption"
               component="label"
               sx={{
                  position: 'absolute',
                  top: '4%',
                  left: '5%',
                  fontWeight: 'bold',
                  py: 0.6,
                  px: 0.6,
                  bgcolor: '#fff',
                  color: 'secondary.main',
                  borderRadius: 1,
                  boxShadow: 5,
               }}
            >
               {Imdb.toFixed(1)}
            </Typography>
         </Card>

         <Typography sx={{ py: 1 }} variant="subtitle2" component="h4" noWrap>
            {name}
         </Typography>

         <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            color="text.disabled"
         >
            {newReleaseDate}
            <Typography
               component="label"
               sx={{
                  display: 'inline-block',
                  color: (theme) => theme.palette.text.secondary,
                  fontStyle: 'normal',
                  fontSize: '0.65rem',
                  padding: 0.5,
                  border: 1,
                  borderColor: (theme) => theme.palette.text.secondary,
                  borderRadius: 1,
               }}
            >
               {isMmsub ? 'MMSub' : 'EngSub'}
            </Typography>
         </Box>
      </Link>
   )
}

export default Movie

// blur base64 encode

// const shimmer = (w, h) => `
// <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//   <defs>
//     <linearGradient id="g">
//       <stop stop-color="#333" offset="20%" />
//       <stop stop-color="#222" offset="50%" />
//       <stop stop-color="#333" offset="70%" />
//     </linearGradient>
//   </defs>
//   <rect width="${w}" height="${h}" fill="#333" />
//   <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
//   <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
// </svg>`

//    const toBase64 = (str) =>
//       typeof window === 'undefined'
//          ? Buffer.from(str).toString('base64')
//          : window.btoa(str)
