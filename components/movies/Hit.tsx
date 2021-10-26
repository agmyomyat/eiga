import { NextRouter, useRouter } from 'next/router'
import { Movies } from '@graphgen'
import { Box, Card, Typography } from '@mui/material'
import Image from 'next/image'

type TMovies<P, U> = Partial<Omit<P, 'isSeries' | 'releaseDate'> & U>
type TSeriesNDate<T> = { isSeries: T[]; releaseDate: T[] }
export type THitProps = TMovies<Movies, TSeriesNDate<string>>

const Hit: React.FC<THitProps> = ({
   name,
   uuid,
   quality,
   photo_url,
   releaseDate,
   isSeries,
}) => {
   const { push }: NextRouter = useRouter()

   const shimmer = (w: number, h: number): string => `
 <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
   <defs>
     <linearGradient id="g">
       <stop stop-color="#333" offset="20%" />
       <stop stop-color="#222" offset="50%" />
       <stop stop-color="#333" offset="70%" />
     </linearGradient>
   </defs>
   <rect width="${w}" height="${h}" fill="#333" />
   <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
   <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
 </svg>`

   const toBase64 = (str: string) =>
      typeof window === 'undefined'
         ? Buffer.from(str).toString('base64')
         : window.btoa(str)

   return (
      <Box
         onClick={() =>
            push({
               pathname: `/${
                  isSeries[0] === 'series' ? 'series' : 'movies'
               }/[id]`,
               query: { id: uuid },
            })
         }
      >
         <Card sx={{ width: 1, cursor: 'pointer', position: 'relative' }}>
            <Image
               src={photo_url}
               blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(700, 475)
               )}`}
               layout="responsive"
               width={600}
               height={900}
               alt={name}
               placeholder="blur"
            />
            <Typography
               component="label"
               sx={{
                  position: 'absolute',
                  top: '4%',
                  left: '5%',
                  fontWeight: 'bold',
                  py: 0.6,
                  px: 0.8,
                  bgcolor: 'primary.main',
                  borderRadius: 1,
                  boxShadow: 5,
               }}
            >
               {quality}
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
            {releaseDate[0]}
            <Typography
               component="label"
               sx={{
                  display: 'inline-block',
                  color: 'primary.main',
                  fontStyle: 'normal',
                  fontSize: '0.65rem',
                  fontWeight: 'bold',
                  padding: 0.4,
                  border: 1,
                  borderColor: 'primary.main',
                  borderRadius: 1,
               }}
            >
               {isSeries[0] === 'series' ? 'Series' : 'Movie'}
            </Typography>
         </Box>
      </Box>
   )
}

export default Hit
