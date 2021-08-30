import { connectMenu } from 'react-instantsearch-dom';
import { MenuProvided } from 'react-instantsearch-core';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '@styles/RefinementListStyles';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(styles);

const RefinementList = ({ items, refine }: MenuProvided) => {
   const classes = useStyles();

   return (
      <Grid container spacing={1} className={classes.grid}>
         {items.map(item => (
            <Grid item key={item.label}>
               <Chip
                  color={`${item.isRefined ? 'secondary' : 'default'}`}
                  label={`${item.label}`}
                  onClick={() => refine(item.value)}
               />
            </Grid>
         ))}
      </Grid>
   );
};

const CustomRefinementList = connectMenu(RefinementList);

export default CustomRefinementList;
