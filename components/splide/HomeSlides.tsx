import { Movies, WatchHistory } from '@graphgen'
import Slides from '@components/splide/Slides'
import Slide from '@components/splide/Slide'
import { Box, Typography, useTheme, CircularProgress } from '@mui/material'
import { Splide } from '@splidejs/react-splide'

interface IHomeSlide {
   trendingMovies: Partial<Movies[]>
   historyMovies: Partial<WatchHistory[]>
   loading: boolean
}

const HomeSlides: React.FC<IHomeSlide> = ({
   trendingMovies,
   historyMovies,
   loading,
}) => {
   const theme = useTheme()

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
         {historyMovies?.length && (
            <Box>
               <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                     mb: 3,
                  }}
               >
                  Histories
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
                           arrows: 'slider',
                           pagination: false,
                        }}
                     >
                        {historyMovies.map((r) => (
                           <Slide key={r.movie.uuid} movie={r.movie} />
                        ))}
                     </Splide>
                  </Box>
               </Box>
            </Box>
         )}
         <Box mt={5}>
            <Typography
               variant="h6"
               fontWeight="bold"
               sx={{
                  mb: 3,
               }}
            >
               Trending
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
                        arrows: 'slider',
                        pagination: false,
                     }}
                  >
                     <Slides movies={trendingMovies as Partial<Movies[]>} />
                  </Splide>
               </Box>
            </Box>
         </Box>
      </>
   )
}

export default HomeSlides
