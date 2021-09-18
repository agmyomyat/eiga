import { useState } from 'react';
import { useRouter, NextRouter } from 'next/router';
import { BottomNavigation, BottomNavigationAction, Hidden } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import { Root, classes } from '@styles/MobileNavigationStyles';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const MobileNavigation: React.FC = () => {
   const { push, pathname }: NextRouter = useRouter();
   const dynamicRoutes = ['/movies/[id]', '/series/[id]'];
   const [value, setValue] = useState(dynamicRoutes.includes(pathname) ? '/' : pathname);

   console.log('route check', dynamicRoutes.includes(pathname));

   return (
      <Root
         sx={{
            display: {
               xs: 'block',
               sm: 'none',
            },
         }}
      >
         <BottomNavigation
            value={value}
            onChange={(_event, newValue) => {
               setValue(newValue);
               push({ pathname: newValue });
            }}
            showLabels
            className={classes.mobileNavigation}
         >
            <BottomNavigationAction label="Home" value="/" icon={<HomeOutlinedIcon />} />
            <BottomNavigationAction label="Browse" value="/browse" icon={<ExploreOutlinedIcon />} />
            <BottomNavigationAction
               label="Favorites"
               value="/pricing"
               icon={<FavoriteBorderOutlinedIcon />}
            />
            <BottomNavigationAction
               label="Profile"
               value="/profile"
               icon={<AccountCircleOutlinedIcon />}
            />
         </BottomNavigation>
      </Root>
   );
};

export default MobileNavigation;


