import { connectMenu } from 'react-instantsearch-dom';
import { MenuProvided } from 'react-instantsearch-core';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { styles } from '../../styles/RefinementListStyles';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(styles as any);

const RefinementList = ({ items, refine }: MenuProvided) => {
   const theme = useTheme();
   const classes = useStyles();

   return (
      <Grid container spacing={1} className={classes.grid}>
         {items.map(item => (
            <Grid item key={item.label}>
               <Chip
                  label={`${item.label}`}
                  style={{
                     backgroundColor: item.isRefined
                        ? theme.palette.secondary.main
                        : theme.palette.background.paper,
                  }}
                  onClick={() => refine(item.value)}
               />
            </Grid>
         ))}
      </Grid>
   );
};

const CustomRefinementList = connectMenu(RefinementList);

export default CustomRefinementList;
