import { Box, Typography, Stack, Divider, IconButton } from '@mui/material'
import { Movies, GetFavouriteMoviesQuery } from '@graphgen'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

interface ImovieInfo {
   movie: Partial<Movies>
   favouriteData?: GetFavouriteMoviesQuery
   isDisabled?: boolean
   handleAddFavourite?: () => void
   handleDeleteFavourite?: () => void
   premium?: boolean
}

const MovieInfo: React.FC<ImovieInfo> = ({
   movie,
   favouriteData,
   isDisabled,
   handleAddFavourite,
   handleDeleteFavourite,
   premium,
}) => {
   const newGenres = movie.genres.map(
      (genre) => genre.name[0].toUpperCase() + genre.name.slice(1)
   )
   const movieBody = movie.body.replace(/<\/?[^>]+(>|$)/g, '')

   const isFavourite = !!favouriteData?.favouriteMovies.length
   const durationHour = parseInt(movie.duration.split(':')[0])
   const durationMinute = parseInt(movie.duration.split(':')[1])
   const duration = `${
      durationHour > 0 ? `${durationHour}hr${durationHour > 1 ? 's' : ''}` : ''
   } ${durationMinute > 0 ? `${durationMinute}min` : ''}`

   async function handleClick() {
      isFavourite ? handleDeleteFavourite() : handleAddFavourite()
   }

   return (
      <Box sx={{ my: 2 }}>
         <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
            {movie.name}
         </Typography>
         <Stack
            direction="row"
            alignItems="center"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={1.5}
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
               {duration}
            </Typography>

            <Typography
               variant="subtitle2"
               component="span"
               color="textSecondary"
            >
               {newGenres.join(' • ')}
            </Typography>
         </Stack>
         <Box mt={2}>
            <Typography
               variant="subtitle2"
               component="span"
               color="textSecondary"
               sx={{ mr: 2 }}
            >
               IMDB:
            </Typography>

            <Typography variant="subtitle1" component="span" fontWeight="bold">
               {movie.Imdb}
            </Typography>
         </Box>
         {premium && (
            <Box>
               <Typography
                  variant="subtitle2"
                  component="span"
                  color="textSecondary"
                  sx={{ mr: 2 }}
               >
                  Add To Watch List:
               </Typography>
               <IconButton
                  aria-label="favorite-button"
                  color="primary"
                  disabled={isDisabled}
                  onClick={handleClick}
               >
                  {isFavourite ? (
                     <FavoriteIcon fontSize="large" />
                  ) : (
                     <FavoriteBorderIcon fontSize="large" />
                  )}
               </IconButton>
            </Box>
         )}
         <Box
            mt={2}
            sx={{
               maxWidth: {
                  xs: 1,
                  sm: 0.9,
               },
            }}
         >
            <Typography variant="subtitle2">{movieBody}</Typography>
         </Box>
      </Box>
   )
}

export default MovieInfo
