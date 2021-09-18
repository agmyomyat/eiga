import { styled } from '@mui/material/styles';

const PREFIX = 'MobileNavigation';

export const classes = {
   mobileNavigation: `${PREFIX}-root`,
};

export const Root = styled('div')(({ theme }) => ({
   [`& .${classes.mobileNavigation}`]: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      backgroundColor: theme.palette.secondary.main,
      width: '100%',
      height: 'auto',
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(3),
   },
}));
