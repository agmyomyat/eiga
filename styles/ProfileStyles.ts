import { styled } from '@mui/material/styles';

const PREFIX = 'profile';

export const classes = {
   root: `${PREFIX}-root`,
   title: `${PREFIX}-title`,
   card: `${PREFIX}-card`,
   label: `${PREFIX}-label`,
   item: `${PREFIX}-item`,
   buttonGroup: `${PREFIX}-buttonGroup`,
};

export const Root = styled('div')(({ theme }) => ({
   [`& .${classes.root}`]: {
      marginTop: theme.spacing(5),
      marginBottom: 100,
      maxWidth: '700px',
   },

   [`& .${classes.title}`]: {
      textAlign: 'center',
   },

   [`& .${classes.card}`]: {
      marginTop: theme.spacing(5),
   },

   [`& .${classes.label}`]: {
      color: theme.palette.text.secondary,
   },

   [`& .${classes.item}`]: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.shape.borderRadius,
   },

   [`& .${classes.buttonGroup}`]: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: theme.spacing(3),
   },
}));
