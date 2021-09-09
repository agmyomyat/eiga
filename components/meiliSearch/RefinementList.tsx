import { useState } from 'react';
import { connectMenu } from 'react-instantsearch-dom';
import { MenuProvided } from 'react-instantsearch-core';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '@styles/RefinementListStyles';
import { Chip, Grid, Hidden, Button, Menu, MenuItem } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles(styles);

const RefinementList = ({ items, refine }: MenuProvided) => {
   const classes = useStyles();

   const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
   const open = Boolean(anchorEl);

   const handleOpen = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   const handleRefine = (value: string) => {
      refine(value);
      setAnchorEl(null);
   };

   const MobileFilter = (
      <Hidden smUp>
         <Grid container spacing={1} className={classes.mobileGrid}>
            {items.map(item => (
               <Grid item key={item.label}>
                  <Chip
                     color={`${item.isRefined ? 'primary' : 'default'}`}
                     label={`${item.label}`}
                     onClick={() => refine(item.value)}
                  />
               </Grid>
            ))}
         </Grid>
      </Hidden>
   );

   const DesktopFilter = (
      <Hidden xsDown>
         <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<FilterListIcon />}
            onClick={handleOpen}
            disableElevation
         >
            Filter
         </Button>
         <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            classes={{
               list: classes.filterMenu,
               paper: classes.paper,
            }}
            anchorOrigin={{
               vertical: 'top',
               horizontal: 'right',
            }}
            transformOrigin={{
               vertical: 'top',
               horizontal: 'left',
            }}
         >
            {items.map(item => (
               <MenuItem
                  key={item.label}
                  onClick={() => handleRefine(item.value)}
                  className={classes.menuItem}
               >
                  {item.label}
               </MenuItem>
            ))}
         </Menu>
      </Hidden>
   );

   return (
      <>
         {MobileFilter}
         {DesktopFilter}
      </>
   );
};

const CustomRefinementList = connectMenu(RefinementList);

export default CustomRefinementList;
