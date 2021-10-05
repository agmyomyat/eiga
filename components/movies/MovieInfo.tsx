import { useState } from 'react'
import { Box, Typography, Stack, Divider, IconButton } from '@mui/material'
import { Movies } from '@graphgen'
import { TMovies, TGenres } from './Iframe'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const MovieInfo: React.FC<TMovies<Movies, TGenres>> = ({
   name,
   release_date,
   body,
   genres,
}) => {
   const [isFavorite, setIsFavorite] = useState<boolean>(false)

   const newGenres = genres.map(
      (genre) => genre.name[0].toUpperCase() + genre.name.slice(1)
   )
   const movieBody = body.replace(/<\/?[^>]+(>|$)/g, '')

   const handleAddFavorite = () => {
      setIsFavorite((prevState) => !prevState)
   }

   return (
      <Box sx={{ my: 2 }}>
         <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
            {name}
            <IconButton
               aria-label="favorite-button"
               color="primary"
               sx={{ ml: 2 }}
            >
               {isFavorite ? (
                  <FavoriteIcon fontSize="large" onClick={handleAddFavorite} />
               ) : (
                  <FavoriteBorderIcon
                     fontSize="large"
                     onClick={handleAddFavorite}
                  />
               )}
            </IconButton>
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
         <Box
            sx={{
               maxWidth: {
                  xs: 1,
                  sm: 0.9,
               },
            }}
         >
            <Typography variant="body1">{movieBody}</Typography>
         </Box>
         <Box mt={2}>
            <Typography
               variant="subtitle2"
               component="span"
               color="textSecondary"
               sx={{ mr: 2 }}
            >
               Imdb:
            </Typography>

            <Typography variant="subtitle1" component="span" fontWeight="bold">
               7.1
            </Typography>
         </Box>
      </Box>
   )
}

export default MovieInfo
