import { Chip, Box, Typography } from '@mui/material'
import { transformLabels } from '@helpers/tranformGenereLabels'
interface RefinementsItems {
   items: Record<string, string>
}
interface TypeCurrentRefinements<T> extends RefinementsItems {
   refine: T
}
const CurrentRefinements = ({
   items,
   refine,
}: TypeCurrentRefinements<(key: string, value: string) => void>) => {
   return (
      <Box display="flex" alignItems="center">
         {Object.keys(items).some((item) => items[item]) && (
            <Typography variant="body2" sx={{ color: 'text.disabled', mr: 1 }}>
               Filters:
            </Typography>
         )}
         <Box
            sx={{
               display: 'flex',
               flexWrap: {
                  xs: 'nowrap',
                  sm: 'wrap',
               },
               overflowX: 'scroll',
               msOverflowStyle: 'none',
               scrollbarWidth: 'none',
               '&::-webkit-scrollbar': {
                  display: 'none',
               },
            }}
         >
            {Object.entries(items).map(
               ([key, value]) =>
                  value && (
                     <Box
                        key={key + value}
                        mr={1}
                        display="inline-block"
                        m={1.5}
                        ml={0}
                     >
                        <Chip
                           variant="filled"
                           // color="primary"
                           label={`${transformLabels(value)}`}
                           onDelete={() => refine(key, value)}
                        />
                     </Box>
                  )
            )}
         </Box>
      </Box>
   )
}

const CustomCurrentRefinements = CurrentRefinements

export default CustomCurrentRefinements
