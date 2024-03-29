import { Box, Typography, Stack, Divider, IconButton } from '@mui/material'
import { Movies, GetFavouriteMovieQuery } from '@graphgen'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useRouter } from 'next/router'
type ModifiedDuration = Omit<Movies, 'duration'> & { duration: string }
interface ImovieInfo {
   movie: Partial<ModifiedDuration>
   favouriteData?: GetFavouriteMovieQuery
   isDisabled?: boolean
   handleAddFavourite?: () => void
   handleDeleteFavourite?: () => void
   premium?: boolean
   currentEpisode?: number
   currentSeason?: number
}

const MovieInfo: React.FC<ImovieInfo> = ({
   movie,
   favouriteData,
   isDisabled,
   handleAddFavourite,
   handleDeleteFavourite,
   premium,
   currentEpisode,
   currentSeason,
}) => {
   const router = useRouter()
   const newGenres = movie.genres.map(
      (genre) => genre.name[0].toUpperCase() + genre.name.slice(1)
   )
   const movieBody = movie.body.replace(/<\/?[^>]+(>|$)/g, '')
   const tvSeriesDuration = (
      currentSeason: number,
      currentEpisode: number
   ): string =>
      movie.tv_sery.season[currentSeason - 1].episodes[currentEpisode - 1]
         .duration as string
   const isFavourite = !!favouriteData?.favouriteMovies.length
   const durationHour =
      router.pathname.includes('series') || currentEpisode
         ? parseInt(
              tvSeriesDuration(currentSeason, currentEpisode)?.split(':')[0] ||
                 null
           )
         : parseInt(movie.duration?.split(':')[0] || null)
   const durationMinute =
      router.pathname.includes('series') || currentSeason
         ? parseInt(
              tvSeriesDuration(currentSeason, currentEpisode)?.split(':')[1] ||
                 null
           )
         : parseInt(movie.duration?.split(':')[1] || null)
   const duration = `${
      durationHour > 0 ? `${durationHour}hr${durationHour > 1 ? 's' : ''}` : ''
   } ${durationMinute > 0 ? `${durationMinute}min` : ''}`

   function handleClick() {
      isFavourite ? handleDeleteFavourite() : handleAddFavourite()
   }

   return (
      <Box sx={{ my: 2 }}>
         <Box display="flex" alignItems="center">
            <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
               {movie.name}
            </Typography>
            {movie.mmsub && (
               <Typography
                  variant="caption"
                  component="span"
                  sx={{
                     ml: 2,
                     p: 0.5,
                     borderRadius: 1,
                     bgcolor: 'primary.main',
                     color: (theme) => theme.palette.common.black,
                     fontWeight: 'bold',
                  }}
               >
                  MMSub
               </Typography>
            )}
         </Box>

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
         <Box mt={2}>
            <Typography variant="subtitle2">{movieBody}</Typography>
         </Box>
      </Box>
   )
}

export default MovieInfo
