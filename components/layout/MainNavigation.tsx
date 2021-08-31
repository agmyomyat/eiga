import React, { useState } from 'react';
import { useAuth } from '@contexts';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter, NextRouter } from 'next/router';
import { styles } from '@styles/MainNavigationStyles';
import {
   AppBar,
   Toolbar,
   IconButton,
   Typography,
   Box,
   Menu,
   MenuItem,
   Divider,
} from '@material-ui/core';

import AccountCircle from '@material-ui/icons/AccountCircle';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles(styles);

const MainNavigation: React.FC = () => {
   const classes = useStyles();

   const [anchorEl, setAnchorEl] = useState<HTMLElement>(null);
   const openMenu = Boolean(anchorEl);

   const { currentUser, logOut } = useAuth();
   const { push }: NextRouter = useRouter();

   const handleMenu = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   const handleViewProfile = () => {
      setAnchorEl(null);
      push('/profile');
   };

   const handleSignOut = async () => {
      await logOut();
   };

   return (
      <>
         <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0} position="absolute">
               <Toolbar component="nav">
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

                     {/* profile menu */}
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
                        <Box
                           display="flex"
                           flexDirection="column"
                           component="li"
                           className={classes.profileWrapper}
                        >
                           {currentUser ? (
                              <Box>
                                 <Typography
                                    variant="subtitle2"
                                    component="label"
                                    color="textSecondary"
                                 >
                                    Signed In as
                                 </Typography>
                                 <Typography variant="body2" component="p">
                                    {currentUser.email}
                                 </Typography>
                              </Box>
                           ) : (
                              <Typography
                                 variant="subtitle2"
                                 component="label"
                                 color="textSecondary"
                              >
                                 You are not Signed In
                              </Typography>
                           )}
                        </Box>
                        <Divider />
                        {currentUser ? (
                           <Box>
                              <MenuItem className={classes.menuItem} onClick={handleViewProfile}>
                                 <PersonOutlineIcon fontSize="small" /> View Profile
                              </MenuItem>
                              <MenuItem className={classes.menuItem}>
                                 <FavoriteBorderIcon fontSize="small" /> Favourites
                              </MenuItem>
                              <MenuItem className={classes.menuItem} onClick={handleSignOut}>
                                 <ExitToAppIcon fontSize="small" /> Logout
                              </MenuItem>
                           </Box>
                        ) : (
                           <MenuItem className={classes.menuItem} onClick={handleViewProfile}>
                              <ArrowRightAltIcon /> Log In
                           </MenuItem>
                        )}
                     </Menu>
                  </Box>
               </Toolbar>
            </AppBar>
         </div>
      </>
   );
};

export default MainNavigation;
