import { Box } from '@mui/material'
import Hit, { THitProps } from './Hit'

interface IHits {
   hits: THitProps[]
}

const Hits: React.FC<IHits> = ({ hits }) => {
   console.log('hits', hits)

   return (
      <Box
         display="grid"
         rowGap={3}
         columnGap={2}
         py={2}
         sx={{
            gridTemplateColumns: {
               xs: 'repeat(auto-fill, minmax(120px,1fr))',
               md: 'repeat(auto-fill, minmax(170px,1fr))',
               sm: 'repeat(auto-fill, minmax(150px,1fr))',
               lg: 'repeat(auto-fill, minmax(200px,1fr))',
            },
         }}
      >
         {hits?.map((hit) => (
            <Hit key={hit.id} {...hit} />
         ))}
      </Box>
   )
}

export default Hits
