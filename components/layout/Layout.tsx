import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import MainNavigation from './MainNavigation';

interface PropsChildren {
   children: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      offset: theme.mixins.toolbar,
   })
);

const Layout: React.FC<PropsChildren> = ({ children }) => {
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
