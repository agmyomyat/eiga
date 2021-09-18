import { styled } from '@mui/material/styles';

const PREFIX = 'MainNavigation';

export const classes = {
   root: `${PREFIX}-root`,
   appbar: `${PREFIX}-appbar`,
   title: `${PREFIX}-title`,
   profileWrapper: `${PREFIX}-profileWrapper`,
   menuItem: `${PREFIX}-menuItem`,
   drawer: `${PREFIX}-drawer`,
   drawerPaper: `${PREFIX}-drawerPaper`,
   listItems: `${PREFIX}-listItems`,
};

export const Root = styled('div')(({ theme }) => ({
   [`&.${classes.root}`]: {
      flexGrow: 1,
      marginBottom: theme.spacing(3),
   },
   [`& .${classes.appbar}`]: {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.secondary.main,
      paddingTop: 10,
   },
   [`& .${classes.title}`]: {
      flexGrow: 1,
      flexShrink: 0,
      marginRight: theme.spacing(2),
   },
   [`& .${classes.profileWrapper}`]: {
      padding: theme.spacing(1.5, 2),
   },
   [`& .${classes.menuItem}`]: {
      color: theme.palette.text.secondary,
      padding: theme.spacing(0.5, 3),
      margin: theme.spacing(0.5, 0),
      fontSize: theme.typography.body2.fontSize,
   },

   [`& .${classes.drawer}`]: {
      width: 300,
      maxWidth: '40%',
   },
   [`& .${classes.drawerPaper}`]: {
      width: 300,
      maxWidth: '40%',
   },
   [`& .${classes.listItems}`]: {
      alignItems: 'center',
      justifyContent: 'center',
   },
}));
