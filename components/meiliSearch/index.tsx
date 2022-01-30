import CustomHits from './Hits'
import CustomRefinementList from './RefinementList'
import CustomCurrentRefinements from './CurrentRefinement'
import CustomSearchBox from './SearchBox'
import MMsub from './Mmsub'
import MoviesOrSeries from './MoviesOrSeries'
import { Box, Divider, Button, Typography } from '@mui/material'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import { useCallback, useEffect, useState } from 'react'
import { FacetsDistribution, MeiliSearch } from 'meilisearch'
import { SelectChangeEvent } from '@mui/material/Select'

const meiliClient = new MeiliSearch({
   host: process.env.MEILISEARCH_ENDPOINT,
})
meiliClient
   .index('movies')
   .updateFilterableAttributes(['isSeries', 'genres', 'release_date', 'mmsub'])
// const CustomIsSeries = CustomRefinementList({ name: 'MovieTypes' })
const CustomGenres = CustomRefinementList({ name: 'Genres' })
const CustomReleaseDate = CustomRefinementList({ name: 'Release Dates' })

export const Search: React.FC = () => {
   const [type, setType] = useState('')
   const [subType, setSubType] = useState('')
   const [isGenres, setIsGenres] = useState<boolean>(true)
   const [refinementList, setRefinementList] = useState<FacetsDistribution>()
   const [meiliProp, setMeiliProp] = useState({
      hasmore: true,
      offset: 0,
      filter: {
         genres: '',
         isSeries: '',
         release_date: '',
         mmsub: '',
      },
      searchWords: '',
   })
   const [hits, setHits] = useState<null | Array<any>>([])
   function currentRefinements(value) {
      setHits([])
      setMeiliProp((prev) => ({
         ...prev,
         offset: 0,
         hasmore: true,
         searchWords: '',
         filter: { ...prev.filter, [value]: '' },
      }))
   }
   const refineSearch = useCallback((value: string) => {
      return (
         setHits([]),
         setMeiliProp((prev) => ({
            ...prev,
            hasmore: true,
            offset: 0,
            filter: {
               ...prev.filter,
               genres: '',
               isSeries: '',
               release_date: '',
               mmsub: '',
            },
            searchWords: value,
         }))
      )
   }, [])
   function refineGenres(value: string) {
      return (
         setHits([]),
         setMeiliProp((prev) => ({
            ...prev,
            hasmore: true,
            offset: 0,
            filter: {
               ...prev.filter,
               genres: prev.filter.genres === value ? '' : value,
            },
         }))
      )
   }
   function refineIsSeries(value: string) {
      return (
         setHits([]),
         setMeiliProp((prev) => ({
            ...prev,
            hasmore: true,
            offset: 0,
            filter: {
               ...prev.filter,
               isSeries: prev.filter.isSeries === value ? '' : value,
            },
         }))
      )
   }
   function refineMmsub(value: string) {
      return (
         setHits([]),
         setMeiliProp((prev) => ({
            ...prev,
            hasmore: true,
            offset: 0,
            filter: {
               ...prev.filter,
               mmsub: prev.filter.mmsub === value ? '' : value,
            },
         }))
      )
   }
   function refineReleaseDate(value: string) {
      return (
         setHits([]),
         setMeiliProp((prev) => ({
            ...prev,
            hasmore: true,
            offset: 0,
            filter: {
               ...prev.filter,
               release_date: prev.filter.release_date === value ? '' : value,
            },
         }))
      )
   }

   const refineNext = useCallback(() => {
      setMeiliProp((prev) => ({ ...prev, offset: hits.length }))
   }, [hits.length])

   const handleChange = (event: SelectChangeEvent) => {
      setType(event.target.value as string)
      refineIsSeries(event.target.value)
   }
   const subtitleHandleChange = (event: SelectChangeEvent) => {
      setSubType(event.target.value as string)
      refineMmsub(event.target.value)
   }

   const handleDeleteRefinements = (key: string, value: string) => {
      if (type === value) {
         setType('')
         // delete currentRefinements of isSeries and Type select box change to null.
      }
      currentRefinements(key)
   }

   useEffect(() => {
      meiliClient
         .index('movies')
         .search('', {
            limit: 0,
            facetsDistribution: ['genres', 'isSeries', 'release_date', 'mmsub'],
         })
         .then((res) => setRefinementList(res.facetsDistribution))
   }, [])
   useEffect(() => {
      console.log('hits', hits)
   }, [hits])
   useEffect(() => {
      let _var = []
      if (meiliProp.filter.genres) {
         _var = [..._var, `genres = ${meiliProp.filter.genres}`]
      }
      if (meiliProp.filter.isSeries) {
         _var = [..._var, `isSeries = ${meiliProp.filter.isSeries}`]
      }
      if (meiliProp.filter.release_date) {
         _var = [..._var, `release_date = ${meiliProp.filter.release_date}`]
      }
      if (meiliProp.filter.mmsub) {
         _var = [..._var, `mmsub = ${meiliProp.filter.mmsub}`]
      }
      meiliClient
         .index('movies')
         .search(meiliProp.searchWords, {
            limit: 5,
            offset: meiliProp.offset,
            filter: [..._var],
         })
         .then((res) => {
            console.log('result', res)
            if (!res.hits.length)
               return setMeiliProp((prev) => ({ ...prev, hasmore: false }))
            if (meiliProp.offset)
               return setHits((prev) => [...prev, ...res.hits])
            setHits(res.hits)
         })
   }, [
      meiliProp.filter.genres,
      meiliProp.filter.isSeries,
      meiliProp.filter.mmsub,
      meiliProp.filter.release_date,
      meiliProp.offset,
      meiliProp.searchWords,
   ])

   if (!refinementList) return null
   return (
      <>
         <CustomSearchBox
            searchWords={meiliProp.searchWords}
            refine={refineSearch}
         />

         <Box
            sx={{
               display: { xs: 'block', sm: 'flex' },
               mt: { xs: 1, sm: 2 },
               alignItems: 'center',
            }}
         >
            <MoviesOrSeries
               items={refinementList.isSeries}
               type={type}
               onChange={handleChange}
            />
            <MMsub
               onChange={subtitleHandleChange}
               items={refinementList.mmsub}
               type={subType}
            />
            <Divider sx={{ my: 1, display: { sm: 'none' } }} />
            <Box
               sx={{
                  display: 'flex',
                  flexWrap: 'nowrap',
                  overflowX: 'scroll',
                  msOverflowStyle: 'none',
                  scrollbarWidth: 'none',
                  '&::-webkit-scrollbar': {
                     display: 'none',
                  },
               }}
            >
               <Button
                  id="refinement-toggle-button"
                  aria-controls="refinement-chip-list"
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  variant="outlined"
                  disableElevation
                  size="small"
                  startIcon={<FilterAltIcon />}
                  onClick={() => setIsGenres((prev) => !prev)}
                  sx={{
                     flexShrink: 0,
                     mr: 0.6,
                     display: { sm: 'none' },
                  }}
               >
                  <Typography variant="caption">
                     {isGenres ? 'Genres' : 'Date'}
                  </Typography>
               </Button>
               <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ mx: 1, display: { sm: 'none' } }}
               />
               <CustomGenres
                  items={refinementList.genres}
                  refine={refineGenres}
                  isRefined={meiliProp.filter.genres}
                  show={isGenres}
               />
               <CustomReleaseDate
                  items={refinementList.release_date}
                  refine={refineReleaseDate}
                  isRefined={meiliProp.filter.release_date}
                  show={!isGenres}
               />
            </Box>
            <Divider sx={{ mt: 1, display: { sm: 'none' } }} />
         </Box>
         <CustomCurrentRefinements
            items={meiliProp.filter}
            refine={handleDeleteRefinements}
         />
         {/* <CustomIsSeries
            items={refinementList.isSeries}
            refine={refineIsSeries}
            isRefined={meiliProp.filter.isSeries}
         />*/}
         <Box mt={3}>
            <CustomHits
               hasMore={meiliProp.hasmore}
               refineNext={refineNext}
               hits={hits}
            />
         </Box>
      </>
   )
}
