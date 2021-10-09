import { Box } from '@mui/material'

interface IContainerProps {
   animationDuration: number
   children: JSX.Element
   isFinished: boolean
}

const Container: React.FC<IContainerProps> = ({
   animationDuration,
   children,
   isFinished,
}) => {
   console.log('isFinished', isFinished)

   return (
      <Box
         sx={{
            pointerEvents: 'none',
            opacity: `${isFinished ? 0 : 1}`,
            transition: `opacity ${animationDuration}ms linear`,
         }}
      >
         {children}
      </Box>
   )
}

export default Container
