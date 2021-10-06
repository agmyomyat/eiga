import { useState } from 'react'
import { Box, Typography, Stack, Divider, IconButton } from '@mui/material'
import { Movies, GetFavouriteMoviesQuery } from '@graphgen'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

interface ImovieInfo {
   movie: Partial<Movies>
   favouriteData: GetFavouriteMoviesQuery
   isDisabled: boolean
   handleAddFavourite: () => void
   handleDeleteFavourite: () => void
}

const MovieInfo: React.FC<ImovieInfo> = ({
   movie,
   favouriteData,
   isDisabled,
   handleAddFavourite,
   handleDeleteFavourite,
}) => {
   const newGenres = movie.genres.map(
      (genre) => genre.name[0].toUpperCase() + genre.name.slice(1)
   )
   const movieBody = movie.body.replace(/<\/?[^>]+(>|$)/g, '')

   const isFavourite = !!favouriteData?.favouriteMovies.length

   async function handleClick() {
      isFavourite ? handleDeleteFavourite() : handleAddFavourite()
   }

   return (
      <Box sx={{ my: 2 }}>
         <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
            {movie.name}
            <IconButton
               aria-label="favorite-button"
               color="primary"
               sx={{ ml: 2 }}
               disabled={isDisabled}
               onClick={handleClick}
            >
               {isFavourite ? (
                  <FavoriteIcon fontSize="large" />
               ) : (
                  <FavoriteBorderIcon fontSize="large" />
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
               {movie.release_date}
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
               {newGenres.join(' • ')}
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
