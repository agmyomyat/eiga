import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import SearchBoxComponent from '@components/movies/SearchBoxComponent'

const SearchBox = ({ refine, searchWords }) => {
   const [keywords, setKeywords] = useState<string>('')

   useEffect(() => {
      if (!keywords && !searchWords) return
      if (keywords === searchWords) return
      const timeout = setTimeout(() => {
         refine(keywords)
      }, 500)
      return () => clearTimeout(timeout)
   }, [keywords, refine, searchWords])

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      // will fix later
      // refine(keywords)
   }

   return (
      <Box maxWidth="400px" my={0} mx="auto" py={1}>
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

const CustomSearchBox = SearchBox

export default CustomSearchBox
