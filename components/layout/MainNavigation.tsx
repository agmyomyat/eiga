import React, { useState } from 'react';
import { useAuth } from '@contexts/AuthContext';
import { useRouter, NextRouter } from 'next/router';
import SearchBoxComponent from '@components/movies/SearchBoxComponent';
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
import SearchIcon from '@mui/icons-material/Search';

import Link from '../ui/Link';
import { styled } from '@mui/material/styles';
import { navLinks } from '@helpers/navLinks';
import FullScreenSearch from '@components/movies/FullScreenSearch';

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

const SEARCH_ROUTE = '/search';

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
      color: theme.palette.primary.main,
      '&::after': {
         width: '100%',
         transition: theme.transitions.create('width', {
            duration: theme.transitions.duration.shortest,
         }),
      },
   },
}));

const MainNavigation: React.FC = () => {
   const [anchorEl, setAnchorEl] = useState<HTMLElement>(null);
   const openMenu = Boolean(anchorEl);

   const { userData, logOut } = useAuth();
   const { push, pathname }: NextRouter = useRouter();
   const isSearchRoute = pathname === SEARCH_ROUTE;

   const [keywords, setKeywords] = useState<string>('');
   const [openSearch, setOpenSearch] = useState<boolean>(false);

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

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
   };

   const handleSearchOpen = () => {
      setOpenSearch(true);
   };

   const handleSearchClose = () => {
      setOpenSearch(false);
   };

   return (
      <StyledBox className={classes.root}>
         <HideOnScroll>
            <AppBar
               sx={{
                  color: 'text.primary',
                  bgcolor: (theme) => theme.palette.common.black,
               }}
               elevation={3}
            >
               <Toolbar
                  component="nav"
                  sx={{ alignItems: 'center', justifyContent: 'space-between' }}
               >
                  {/* Title */}
                  <Box display="flex" alignItems="center" mr={5}>
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
                        spacing={2}
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
                              variant="h6"
                              sx={{
                                 color: (theme) => theme.palette.text.primary,
                                 px: 1,
                                 py: 2,
                                 fontWeight: 'bold',
                                 position: 'relative',
                                 '&:hover': {
                                    color: (theme) =>
                                       theme.palette.primary.main,
                                 },
                                 '&::after': {
                                    position: 'absolute',
                                    content: '""',
                                    bgcolor: (theme) =>
                                       theme.palette.primary.main,
                                    bottom: 0,
                                    left: 0,
                                    width: 0,
                                    height: 2,
                                 },
                              }}
                              underline="none"
                              activeClassName={classes.active}
                           >
                              {title}
                           </Link>
                        ))}
                     </Stack>
                  </Box>
                  {/* Profile avatar */}
                  <Box
                     display="flex"
                     alignItems="center"
                     justifyContent="flex-end"
                     width={1}
                  >
                     {!isSearchRoute && (
                        <>
                           <Box
                              width="100%"
                              maxWidth="400px"
                              mr={3}
                              sx={{ display: { xs: 'none', md: 'block' } }}
                           >
                              <SearchBoxComponent
                                 value={keywords}
                                 onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                 ) => setKeywords(e.currentTarget.value)}
                                 onSubmit={handleSubmit}
                              />
                           </Box>
                           <Box>
                              <IconButton
                                 aria-label="search box"
                                 aria-controls="searchbox-appbar"
                                 aria-haspopup="true"
                                 color="inherit"
                                 onClick={handleSearchOpen}
                                 sx={{
                                    display: { xs: 'inline-flex', md: 'none' },
                                 }}
                              >
                                 <SearchIcon fontSize="large" />
                              </IconButton>
                              <FullScreenSearch
                                 openSearch={openSearch}
                                 handleSearchClose={handleSearchClose}
                              />
                           </Box>
                        </>
                     )}
                     <Box>
                        <IconButton
                           aria-label="account of current user"
                           aria-controls="menu-appbar"
                           aria-haspopup="true"
                           onClick={handleMenu}
                           color="inherit"
                           // size="large"
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
                           <Box
                              display="flex"
                              flexDirection="column"
                              component="li"
                              py={1.5}
                              px={2}
                           >
                              {userData?.userName ? (
                                 <Box>
                                    <Typography
                                       variant="subtitle2"
                                       component="label"
                                       color="textSecondary"
                                    >
                                       Signed In as
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                       {userData.userName}
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
                           {userData?.userName ? (
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
                                    <PersonOutlineIcon fontSize="small" /> View
                                    Profile
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
                                    <FavoriteBorderIcon fontSize="small" />{' '}
                                    Favourites
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
                  </Box>
               </Toolbar>
            </AppBar>
         </HideOnScroll>
      </StyledBox>
   )
};

export default MainNavigation;
