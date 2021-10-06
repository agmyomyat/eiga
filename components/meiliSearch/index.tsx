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
   process.env.MEILI_API_KEY
)

export const Search: React.FC = () => (
   <InstantSearch searchClient={searchClient} indexName="movies">
      <Container>
         <Configure hitsPerPage={4} />
         <CustomSearchBox />
         <CustomRefinementList
            attribute="genres"
            transformItems={transformLabels}
         />
         <CustomCurrentRefinements
            clearsQuery
            transformItems={transformLabel}
         />
         <CustomHits />
      </Container>
   </InstantSearch>
)
