import { Theme, createStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
   createStyles({
      root: {
         backgroundColor: theme.palette.background.paper,
      },
      card: {
         width: '100%',
         cursor: 'pointer',
         position: 'relative',
      },
      skeletonImage: {
         paddingBottom: '150%',
      },
      media: {
         opacity: '1',
         transition: '0.3s',
         '&:hover': {
            opacity: '0.5',
         },
      },
      quality: {
         position: 'absolute',
         top: '4%',
         left: '5%',
         fontStyle: 'normal',
         fontWeight: theme.typography.fontWeightBold,
         padding: theme.spacing(0.6, 0.8),
         backgroundColor: theme.palette.secondary.main,
         borderRadius: theme.shape.borderRadius,
         boxShadow: '0px 0px 20px 4px #000000cc',
      },
      title: {
         padding: theme.spacing(1, 0, 1, 0),
      },
      content: {
         color: theme.palette.text.disabled,
      },
      type: {
         display: 'inline-block',
         color: theme.palette.secondary.main,
         fontStyle: 'normal',
         fontSize: '0.65rem',
         fontWeight: theme.typography.fontWeightBold,
         padding: theme.spacing(0.4),
         border: `1px solid ${theme.palette.secondary.main}`,
         borderRadius: theme.shape.borderRadius,
      },
   });
