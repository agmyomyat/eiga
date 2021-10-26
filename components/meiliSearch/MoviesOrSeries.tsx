import { Box, FormControl, InputLabel, MenuItem } from '@mui/material'
import Select from '@mui/material/Select'

const MoviesOrSeries = ({ items, type, onChange }) => {
   return (
      <Box
         sx={{
            display: { xs: 'block', sm: 'inline-block' },
            my: { xs: 1.5, sm: 1 },
            mr: { xs: 0, sm: 2 },
         }}
      >
         <FormControl sx={{ minWidth: 120, width: 1 }} size="small">
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={type}
               label="Type"
               onChange={onChange}
            >
               <MenuItem value="">
                  <em>None</em>
               </MenuItem>
               {Object.keys(items).map((item, i) => (
                  <MenuItem key={item + i} value={item}>
                     {item}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
      </Box>
   )
}

export default MoviesOrSeries
