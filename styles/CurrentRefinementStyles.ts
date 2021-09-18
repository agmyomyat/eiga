import { styled } from '@mui/material/styles';

const PREFIX = 'CustomCurrentRefinements';

export const classes = {
   currentRefinement: `${PREFIX}-currentRefinement`,
};

export const Root = styled('div')(({ theme }) => ({
   [`& .${classes.currentRefinement}`]: {
      marginRight: theme.spacing(1),
   },
}));
