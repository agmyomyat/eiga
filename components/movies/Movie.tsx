import { NextRouter, useRouter } from 'next/router'
import { Movies } from '@graphgen'
import { Box, Card, Typography } from '@mui/material'
import Image from 'next/image'

type TMovies<P, U> = Partial<Omit<P, 'isSeries' | 'release_date'> & U>
type TSeriesNDate = {
   isSeries: string[] | boolean
   release_date: string[] | number
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
      typeof isSeries === 'boolean' ? isSeries : isSeries[0] === 'series'
   const newReleaseDate =
      typeof release_date === 'number'
         ? release_date
         : parseInt(release_date[0])

   return (
      <Box
         onClick={() =>
            push({
               pathname: `/${newIsSeries ? 'series' : 'movies'}/[id]`,
               query: { id: uuid },
            })
         }
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
               {mmsub ? 'MMSub' : 'EngSub'}
            </Typography>
         </Box>
      </Box>
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
