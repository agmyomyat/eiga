import { Box } from '@mui/material'

interface IDynamicSkeletonProps {
   children: JSX.Element | JSX.Element[]
}

const DynamicSkeleton: React.FC<IDynamicSkeletonProps> = ({ children }) => {
   return <Box>{children}</Box>
}

export default DynamicSkeleton
