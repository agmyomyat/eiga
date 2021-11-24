import { Box, Button, Typography, Stack } from '@mui/material'
import { steps } from '@helpers/subscriptionSteps'
interface IhowToSub {
   handleNext: () => void
   handleBack: () => void
}

const HowToSubscribe: React.FC<IhowToSub> = ({ handleNext, handleBack }) => {
   return (
      <Box width={1} py={5}>
         <Box maxWidth="600px" mx="auto" pt={2}>
            <Box>
               <Typography variant="h5" component="h2" align="center">
                  Subscription Guide
               </Typography>
            </Box>
            <Box mt={5}>
               <Typography variant="h6">
                  Please follow the instructions:
               </Typography>
               <Stack py={3} spacing={2}>
                  {steps.map((step) => (
                     <Box display="flex" key={step.id}>
                        <Typography
                           variant="body2"
                           color="textSecondary"
                           sx={{ mr: 2, flexShrink: 0 }}
                        >
                           Step {step.id} -
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                           {step.instruction}
                        </Typography>
                     </Box>
                  ))}
               </Stack>
               <Box
                  sx={{
                     pt: 2,
                     width: 1,
                     display: 'flex',
                     justifyContent: 'flex-end',
                  }}
               >
                  <Button
                     variant="outlined"
                     size="small"
                     sx={{ mr: 2 }}
                     onClick={handleBack}
                  >
                     Cancel
                  </Button>
                  <Button variant="contained" size="small" onClick={handleNext}>
                     Confirm
                  </Button>
               </Box>
            </Box>
         </Box>
      </Box>
   )
}

export default HowToSubscribe
