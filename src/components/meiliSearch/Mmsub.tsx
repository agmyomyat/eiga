import { Box, FormControl, InputLabel, MenuItem } from '@mui/material'
import Select from '@mui/material/Select'
import { transformLabels } from '@helpers/tranformGenereLabels'
import { PRefinementList } from './interfaces'
const MMsub = ({ items, type, onChange }: PRefinementList) => {
   return (
      <Box
         sx={{
            display: { xs: 'block', sm: 'inline-block' },
            my: { xs: 1.5, sm: 1 },
            mr: { xs: 0, sm: 2 },
         }}
      >
         <FormControl sx={{ minWidth: 120, width: 1 }} size="small">
            <InputLabel id="demo-simple-select-label">Subtitle</InputLabel>
            <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={type}
               label="Type"
               onChange={onChange}
            >
               <MenuItem value="">
                  <em>All</em>
               </MenuItem>
               {Object.keys(items).map((item, i) => (
                  <MenuItem key={item + i.toString()} value={item}>
                     {transformLabels(item)}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
      </Box>
   )
}

export default MMsub
