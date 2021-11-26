import { Movies } from '@graphgen'
import { Grid, Box, Typography, Stack, Divider, MenuItem } from '@mui/material'
import Image from 'next/image'
import { useRouter, NextRouter } from 'next/router'

interface IsearchedMovie {
   movie: Partial<Movies>
   handleClose?: () => void
}

const SearchedMovie: React.FC<IsearchedMovie> = ({ movie, handleClose }) => {
   const { push }: NextRouter = useRouter()

   const handleClick = (uuid: string) => {
      handleClose()
      push({
         pathname: `/${movie.isSeries ? 'series' : 'movies'}/[id]`,
         query: { id: uuid },
      })
   }

   return (
      <MenuItem
         sx={{ p: 0 }}
         component="div"
         onClick={() => handleClick(movie.uuid)}
      >
         <Grid
            container
            spacing={2}
            sx={{
               width: 1,
               alignItems: 'center',
               py: 1,
               cursor: 'pointer',
               px: 2,
            }}
         >
            <Grid item xs={2}>
               <Box>
                  <Image
                     src={movie.photo_url}
                     layout="responsive"
                     width={600}
                     height={900}
                     alt={movie.name}
                  />
               </Box>
            </Grid>
            <Grid item xs={10}>
               <Typography variant="subtitle1" component="h4" noWrap>
                  {movie.name}
               </Typography>
               <Stack
                  direction="row"
                  spacing={1}
                  divider={<Divider orientation="vertical" flexItem />}
               >
                  <Typography
                     variant="subtitle2"
                     component="p"
                     color="textSecondary"
                  >
                     {movie.release_date}
                  </Typography>
                  <Typography
                     variant="subtitle2"
                     component="p"
                     color="textSecondary"
                  >
                     {movie.isSeries ? 'Series' : 'Movie'}
                  </Typography>
               </Stack>
            </Grid>
         </Grid>
      </MenuItem>
   )
}

export default SearchedMovie
