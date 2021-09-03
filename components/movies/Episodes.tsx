import { useState } from 'react';
import { Typography, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '@styles/EpisodesStyles';

const useStyles = makeStyles(styles);

const Episodes: React.FC = () => {
   const classes = useStyles();
   const [season, setSeason] = useState<number>(1);

   const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setSeason(event.target.value as number);
   };

   return (
      <FormControl className={classes.formControl}>
         <InputLabel id="select-season">Season</InputLabel>
         <Select
            labelId="select-season"
            id="select-season"
            value={season}
            onChange={handleChange}
            label="Age"
         >
            <MenuItem value={1}>Season 1</MenuItem>
            <MenuItem value={2}>Season 2</MenuItem>
            <MenuItem value={3}>Season 3</MenuItem>
         </Select>
      </FormControl>
   );
};

export default Episodes;
