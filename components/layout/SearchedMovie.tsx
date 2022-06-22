import { OptionalMovies } from '@graphgen'
import { Grid, Box, Typography, Stack, Divider } from '@mui/material'
import Image from 'next/image'
import { useRouter, NextRouter } from 'next/router'
import { alpha } from '@mui/material/styles'

interface IsearchedMovie {
   movie: OptionalMovies
   handleClose?: () => void
}

const SearchedMovie: React.FC<IsearchedMovie> = ({ movie, handleClose }) => {
   const { push }: NextRouter = useRouter()

   const handleClick = (uuid: string) => {
      handleClose()
      push({
         pathname: `/${
            movie.isSeries[0] === 'series' ? 'series' : 'movies'
         }/[id]`,
         query: { id: uuid },
      })
   }

   return (
      <Grid
         container
         sx={{
            width: 1,
            alignItems: 'center',
            my: 0.5,
            py: 1.5,
            cursor: 'pointer',
            px: 2,
            '&:hover': {
               backgroundColor: (theme) =>
                  alpha(theme.palette.secondary.main, 0.8),
               color: (theme) => theme.palette.primary.main,
            },
         }}
         onClick={() => handleClick(movie.uuid)}
      >
         <Grid item xs={2} sx={{ pr: 1 }}>
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
         <Grid item xs={10} sx={{ pl: 1 }}>
            <Typography variant="subtitle1" component="h4" noWrap>
               {movie.name}
            </Typography>
            <Stack
               direction="row"
               spacing={1}
               divider={<Divider orientation="vertical" flexItem />}
            >
               <Typography
                  variant="subtitle2"
                  component="p"
                  color="textSecondary"
               >
                  {movie.release_date}
               </Typography>
               <Typography
                  variant="subtitle2"
                  component="p"
                  color="textSecondary"
               >
                  {movie.isSeries ? 'Series' : 'Movie'}
               </Typography>
            </Stack>
         </Grid>
      </Grid>
   )
}

export default SearchedMovie
