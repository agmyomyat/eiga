import {
   instantMeiliSearch,
   InstantMeiliSearchInstance,
} from '@meilisearch/instant-meilisearch'
import { InstantSearch, Configure } from 'react-instantsearch-dom'
import CustomHits from './Hits'
import CustomRefinementList from './RefinementList'
import CustomCurrentRefinements from './CurrentRefinement'
import CustomSearchBox from './SearchBox'
import Container from '@mui/material/Container'
import { transformLabels, transformLabel } from '@helpers/tranformGenereLabels'

const searchClient: InstantMeiliSearchInstance = instantMeiliSearch(
   process.env.MEILISEARCH_ENDPOINT,
   '',
   {
      paginationTotalHits: 30, // default: 200.
   }
)
const CustomIsSeries = CustomRefinementList({ name: 'MovieTypes' })
const CustomGenres = CustomRefinementList({ name: 'Genres' })
const CustomRelease_date = CustomRefinementList({ name: 'Release Dates' })

export const Search: React.FC = () => (
   <InstantSearch searchClient={searchClient} indexName="movies">
      <Container>
         <Configure hitsPerPage={1} />
         <CustomSearchBox />
         <CustomIsSeries
            attribute="isSeries"
            transformItems={transformLabels}
         />
         <CustomRelease_date
            attribute="releaseDate"
            transformItems={transformLabels}
         />
         <CustomGenres attribute="genres" transformItems={transformLabels} />
         <CustomCurrentRefinements
            clearsQuery
            transformItems={transformLabel}
         />
         <CustomHits />
      </Container>
   </InstantSearch>
)
