import { useState } from 'react'
import { Box, FormControl, InputLabel, MenuItem } from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const MoviesOrSeries = ({ items, refine }) => {
   const [type, setType] = useState('')

   const handleChange = (event: SelectChangeEvent) => {
      setType(event.target.value as string)
      refine(event.target.value)
   }

   return (
      <Box
         sx={{
            display: { xs: 'block', sm: 'inline-block' },
            my: { xs: 1.5, sm: 1 },
            mr: { xs: 0, sm: 2 },
         }}
      >
         <FormControl
            sx={{ minWidth: 120, width: { xs: 1, sm: 0 } }}
            size="small"
         >
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={type}
               label="Type"
               onChange={handleChange}
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
