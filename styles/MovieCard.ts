import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const PREFIX = 'Movie'

export const classes = {
   root: `${PREFIX}-root`,
   card: `${PREFIX}-card`,
   skeletonImage: `${PREFIX}-skeletonImage`,
   media: `${PREFIX}-media`,
   quality: `${PREFIX}-quality`,
   title: `${PREFIX}-title`,
   content: `${PREFIX}-content`,
   type: `${PREFIX}-type`,
}

export const StyledBox = styled(Box)(() => ({
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
}))
