import { connectCurrentRefinements } from 'react-instantsearch-dom';
import { CurrentRefinementsProvided } from 'react-instantsearch-core';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '@styles/CurrentRefinementStyles';
import { Chip, Hidden } from '@material-ui/core';

const useStyles = makeStyles(styles);

const CurrentRefinements = ({ items, refine }: CurrentRefinementsProvided) => {
   console.log('items', items);
   const classes = useStyles();

   return (
      <Hidden xsDown>
         {items.map(item => (
            <Chip
               key={item.label}
               variant="outlined"
               color="primary"
               label={`${item.currentRefinement}`}
               onDelete={() => refine(item.value)}
               className={classes.currentRefinement}
            />
         ))}
      </Hidden>
   );
};

const CustomCurrentRefinements = connectCurrentRefinements(CurrentRefinements);

export default CustomCurrentRefinements;
