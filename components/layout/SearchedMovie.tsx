import { Movies } from '@graphgen'
import { Grid, Box, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter, NextRouter } from 'next/router'

const RelatedMovie: React.FC<Partial<Movies>> = ({
   name,
   date,
   photo_url,
   uuid,
}) => {
   const { push }: NextRouter = useRouter()

   return (
      <Grid
         container
         spacing={2}
         sx={{
            width: 1,
            alignItems: 'center',
            py: 1,
            cursor: 'pointer',
         }}
         onClick={() => push({ pathname: '/movies/[id]', query: { id: uuid } })}
      >
         <Grid item xs={2}>
            <Box>
               <Image
                  src={photo_url}
                  layout="responsive"
                  width={600}
                  height={900}
                  alt={name}
               />
            </Box>
         </Grid>
         <Grid item xs={10}>
            <Typography variant="subtitle1" component="h4" noWrap>
               {name}
            </Typography>
            <Typography variant="subtitle2" component="p" color="textSecondary">
               {new Date(date).getFullYear()}
            </Typography>
         </Grid>
      </Grid>
   )
}

export default RelatedMovie
