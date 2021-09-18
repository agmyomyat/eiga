import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const PREFIX = 'DynamicPage';

export const classes = {
   root: `${PREFIX}-root`,
};

export const StyledContainer = styled(Container)(({ theme }) => ({
   [`&.${classes.root}`]: {
      [theme.breakpoints.only('xs')]: {
         padding: theme.spacing(0, 2),
      },
      marginBottom: 100,
   },
}));
