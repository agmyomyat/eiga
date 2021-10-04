import { Movies } from '@graphgen'
import { Grid, Box, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter, NextRouter } from 'next/router'

interface IsearchedMovie {
   movie: Partial<Movies>
   handleClose?: () => void
}

const SearchedMovie: React.FC<IsearchedMovie> = ({ movie, handleClose }) => {
   const { push }: NextRouter = useRouter()

   const handleClick = (uuid: string) => {
      handleClose()
      push({ pathname: '/movies/[id]', query: { id: uuid } })
   }

   return (
      <Grid
         container
         spacing={2}
         sx={{
            width: 1,
            alignItems: 'center',
            py: 1,
            cursor: 'pointer',
         }}
         onClick={() => handleClick(movie.uuid)}
      >
         <Grid item xs={2}>
            <Box>
               <Image
                  src={movie.photo_url}
                  layout="responsive"
                  width={600}
                  height={900}
                  alt={movie.name}
               />
            </Box>
         </Grid>
         <Grid item xs={10}>
            <Typography variant="subtitle1" component="h4" noWrap>
               {movie.name}
            </Typography>
            <Typography variant="subtitle2" component="p" color="textSecondary">
               {movie.release_date}
            </Typography>
         </Grid>
      </Grid>
   )
}

export default SearchedMovie
