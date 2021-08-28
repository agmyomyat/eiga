import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core';
import { styles } from '../styles/PricingStyles';

const useStyles = makeStyles(styles as any);

export default function Pricing() {
   const classes = useStyles();

   return (
      <Box className={classes.root}>
         <Typography variant="h6" component="h2" align="center" className={classes.title}>
            Premium
         </Typography>
         <Divider variant="middle" />
         <Typography variant="subtitle1" component="h1" align="center" className={classes.pricing}>
            <span className={classes.priceTitle}>3000</span>MMK/Month
         </Typography>
      </Box>
   );
}
