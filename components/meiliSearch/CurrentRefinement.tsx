import { connectCurrentRefinements } from 'react-instantsearch-dom'
import { CurrentRefinementsProvided } from 'react-instantsearch-core'
import { Chip, Box } from '@mui/material'

const CurrentRefinements = ({ items, refine }) => {
   // console.log('items', items)

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
         {Object.entries(items).map(
            ([key, value]) =>
               value && (
                  <Chip
                     key={key}
                     variant="outlined"
                     color="primary"
                     label={`${value}`}
                     onDelete={() => refine(key)}
                  />
               )
         )}
      </Box>
   )
}

const CustomCurrentRefinements = CurrentRefinements

export default CustomCurrentRefinements
