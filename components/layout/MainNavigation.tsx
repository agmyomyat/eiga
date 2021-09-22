import React, { useState } from 'react';
import { useAuth } from '@contexts/AuthContext';
import { useRouter, NextRouter } from 'next/router';

import {
   AppBar,
   Toolbar,
   IconButton,
   Typography,
   Box,
   Menu,
   MenuItem,
   Divider,
   useScrollTrigger,
   Slide,
   Stack,
} from '@mui/material';

import AccountCircle from '@mui/icons-material/AccountCircle';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from '../ui/Link';
import { styled } from '@mui/material/styles';
import { navLinks } from '@helpers/navLinks';

interface IhideOnScroll {
   children: React.ReactElement;
}

function HideOnScroll({ children }: IhideOnScroll) {
   const trigger = useScrollTrigger();

   return (
      <Slide appear={false} direction="down" in={!trigger}>
         {children}
      </Slide>
   );
}

const PREFIX = 'MainNavigation';

const classes = {
   root: `${PREFIX}-root`,
   active: `${PREFIX}-active`,
};

const StyledBox = styled(Box)(({ theme }) => ({
   [`&.${classes.root}`]: {
      flexGrow: 1,
      marginBottom: theme.spacing(3),
   },
   [`& .${classes.active}`]: {
      opacity: 1,
      color: theme.palette.primary.main,
   },
}));

const MainNavigation: React.FC = () => {
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
      <StyledBox className={classes.root}>
         <HideOnScroll>
            <AppBar
               sx={{
                  color: 'text.primary',
                  bgcolor: 'secondary.main',
                  pt: '10px',
               }}
               elevation={0}
            >
               <Toolbar component="nav" sx={{ alignItems: 'center' }}>
                  {/* Title */}
                  <Typography
                     variant="h5"
                     component="h2"
                     noWrap
                     sx={{
                        flexGrow: 1,
                        flexShrink: 0,
                        mr: 2,
                     }}
                  >
                     EIGA
                  </Typography>
                  <Stack
                     direction="row"
                     spacing={4}
                     sx={{
                        display: {
                           xs: 'none',
                           sm: 'flex',
                        },
                        mx: 2,
                     }}
                  >
                     {navLinks.map(({ title, path }, i) => (
                        <Link
                           key={`${title}${i}`}
                           href={path}
                           variant="button"
                           sx={{ color: `white`, opacity: 0.7 }}
                           underline="none"
                           activeClassName={classes.active}
                        >
                           {title}
                        </Link>
                     ))}
                  </Stack>
                  {/* Profile avatar */}
                  <Box>
                     <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                        size="large"
                     >
                        <AccountCircle fontSize="large" />
                     </IconButton>

                     {/* profile menu */}
                     <Menu
                        sx={{
                           '& .MuiPaper-root': {
                              backgroundImage: 'none',
                           },
                        }}
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
                        <Box display="flex" flexDirection="column" component="li" py={1.5} px={2}>
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
                              <MenuItem
                                 sx={{
                                    color: 'text.secondary',
                                    py: 0.5,
                                    px: 3,
                                    my: 0.5,
                                    fontSize: 'body2.fontSize',
                                 }}
                                 onClick={handleViewProfile}
                              >
                                 <PersonOutlineIcon fontSize="small" /> View Profile
                              </MenuItem>
                              <MenuItem
                                 sx={{
                                    color: 'text.secondary',
                                    py: 0.5,
                                    px: 3,
                                    my: 0.5,
                                    fontSize: 'body2.fontSize',
                                 }}
                              >
                                 <FavoriteBorderIcon fontSize="small" /> Favourites
                              </MenuItem>
                              <MenuItem
                                 sx={{
                                    color: 'text.secondary',
                                    py: 0.5,
                                    px: 3,
                                    my: 0.5,
                                    fontSize: 'body2.fontSize',
                                 }}
                                 onClick={handleSignOut}
                              >
                                 <ExitToAppIcon fontSize="small" /> Logout
                              </MenuItem>
                           </Box>
                        ) : (
                           <MenuItem
                              sx={{
                                 color: 'text.secondary',
                                 py: 0.5,
                                 px: 3,
                                 my: 0.5,
                                 fontSize: 'body2.fontSize',
                              }}
                              onClick={handleViewProfile}
                           >
                              <ArrowRightAltIcon /> Log In
                           </MenuItem>
                        )}
                     </Menu>
                  </Box>
               </Toolbar>
            </AppBar>
         </HideOnScroll>
      </StyledBox>
   );
};

export default MainNavigation;
