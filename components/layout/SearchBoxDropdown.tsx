import { Box, Fade, Typography } from '@mui/material'
import SearchedMovie from './SearchedMovie'
import { OptionalMovies } from '@graphgen'
import SearchedMoviesSkeleton from '@components/skeleton/SearchedMoviesSkeleton'

interface Idropdown {
   movies: OptionalMovies[]
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
               <SearchedMoviesSkeleton items={2} />
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
