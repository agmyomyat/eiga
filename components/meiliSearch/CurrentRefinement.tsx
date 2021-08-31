import { connectCurrentRefinements } from 'react-instantsearch-dom';
import { CurrentRefinementsProvided } from 'react-instantsearch-core';
import { Chip } from '@material-ui/core';

const CurrentRefinements = ({ items, refine }: CurrentRefinementsProvided) => {
   console.log('items', items);

   return (
      <>
         {items.map(item => (
            <Chip
               key={item.label}
               variant="outlined"
               color="secondary"
               label={`${item.currentRefinement}`}
               onDelete={() => refine(item.value)}
            />
         ))}
      </>
   );
};

const CustomCurrentRefinements = connectCurrentRefinements(CurrentRefinements);

export default CustomCurrentRefinements;
