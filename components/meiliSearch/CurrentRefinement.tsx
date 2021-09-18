import { connectCurrentRefinements } from 'react-instantsearch-dom';
import { CurrentRefinementsProvided } from 'react-instantsearch-core';
import { Chip } from '@mui/material';
import { Root, classes } from '@styles/CurrentRefinementStyles';

const CurrentRefinements = ({ items, refine }: CurrentRefinementsProvided) => {
   console.log('items', items);

   return (
      <Root
         sx={{
            display: {
               xs: 'none',
               sm: 'inline-block',
            },
         }}
      >
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
      </Root>
   );
};

const CustomCurrentRefinements = connectCurrentRefinements(CurrentRefinements);

export default CustomCurrentRefinements;
