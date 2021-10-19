import CustomHits from './Hits'
import CustomRefinementList from './RefinementList'
import CustomCurrentRefinements from './CurrentRefinement'
import CustomSearchBox from './SearchBox'
import Container from '@mui/material/Container'
import { transformLabels, transformLabel } from '@helpers/tranformGenereLabels'
import { useCallback, useEffect, useState } from 'react'
import { FacetsDistribution, MeiliSearch } from 'meilisearch'
import { Preview } from '@mui/icons-material'
const meiliClient = new MeiliSearch({
   host: 'http://localhost:7700',
})
meiliClient
   .index('movies')
   .updateFilterableAttributes(['isSeries', 'genres', 'releaseDate'])
const CustomIsSeries = CustomRefinementList({ name: 'MovieTypes' })
const CustomGenres = CustomRefinementList({ name: 'Genres' })
const CustomRelease_date = CustomRefinementList({ name: 'Release Dates' })
export const Search: React.FC = () => {
   const [refinementList, setRefinementList] = useState<FacetsDistribution>()
   const [meiliProp, setMeiliProp] = useState({
      hasmore: true,
      offset: 0,
      filter: {
         genres: '',
         isSeries: '',
         releaseDate: '',
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
               releaseDate: '',
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
   function refineReleaseDate(value: string) {
      return (
         setHits([]),
         setMeiliProp((prev) => ({
            ...prev,
            hasmore: true,
            offset: 0,
            filter: {
               ...prev.filter,
               releaseDate: prev.filter.releaseDate === value ? '' : value,
            },
         }))
      )
   }
   useEffect(() => {
      meiliClient
         .index('movies')
         .search('', {
            limit: 0,
            facetsDistribution: ['genres', 'isSeries', 'releaseDate'],
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
      if (meiliProp.filter.releaseDate) {
         _var = [..._var, `releaseDate = ${meiliProp.filter.releaseDate}`]
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
      meiliProp.filter.releaseDate,
      meiliProp.offset,
      meiliProp.searchWords,
   ])
   console.log('looping')

   const refineNext = useCallback(() => {
      setMeiliProp((prev) => ({ ...prev, offset: hits.length }))
   }, [hits.length])
   console.log('refinement', refinementList)
   if (!refinementList) return null
   return (
      <>
         <CustomSearchBox
            searchWords={meiliProp.searchWords}
            refine={refineSearch}
         />
         <CustomGenres
            items={refinementList.genres}
            refine={refineGenres}
            isRefined={meiliProp.filter.genres}
         />
         <CustomIsSeries
            items={refinementList.isSeries}
            refine={refineIsSeries}
            isRefined={meiliProp.filter.isSeries}
         />
         <CustomRelease_date
            items={refinementList.releaseDate}
            refine={refineReleaseDate}
            isRefined={meiliProp.filter.releaseDate}
         />
         <CustomHits
            hasMore={meiliProp.hasmore}
            refineNext={refineNext}
            hits={hits}
         />
         <CustomCurrentRefinements
            items={meiliProp.filter}
            refine={currentRefinements}
         />
      </>
      // <InstantSearch searchClient={searchClient} indexName="movies">
      //    <Container>
      //       <Configure hitsPerPage={3} />
      //       <CustomSearchBox />
      //       <CustomIsSeries
      //          attribute="isSeries"
      //          transformItems={transformLabels}
      //          operator={'or'}
      //       />
      //       <CustomRelease_date
      //          operator={'or'}
      //          attribute="releaseDate"
      //          transformItems={transformLabels}
      //       />
      //       <CustomGenres
      //          operator={'or'}
      //          attribute="genres"
      //          transformItems={transformLabels}
      //       />

      //       <CustomCurrentRefinements
      //          clearsQuery
      //          transformItems={transformLabel}
      //       />
      //    </Container>
      // </InstantSearch>
   )
}
