import React, { ChangeEventHandler } from 'react'
import {
   Dialog,
   Box,
   AppBar,
   Toolbar,
   IconButton,
   InputBase,
   Slide,
   Stack,
   Typography,
} from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { TransitionProps } from '@mui/material/transitions'
import SearchIcon from '@mui/icons-material/Search'
import { alpha } from '@mui/material/styles'
import { OptionalMovies } from '@graphgen'
import SearchedMovie from '@components/layout/SearchedMovie'
import SearchedMoviesSkeleton from '@components/skeleton/SearchedMoviesSkeleton'

const Transition = React.forwardRef(function Transition(
   props: TransitionProps & {
      children: React.ReactElement<any, any>
   },
   ref: React.Ref<unknown>
) {
   return <Slide direction="up" ref={ref} {...props} />
})

interface IfullScreen {
   openSearch: boolean
   handleSearchClose: () => void
   movies: OptionalMovies[]
   value: string
   onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
   show: boolean
   loading: boolean
   onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}

const FullScreenSearch: React.FC<IfullScreen> = ({
   openSearch,
   handleSearchClose,
   movies,
   value,
   onChange,
   show,
   loading,
   onSubmit,
}) => {
   return (
      <Dialog
         fullScreen
         open={openSearch}
         onClose={handleSearchClose}
         TransitionComponent={Transition}
         sx={{
            '& .MuiDialog-paper': {
               bgcolor: (theme) => theme.palette.background.default,
               backgroundImage: 'none',
            },
         }}
      >
         <AppBar
            sx={{
               py: 1,
               position: 'relative',
               color: 'text.primary',
               bgcolor: (theme) => theme.palette.common.black,
            }}
            elevation={3}
         >
            <Toolbar>
               <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleSearchClose}
                  aria-label="close"
                  sx={{ mr: 0.5 }}
               >
                  <ChevronLeftIcon fontSize="large" />
               </IconButton>
               <Box
                  component="form"
                  noValidate
                  role="search"
                  onSubmit={onSubmit}
                  sx={{
                     position: 'relative',
                     borderRadius: 2,
                     bgcolor: (theme) =>
                        alpha(theme.palette.common.white, 0.15),
                     '&:hover': {
                        bgcolor: (theme) =>
                           alpha(theme.palette.common.white, 0.25),
                     },
                     width: 1,
                  }}
               >
                  <Box
                     sx={{
                        px: 1,
                        height: 1,
                        position: 'absolute',
                        pointerEvents: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                     }}
                  >
                     <SearchIcon />
                  </Box>
                  <InputBase
                     autoFocus
                     placeholder="Search"
                     inputProps={{ 'aria-label': 'search' }}
                     value={value}
                     onChange={onChange}
                     sx={{
                        color: 'inherit',
                        '& .MuiInputBase-input': {
                           p: 1,
                           // vertical padding + font size from searchIcon
                           pl: (theme) => `calc(1em + ${theme.spacing(4)})`,
                           transition: (theme) =>
                              theme.transitions.create('width'),
                           width: 1,
                        },
                     }}
                  />
               </Box>
            </Toolbar>
         </AppBar>
         {show && (
            <Stack sx={{ mb: 3, pt: 1 }}>
               {loading ? (
                  <SearchedMoviesSkeleton items={2} />
               ) : (
                  <>
                     {movies?.length === 0 ? (
                        <Typography
                           variant="subtitle1"
                           align="center"
                           sx={{ py: 5 }}
                        >
                           No Content To Show.
                        </Typography>
                     ) : (
                        movies?.map((movie) => (
                           <SearchedMovie
                              key={movie.uuid}
                              movie={movie}
                              handleClose={handleSearchClose}
                           />
                        ))
                     )}
                  </>
               )}
            </Stack>
         )}
      </Dialog>
   )
}

export default FullScreenSearch
