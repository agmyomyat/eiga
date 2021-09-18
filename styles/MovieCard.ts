import { Box } from '@mui/material'
import { styled } from '@mui/material/styles';

const PREFIX = 'Movie';

export const classes = {
   root: `${PREFIX}-root`,
   card: `${PREFIX}-card`,
   skeletonImage: `${PREFIX}-skeletonImage`,
   media: `${PREFIX}-media`,
   quality: `${PREFIX}-quality`,
   title: `${PREFIX}-title`,
   content: `${PREFIX}-content`,
   type: `${PREFIX}-type`,
};

export const StyledBox = styled(Box)(({ theme }) => ({
   [`& .${classes.root}`]: {
      backgroundColor: theme.palette.background.paper,
   },

   [`& .${classes.card}`]: {
      width: '100%',
      cursor: 'pointer',
      position: 'relative',
   },

   [`& .${classes.skeletonImage}`]: {
      paddingBottom: '150%',
   },

   [`& .${classes.media}`]: {
      position: 'relative',
      opacity: '1',
      transition: '0.3s',
      '&:hover': {
         opacity: '0.5',
      },
   },

   [`& .${classes.quality}`]: {
      position: 'absolute',
      top: '4%',
      left: '5%',
      fontStyle: 'normal',
      fontWeight: theme.typography.fontWeightBold,
      padding: theme.spacing(0.6, 0.8),
      backgroundColor: theme.palette.primary.main,
      borderRadius: theme.shape.borderRadius,
      boxShadow: '0px 0px 20px 4px #000000cc',
   },

   [`& .${classes.title}`]: {
      padding: theme.spacing(1, 0, 1, 0),
   },

   [`& .${classes.content}`]: {
      color: theme.palette.text.disabled,
   },

   [`& .${classes.type}`]: {
      display: 'inline-block',
      color: theme.palette.primary.main,
      fontStyle: 'normal',
      fontSize: '0.65rem',
      fontWeight: theme.typography.fontWeightBold,
      padding: theme.spacing(0.4),
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: theme.shape.borderRadius,
   },
}));
