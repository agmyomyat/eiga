import { Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const PREFIX = 'Episodes';

export const classes = {
   root: `${PREFIX}-root`,
   formControl: `${PREFIX}-formControl`,
   episodesContainer: `${PREFIX}-episodesContainer`,
   episode: `${PREFIX}-episode`,
};

export const StyledButton = styled(Button)(({ theme }) => ({
   [`&.${classes.episode}`]: {
      width: '100%',
      margin: theme.spacing(1, 0),
      [theme.breakpoints.up('sm')]: {
         width: '70%',
         maxWidth: 250,
         marginRight: theme.spacing(2),
      },
   },
}));

export const StyledBox = styled(Box)(({ theme }) => ({
   [`&.${classes.root}`]: {
      margin: theme.spacing(2, 0),
   },

   [`& .${classes.formControl}`]: {
      margin: theme.spacing(2, 0),
      // minWidth: 120,
   },

   [`& .${classes.episodesContainer}`]: {
      maxHeight: 400,
      overflow: 'auto',
      margin: theme.spacing(2, 0),
   },
}));
