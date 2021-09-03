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
         position: 'relative',
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
         backgroundColor: theme.palette.primary.main,
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
         color: theme.palette.primary.main,
         fontStyle: 'normal',
         fontSize: '0.65rem',
         fontWeight: theme.typography.fontWeightBold,
         padding: theme.spacing(0.4),
         border: `1px solid ${theme.palette.primary.main}`,
         borderRadius: theme.shape.borderRadius,
      },
   });
