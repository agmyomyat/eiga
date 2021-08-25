import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import { styles } from '../../styles/MainNavigationStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles(styles);

const MainNavigation = () => {
   const classes = useStyles();
   const [open, setOpen] = useState(false);
   const [anchorEl, setAnchorEl] = React.useState(null);
   const openMenu = Boolean(anchorEl);

   const { currentUser, logout } = useAuth();
   const { push } = useRouter();

   const handleMenu = event => {
      if (currentUser) {
         setAnchorEl(event.currentTarget);
      }
      push('/profile');
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   const handleViewProfile = () => {
      setAnchorEl(null);
      push('/profile');
   };

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
                  EIGA
               </Typography>

               {/* Profile avatar */}
               <Box>
                  <IconButton
                     aria-label="account of current user"
                     aria-controls="menu-appbar"
                     aria-haspopup="true"
                     onClick={handleMenu}
                     color="inherit"
                  >
                     <AccountCircle fontSize="large" />
                  </IconButton>
                  {currentUser && (
                     <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                           vertical: 'top',
                           horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                           vertical: 'top',
                           horizontal: 'right',
                        }}
                        open={openMenu}
                        onClose={handleClose}
                     >
                        <Box className={classes.profileMenu}>
                           <Box
                              display="flex"
                              flexDirection="column"
                              component="li"
                              className={classes.emailWrapper}
                           >
                              <Typography
                                 variant="subtitle2"
                                 component="label"
                                 color="textSecondary"
                              >
                                 Signed in as
                              </Typography>
                              <Typography variant="body2" component="p">
                                 {currentUser.email}
                              </Typography>
                           </Box>
                           <Divider />
                           <MenuItem className={classes.menuItem} onClick={handleViewProfile}>
                              <PersonOutlineIcon fontSize="small" /> View Profile
                           </MenuItem>
                           <MenuItem className={classes.menuItem}>
                              <FavoriteBorderIcon fontSize="small" /> Favourites
                           </MenuItem>
                           <MenuItem className={classes.menuItem} onClick={logout}>
                              <ExitToAppIcon fontSize="small" /> Logout
                           </MenuItem>
                        </Box>
                     </Menu>
                  )}
               </Box>
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
