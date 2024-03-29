import { Movies } from '@graphgen'
import { Box, Card, Typography } from '@mui/material'
import Image from 'next/image'
import Link from '@components/ui/Link'

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
   return (
      <Link
         href={{
            pathname: `/${isSeries[0] === 'series' ? 'series' : 'movies'}/[id]`,
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
               unoptimized
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
      </Link>
   )
}

export default Hit
