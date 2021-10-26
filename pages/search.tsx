import { Search } from '@components/meiliSearch'
import React from 'react'
import { Container } from '@mui/material'

export default function search() {
   return (
      <Container
         sx={{
            mb: '100px',
         }}
      >
         <Search />
      </Container>
   )
}
