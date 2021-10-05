import { Box, Fade, Typography, CircularProgress } from '@mui/material'
import SearchedMovie from './SearchedMovie'
import { Movies as typeMovies } from '@graphgen'

interface Idropdown {
   movies: Partial<typeMovies[]>
   show: boolean
   handleBlur: () => void
   loading: boolean
}

const SearchBoxDropdown: React.FC<Idropdown> = ({
   movies,
   show,
   handleBlur,
   loading,
}) => {
   console.log('movies', movies)
   return (
      <Fade in={show}>
         <Box
            sx={{
               position: 'absolute',
               left: 0,
               width: 1,
               bgcolor: (theme) => theme.palette.background.paper,
               borderRadius: 2,
               mt: 1,
               py: 1,
            }}
         >
            {loading ? (
               <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  py={3}
               >
                  <CircularProgress />
               </Box>
            ) : (
               <>
                  {movies?.length === 0 ? (
                     <Typography
                        variant="subtitle1"
                        align="center"
                        sx={{ py: 3 }}
                     >
                        No content To show
                     </Typography>
                  ) : (
                     movies?.length > 0 &&
                     movies?.map((movie) => (
                        <SearchedMovie
                           key={movie.uuid}
                           movie={movie}
                           handleClose={handleBlur}
                        />
                     ))
                  )}
               </>
            )}
         </Box>
      </Fade>
   )
}

export default SearchBoxDropdown
