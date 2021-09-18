import { Box } from '@mui/material';
import { Theme, createStyles, styled } from '@mui/material/styles';

const PREFIX = 'MovieInfo';

export const classes = {
   root: `${PREFIX}-root`,
   title: `${PREFIX}-title`,
   infoWrapper: `${PREFIX}-infoWrapper`,
   infoSpacer: `${PREFIX}-infoSpacer`,
   body: `${PREFIX}-body`,
   details: `${PREFIX}-details`,
   detailKey: `${PREFIX}-detailKey`,
};

export const StyledBox = styled(Box)(({ theme }) => ({
   [`&.${classes.root}`]: {
      margin: theme.spacing(2, 0),
   },

   [`& .${classes.title}`]: {
      fontWeight: theme.typography.fontWeightBold,
   },

   [`& .${classes.infoWrapper}`]: {
      margin: theme.spacing(2, 0),
   },

   [`& .${classes.infoSpacer}`]: {
      margin: theme.spacing(0, 1),
   },

   [`& .${classes.body}`]: {
      [theme.breakpoints.up('sm')]: {
         maxWidth: '90%',
      },
   },

   [`& .${classes.details}`]: {
      marginTop: theme.spacing(2),
      maxWidth: '50%',
   },

   [`& .${classes.detailKey}`]: {
      marginRight: theme.spacing(1),
   },
}));
