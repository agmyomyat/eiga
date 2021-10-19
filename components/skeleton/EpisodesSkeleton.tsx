import { Box, Skeleton, Divider } from '@mui/material'

const EpisodesSkeleton: React.FC = () => {
   return (
      <>
         <Box my={2}>
            <Skeleton width="20%" height={30} />
            <Box
               display="flex"
               flexWrap="wrap"
               alignItems="center"
               maxHeight="400px"
               overflow="auto"
               my={2}
            >
               {[...Array(5)].map((_arr, i) => (
                  <Box
                     key={i}
                     width={1}
                     my={1}
                     sx={{
                        maxWidth: { sm: 250 },
                        mr: { sm: 2 },
                     }}
                  >
                     <Skeleton height={36} variant="rectangular" />
                  </Box>
               ))}
            </Box>
         </Box>
         <Divider />
      </>
   )
}

export default EpisodesSkeleton
