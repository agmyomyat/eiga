import { useEffect, useState } from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'
import { SearchBoxProvided } from 'react-instantsearch-core'
import { Box } from '@mui/material'
import SearchBoxComponent from '@components/movies/SearchBoxComponent'

const SearchBox = ({ refine }: SearchBoxProvided) => {
   const [keywords, setKeywords] = useState<string>('')

   useEffect(() => {
      const timeout = setTimeout(() => {
         refine(keywords)
      }, 500)
      return () => clearTimeout(timeout)
   }, [keywords, refine])

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      refine(keywords)
   }

   return (
      <Box maxWidth="400px" my={0} mx="auto" py={2}>
         <SearchBoxComponent
            onSubmit={handleSubmit}
            value={keywords}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
               setKeywords(e.currentTarget.value)
            }
         />
      </Box>
   )
}

const CustomSearchBox = connectSearchBox(SearchBox)

export default CustomSearchBox
