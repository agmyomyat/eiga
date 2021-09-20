import { connectCurrentRefinements } from 'react-instantsearch-dom';
import { CurrentRefinementsProvided } from 'react-instantsearch-core';
import { Chip, Box } from '@mui/material';

const CurrentRefinements = ({ items, refine }: CurrentRefinementsProvided) => {
   console.log('items', items);

   return (
      <Box
         sx={{
            display: {
               xs: 'none',
               sm: 'inline-block',
            },
            mr: 1,
         }}
      >
         {items.map(item => (
            <Chip
               key={item.label}
               variant="outlined"
               color="primary"
               label={`${item.currentRefinement}`}
               onDelete={() => refine(item.value)}
            />
         ))}
      </Box>
   );
};

const CustomCurrentRefinements = connectCurrentRefinements(CurrentRefinements);

export default CustomCurrentRefinements;
