import { Search } from '@components/meiliSearch'
import { GetStaticProps } from 'next'
import React from 'react'
import { Container } from '@mui/material'

export default function search() {
   return (
      <Container>
         <Search />
      </Container>
   )
}

export const getStaticProps: GetStaticProps = () => {
   return {
      props: {
         title: `Browse`,
      },
   }
}
