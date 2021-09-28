import { Box, Fade } from '@mui/material'
import SearchedMovie from './SearchedMovie'
import { Movies as typeMovies } from '@graphgen'

interface Idropdown {
   movies: Partial<typeMovies[]>
   show: boolean
   handleBlur: () => void
}

const SearchBoxDropdown: React.FC<Idropdown> = ({
   movies,
   show,
   handleBlur,
}) => {
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
               px: 2,
               py: 1,
            }}
         >
            {movies?.map((movie) => (
               <SearchedMovie
                  key={movie.uuid}
                  movie={movie}
                  handleClose={handleBlur}
               />
            ))}
         </Box>
      </Fade>
   )
}

export default SearchBoxDropdown
