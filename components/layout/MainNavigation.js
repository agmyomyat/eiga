import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuIcon from '@material-ui/icons/Menu';
import { styles } from '../../styles/MainNavigationStyles';

const useStyles = makeStyles(styles);

const MainNavigation = () => {
   const classes = useStyles();
   const [open, setOpen] = useState(false);

   const list = (
      <ClickAwayListener onClickAway={() => setOpen(false)}>
         <List className={classes.listItems}>
            <ListItem button>
               <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
               <ListItemText primary="Genere" />
            </ListItem>
         </List>
      </ClickAwayListener>
   );

   return (
      <div className={classes.root}>
         <AppBar className={classes.appbar} elevation={0} position="absolute">
            <Toolbar component="nav">
               {/* Menu Icon */}
               <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="secondary"
                  aria-label="open drawer"
                  onClick={() => setOpen(prev => !prev)}
               >
                  <MenuIcon />
               </IconButton>

               {/* Title */}
               <Typography className={classes.title} variant="h5" component="h2" noWrap>
                  NETFLIX
               </Typography>

               {/* Search Bar */}
            </Toolbar>
         </AppBar>

         <Drawer
            anchor="left"
            open={open}
            className={classes.drawer}
            classes={{
               paper: classes.drawerPaper,
            }}
         >
            {list}
         </Drawer>
      </div>
   );
};

export default MainNavigation;
