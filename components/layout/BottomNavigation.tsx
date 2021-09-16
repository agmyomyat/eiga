import { useState } from 'react';
import { useRouter, NextRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '@styles/MobileNavigationStyles';
import { BottomNavigation, BottomNavigationAction, Hidden } from '@material-ui/core';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';

const useStyles = makeStyles(styles);

const MobileNavigation: React.FC = () => {
   const classes = useStyles();
   const { push, pathname }: NextRouter = useRouter();
   const dynamicRoutes = ['/movies/[id]', '/series/[id]'];
   const [value, setValue] = useState(dynamicRoutes.includes(pathname) ? '/' : pathname);

   console.log('route check', dynamicRoutes.includes(pathname));

   return (
      <Hidden smUp>
         <BottomNavigation
            value={value}
            onChange={(_event, newValue) => {
               setValue(newValue);
               push({ pathname: newValue });
            }}
            showLabels
            className={classes.root}
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
      </Hidden>
   );
};

export default MobileNavigation;
