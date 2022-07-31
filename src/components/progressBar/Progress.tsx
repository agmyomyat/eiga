import { useNProgress } from '@tanem/react-nprogress'
import Container from './Container'
import Bar from './Bar'

interface IProgressProps {
   isAnimating: boolean
}

const Progress: React.FC<IProgressProps> = ({ isAnimating }) => {
   const { animationDuration, isFinished, progress } = useNProgress({
      isAnimating,
   })

   return (
      <Container animationDuration={animationDuration} isFinished={isFinished}>
         <Bar animationDuration={animationDuration} progress={progress} />
      </Container>
   )
}

export default Progress
