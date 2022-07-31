import Slide from '@components/splide/Slide'
import { Box, Typography, useTheme, CircularProgress } from '@mui/material'
import { Splide } from '@splidejs/react-splide'
import { GetSuggestedMoviesQuery, Movies } from '@graphgen'

interface IHomeSlide {
   suggestedMovies: GetSuggestedMoviesQuery
   loading: boolean
}

const SuggestedMoviesSlides: React.FC<IHomeSlide> = ({
   suggestedMovies,
   loading,
}) => {
   const theme = useTheme()
   console.log('suggestedMoviesaskldf', suggestedMovies)
   return (
      <>
         {loading && (
            <Box
               my={5}
               py={5}
               display="flex"
               justifyContent="center"
               alignItems="center"
            >
               <CircularProgress />
            </Box>
         )}
         {suggestedMovies.getSuggestedMovies.map((genre) => (
            <Box key={genre.genreName}>
               {genre.movies?.length > 0 && (
                  <Box mb={5}>
                     <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{
                           mb: 3,
                        }}
                     >
                        {genre.genreName}
                     </Typography>
                     <Box
                        my={2}
                        sx={{
                           bgcolor: {
                              xs: 'transparent',
                              md: 'secondary.main',
                           },
                           p: {
                              xs: 0,
                              md: 3,
                           },
                        }}
                     >
                        <Box>
                           <Splide
                              options={{
                                 rewind: true,
                                 gap: '1rem',
                                 fixedWidth: theme.spacing(15),
                                 arrows: true,
                                 pagination: false,
                              }}
                           >
                              {genre.movies.map((r) => {
                                 if (!r.published_at) return null
                                 return (
                                    <Slide
                                       key={r.uuid}
                                       movie={r as unknown as Partial<Movies>}
                                    />
                                 )
                              })}
                           </Splide>
                        </Box>
                     </Box>
                  </Box>
               )}
            </Box>
         ))}
      </>
   )
}

export default SuggestedMoviesSlides
