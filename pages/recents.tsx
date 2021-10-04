import { useAuth } from '@contexts/AuthContext'
import { useWatchHistoriesQuery } from '@graphgen'
import React, { useState } from 'react'
import Movie from '@components/movies/Movie'
import { Button, Box } from '@mui/material'
export default function Recents() {
   const [limit, setLimit] = useState(1)
   const { userData } = useAuth()
   const { data, loading, fetchMore } = useWatchHistoriesQuery({
      variables: {
         limit,
         start: 0,
         user: '31',
      },
   })
   if (loading) return <div>loading..</div>

   console.log('userData', userData)
   return (
      <Box>
         {data?.watchHistories ? (
            <>
               <Box
                  display="grid"
                  rowGap={3}
                  columnGap={2}
                  py={2}
                  sx={{
                     gridTemplateColumns: {
                        xs: 'repeat(auto-fill, minmax(120px,1fr))',
                        sm: 'repeat(auto-fill, minmax(150px,1fr))',
                        md: 'repeat(auto-fill, minmax(170px,1fr))',
                        lg: 'repeat(auto-fill, minmax(200px,1fr))',
                     },
                  }}
               >
                  {data.watchHistories.map((r) => (
                     <Movie key={r.movie.uuid} {...r.movie} />
                  ))}
               </Box>
               <Button
                  onClick={() =>
                     fetchMore({
                        variables: {
                           start: data.watchHistories.length,
                           limit,
                        },
                     }).then((fetchMoreResult) => {
                        // Update variables.limit for the original query to include
                        // the newly added feed items.
                        setLimit(
                           data.watchHistories.length +
                              fetchMoreResult.data.watchHistories.length
                        )
                     })
                  }
                  variant="outlined"
               >
                  Load more
               </Button>
            </>
         ) : (
            <p>not found</p>
         )}
      </Box>
   )
}
