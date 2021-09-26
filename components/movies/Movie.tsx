
import { useEffect, useState } from 'react'
import { NextRouter, useRouter } from 'next/router'
import { Movies } from '@graphgen'
import { Box, Card, Typography } from '@mui/material'
import Image from 'next/image'
import Skeleton from '@mui/material/Skeleton'


const Movie = ({
   uuid,
   name,
   photo_url,
   release_date,
   quality,
}: Partial<Movies>) => {

   const { push }: NextRouter = useRouter()

   // will delete later
   const [show, setShow] = useState<boolean>(false)
   useEffect(() => {
      const timeout = setTimeout(() => {
         setShow(false)
      }, 3000)
      return () => clearTimeout(timeout)
   })
   //
   return (
      <Box
         onClick={() => push({ pathname: '/movies/[id]', query: { id: uuid } })}
      >
         {show ? (
            <Skeleton
               variant="rectangular"
               sx={{
                  pb: '150%',
               }}
               width="100%"
            ></Skeleton>
         ) : (
            <Card sx={{ width: 1, cursor: 'pointer', position: 'relative' }}>
               <Image
                  src={photo_url}
                  layout="responsive"
                  width={600}
                  height={900}
                  alt={name}
               />
               <Typography
                  component="label"
                  sx={{
                     position: 'absolute',
                     top: '4%',
                     left: '5%',
                     fontWeight: 'bold',
                     py: 0.6,
                     px: 0.8,
                     bgcolor: 'primary.main',
                     borderRadius: 1,
                     boxShadow: 5,
                  }}
               >
                  {quality}
               </Typography>
            </Card>
         )}

         <Typography sx={{ py: 1 }} variant="subtitle2" component="h4" noWrap>
            {show ? <Skeleton /> : name}
         </Typography>

         <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            color="text.disabled"
         >
            {show ? (
               <Skeleton width="50%" />
            ) : (
               <>
                  {release_date}
                  <Typography
                     component="label"
                     sx={{
                        display: 'inline-block',
                        color: 'primary.main',
                        fontStyle: 'normal',
                        fontSize: '0.65rem',
                        fontWeight: 'bold',
                        padding: 0.4,
                        border: 1,
                        borderColor: 'primary.main',
                        borderRadius: 1,
                     }}
                  >
                     Movie
                  </Typography>
               </>
            )}
         </Box>
      </Box>
   )
}

export default Movie
