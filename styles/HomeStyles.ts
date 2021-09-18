import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

const PREFIX = 'Home';

export const classes = {
   root: `${PREFIX}-root`,
};

export const StyledContainer = styled(Container)(({ theme }) => ({
   [`&.${classes.root}`]: {
      marginBottom: 100,
   },
}));
