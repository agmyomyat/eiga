import { Movies, WatchHistory } from '@graphgen'
import Slides from '@components/splide/Slides'
import Slide from '@components/splide/Slide'
import { Box, Typography, useTheme, CircularProgress } from '@mui/material'
import { Splide } from '@splidejs/react-splide'

interface IHomeSlide {
   trendingMovies: Partial<Movies[]>
   lastestMovies: Partial<Movies[]>
   historyMovies: Partial<WatchHistory[]>
   loading: boolean
}

const HomeSlides: React.FC<IHomeSlide> = ({
   trendingMovies,
   historyMovies,
   lastestMovies,
   loading,
}) => {
   const theme = useTheme()
   console.log('lastest', lastestMovies)
   console.log('trending', trendingMovies)
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
         {historyMovies?.length > 0 && (
            <Box mb={5}>
               <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                     mb: 3,
                  }}
               >
                  Your Histories
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
                        {historyMovies.map((r) => (
                           <Slide key={r.movie.uuid} movie={r.movie} />
                        ))}
                     </Splide>
                  </Box>
               </Box>
            </Box>
         )}
         <Box>
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
                        arrows: true,
                        pagination: false,
                     }}
                  >
                     <Slides movies={trendingMovies} />
                  </Splide>
               </Box>
            </Box>
         </Box>
         <Box>
            <Typography
               variant="h6"
               fontWeight="bold"
               sx={{
                  mb: 3,
               }}
            >
               Latest
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
                     <Slides movies={lastestMovies} />
                  </Splide>
               </Box>
            </Box>
         </Box>
      </>
   )
}

export default HomeSlides
