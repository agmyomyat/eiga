import { connectCurrentRefinements } from 'react-instantsearch-dom';
import { CurrentRefinementsProvided } from 'react-instantsearch-core';
import { Chip, Hidden } from '@material-ui/core';

const CurrentRefinements = ({ items, refine }: CurrentRefinementsProvided) => {
   console.log('items', items);

   return (
      <Hidden xsDown>
         {items.map(item => (
            <Chip
               key={item.label}
               variant="outlined"
               color="primary"
               label={`${item.currentRefinement}`}
               onDelete={() => refine(item.value)}
            />
         ))}
      </Hidden>
   );
};

const CustomCurrentRefinements = connectCurrentRefinements(CurrentRefinements);

export default CustomCurrentRefinements;
