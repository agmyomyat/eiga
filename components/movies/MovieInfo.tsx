import { Box, Typography, Stack, Divider } from '@mui/material'
import { Movies } from '@graphgen'
import { TMovies, TGenres } from './Iframe'
import { styled } from '@mui/material/styles'

const MovieInfo: React.FC<TMovies<Movies, TGenres>> = ({
   name,
   release_date,
   body,
   genres,
}) => {
   const newGenres = genres.map(
      (genre) => genre.name[0].toUpperCase() + genre.name.slice(1)
   )
   const movieBody = body.replace(/<\/?[^>]+(>|$)/g, '')

   const StyledBody = styled(Box)(({ theme }) => ({
      [theme.breakpoints.up('sm')]: {
         maxWidth: '90%',
      },
   }))

   return (
      <Box sx={{ my: 2 }}>
         <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
            {name}
         </Typography>
         <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
            sx={{ my: 2 }}
         >
            <Typography
               variant="subtitle2"
               component="span"
               color="textSecondary"
            >
               {release_date}
            </Typography>

            <Typography
               variant="subtitle2"
               component="span"
               color="textSecondary"
            >
               1hr 30min
            </Typography>

            <Typography
               variant="subtitle2"
               component="span"
               color="textSecondary"
            >
               {newGenres.join(' ')}
            </Typography>
         </Stack>
         <StyledBody>
            <Typography variant="body1">{movieBody}</Typography>
         </StyledBody>
         <Box mt={2} maxWidth={1 / 2}>
            <Typography
               variant="subtitle2"
               component="span"
               color="textSecondary"
               sx={{ mr: 1 }}
            >
               Imdb:
            </Typography>
            <Typography variant="subtitle2" component="span">
               7.1
            </Typography>
         </Box>
      </Box>
   )
}

export default MovieInfo
