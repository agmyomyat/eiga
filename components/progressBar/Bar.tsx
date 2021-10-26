import { Box } from '@mui/material'

interface IBarProps {
   animationDuration: number
   progress: number
}

const Bar: React.FC<IBarProps> = ({ animationDuration, progress }) => {
   return (
      <Box
         bgcolor="primary.main"
         width={1}
         top={0}
         left={0}
         position="fixed"
         zIndex={5000}
         sx={{
            height: {
               xs: '1px',
               md: '2px',
            },
            ml: `${(-1 + progress) * 100}%`,
            transition: `margin-left ${animationDuration}ms linear`,
         }}
      ></Box>
   )
}

export default Bar
