import { useState } from 'react';
import {
   Box,
   Typography,
   Divider,
   FormControl,
   FormLabel,
   RadioGroup,
   FormControlLabel,
   Radio,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BlockIcon from '@mui/icons-material/Block';
import { plans } from '@helpers/plans';
import { StyledContainer, classes } from '@styles/PricingStyles';

export default function Pricing() {
   const [month, setMonth] = useState<number>(1);
   const currentPlan = plans.find(plan => plan.id === month);

   const selectPlans = (
      <Box display="flex" justifyContent="center" className={classes.selectPlanWrapper}>
         {plans.map(plan => (
            <Box
               key={plan.id}
               className={`${classes.selectPlan} ${month === plan.id && classes.activePlan}`}
               onClick={() => setMonth(plan.id)}
            >
               {plan.month}
            </Box>
         ))}
      </Box>
   );

   return (
      <StyledContainer className={classes.root}>
         {/* <Typography variant="h3" component="h1" align="center">
            EIGA Pricing
         </Typography> */}
         {selectPlans}
         <Box className={classes.plans} display="flex" justifyContent="center" flexWrap="wrap">
            <Box className={classes.card}>
               <Box className={classes.cardHeader}>
                  <Typography
                     variant="h6"
                     component="h2"
                     align="center"
                     className={classes.planHeader}
                  >
                     BASIC
                  </Typography>
               </Box>
               <Box className={classes.pricing}>
                  <Typography variant="h5" component="h3" align="center" className={classes.price}>
                     FREE
                  </Typography>
               </Box>
               <Divider variant="middle" />
               <Box className={classes.cardBody}>
                  <Box display="flex" className={classes.cardItem}>
                     <CheckCircleOutlineIcon className={classes.successIcon} />
                     <Typography variant="body1">SD(480p)</Typography>
                  </Box>
                  <Box display="flex" className={classes.cardItem}>
                     <BlockIcon className={classes.blockIcon} />
                     <Typography variant="body1">Ads Free</Typography>
                  </Box>
                  <Box display="flex" className={classes.cardItem}>
                     <BlockIcon className={classes.blockIcon} />
                     <Typography variant="body1">Download Contents</Typography>
                  </Box>
                  <Box display="flex" className={classes.cardItem}>
                     <BlockIcon className={classes.blockIcon} />
                     <Typography variant="body1">Access Premium Contents</Typography>
                  </Box>
                  <Box display="flex" className={classes.cardItem}>
                     <BlockIcon className={classes.blockIcon} />
                     <Typography variant="body1">Watch History Feature</Typography>
                  </Box>
                  <Box display="flex" className={classes.cardItem}>
                     <BlockIcon className={classes.blockIcon} />
                     <Typography variant="body1">Favorites Feature</Typography>
                  </Box>
               </Box>
            </Box>

            {/* Free-Card ends here */}

            <Box className={classes.card}>
               <Box className={classes.cardHeader}>
                  <Typography
                     variant="h6"
                     component="h2"
                     align="center"
                     className={classes.planHeader}
                  >
                     PREMIUM
                  </Typography>
               </Box>
               <Box className={classes.pricing}>
                  <Typography variant="h5" component="h3" align="center" className={classes.price}>
                     {currentPlan.price}MMK
                     <Typography
                        variant="subtitle2"
                        component="span"
                        color="textSecondary"
                        className={classes.perMonth}
                     >
                        /month
                     </Typography>
                  </Typography>
                  {currentPlan.save > 0 && (
                     <Typography variant="subtitle2" component="p" color="primary" align="center">
                        (Save {currentPlan.save} Month)
                     </Typography>
                  )}
               </Box>
               <Divider variant="middle" />
               <Box className={classes.cardBody}>
                  <Box display="flex" className={classes.cardItem}>
                     <CheckCircleOutlineIcon className={classes.successIcon} />
                     <Typography variant="body1" className={classes.premiumItem}>
                        HD
                     </Typography>
                  </Box>
                  <Box display="flex" className={classes.cardItem}>
                     <CheckCircleOutlineIcon className={classes.successIcon} />
                     <Typography variant="body1" className={classes.premiumItem}>
                        Ads Free
                     </Typography>
                  </Box>
                  <Box display="flex" className={classes.cardItem}>
                     <CheckCircleOutlineIcon className={classes.successIcon} />
                     <Typography variant="body1" className={classes.premiumItem}>
                        Download Contents
                     </Typography>
                  </Box>
                  <Box display="flex" className={classes.cardItem}>
                     <CheckCircleOutlineIcon className={classes.successIcon} />
                     <Typography variant="body1">Access Premium Contents</Typography>
                  </Box>
                  <Box display="flex" className={classes.cardItem}>
                     <CheckCircleOutlineIcon className={classes.successIcon} />
                     <Typography variant="body1">Watch History Feature</Typography>
                  </Box>
                  <Box display="flex" className={classes.cardItem}>
                     <CheckCircleOutlineIcon className={classes.successIcon} />
                     <Typography variant="body1">Favorites Feature</Typography>
                  </Box>
               </Box>
            </Box>
         </Box>
      </StyledContainer>
   );
}
