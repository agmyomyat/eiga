import { Chip, Box } from '@mui/material'

const CurrentRefinements = ({ items, refine }) => {
   // console.log('items', items)

   return (
      <Box
         sx={{
            m: 1.5,
            ml: 0,
         }}
      >
         {Object.entries(items).map(
            ([key, value]) =>
               value && (
                  <Box key={key + value} mr={1} display="inline-block">
                     <Chip
                        variant="outlined"
                        color="primary"
                        label={`${value}`}
                        onDelete={() => refine(key, value)}
                     />
                  </Box>
               )
         )}
      </Box>
   )
}

const CustomCurrentRefinements = CurrentRefinements

export default CustomCurrentRefinements
