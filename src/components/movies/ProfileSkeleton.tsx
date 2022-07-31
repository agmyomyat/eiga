import { Box, Skeleton, Stack, Typography, Paper } from '@mui/material'

const ProfileSkeleton: React.FC = () => {
   return (
      <Box>
         <Box sx={{ mt: 1 }}>
            <Stack
               spacing={2}
               justifyContent="center"
               alignItems="center"
               mt={3}
               sx={{
                  maxWidth: '600px',
                  mx: 'auto',
               }}
            >
               <Paper
                  sx={{
                     width: 1,
                     bgcolor: 'secondary.main',
                     p: 2,
                     borderRadius: 3,
                  }}
                  elevation={3}
               >
                  <Typography color="textSecondary" sx={{ pb: 2 }}>
                     <Skeleton width="30%" />
                  </Typography>

                  <Typography>
                     <Skeleton width="80%" />
                  </Typography>
               </Paper>

               <Paper
                  sx={{
                     width: 1,
                     bgcolor: 'secondary.main',
                     p: 2,
                     borderRadius: 3,
                  }}
                  elevation={3}
               >
                  <Typography color="textSecondary" sx={{ pb: 2 }}>
                     <Skeleton width="30%" />
                  </Typography>

                  <Typography>
                     <Skeleton width="80%" />
                  </Typography>
               </Paper>

               <Paper
                  sx={{
                     width: 1,
                     bgcolor: 'secondary.main',
                     p: 2,
                     borderRadius: 3,
                  }}
                  elevation={3}
               >
                  <Typography color="textSecondary" sx={{ pb: 2 }}>
                     <Skeleton width="30%" />
                  </Typography>

                  <Typography>
                     <Skeleton width="80%" />
                  </Typography>
               </Paper>

               <Paper
                  sx={{
                     width: 1,
                     bgcolor: 'secondary.main',
                     p: 2,
                     borderRadius: 3,
                  }}
                  elevation={3}
               >
                  <Typography color="textSecondary" sx={{ pb: 2 }}>
                     <Skeleton width="30%" />
                  </Typography>

                  <Typography>
                     <Skeleton width="80%" />
                  </Typography>
               </Paper>

               <Paper
                  sx={{
                     width: 1,
                     bgcolor: 'secondary.main',
                     p: 2,
                     borderRadius: 3,
                  }}
                  elevation={3}
               >
                  <Typography color="textSecondary" sx={{ pb: 2 }}>
                     <Skeleton width="30%" />
                  </Typography>

                  <Typography>
                     <Skeleton width="80%" />
                  </Typography>
               </Paper>
            </Stack>
         </Box>
      </Box>
   )
}

export default ProfileSkeleton
