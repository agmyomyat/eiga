import { useState } from 'react';
import { useRouter, NextRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '@styles/MobileNavigationStyles';
import { BottomNavigation, BottomNavigationAction, Hidden } from '@material-ui/core';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

const useStyles = makeStyles(styles);

interface Route {
   path: string;
   val: number;
}

const MobileNavigation: React.FC = () => {
   const classes = useStyles();
   const { push, pathname }: NextRouter = useRouter();
   const [value, setValue] = useState(pathname === '/movies/[id]' ? '/' : pathname);

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
