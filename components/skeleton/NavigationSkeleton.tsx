import { Skeleton, Box, Avatar } from '@mui/material'

const NavigationSkeleton: React.FC = () => {
   return (
      <>
         <Box display="flex" alignItems="center" mr={5}>
            <Skeleton width={50} height={10} />

            <Box
               sx={{
                  mx: 2,
                  width: 1,
                  display: {
                     xs: 'none',
                     sm: 'block',
                  },
               }}
            >
               <Box display="flex">
                  {[...Array(4)].map((_arr, i) => (
                     <Skeleton
                        key={i}
                        width={66}
                        height={10}
                        sx={{ mx: 1.5 }}
                     />
                  ))}
               </Box>
            </Box>
         </Box>
         <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width={1}
         >
            <Skeleton
               height={10}
               width="100%"
               sx={{ mr: 3, maxWidth: { xs: '50%', sm: 400 } }}
            />
            <Skeleton variant="circular">
               <Avatar />
            </Skeleton>
         </Box>
      </>
   )
}

export default NavigationSkeleton
