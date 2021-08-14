import { makeStyles } from '@material-ui/core/styles';

import MainNavigation from './MainNavigation';

const useStyles = makeStyles(theme => ({
   offset: theme.mixins.toolbar,
}));

const Layout = ({ children }) => {
   const classes = useStyles();

   return (
      <div>
         <MainNavigation />

         <div className={classes.offset}></div>
         {/* offset will delete later */}
         {children}
      </div>
   );
};

export default Layout;