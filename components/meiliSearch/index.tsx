import { instantMeiliSearch, InstantMeiliSearchInstance } from '@meilisearch/instant-meilisearch';
import { InstantSearch, Configure } from 'react-instantsearch-dom';
import CustomHits from './Hits';
import CustomRefinementList from './RefinementList';
import CustomSearchBox from './SearchBox';
import Container from '@material-ui/core/Container';
import { transfromLabels } from '../../helpers/tranformGenereLabels';
// import './meili.module.scss' //should i delete later?

const searchClient: InstantMeiliSearchInstance = instantMeiliSearch(
   'http://localhost:7700',
   '2e2716d9058e8c26ab4c01f936fd66f16dd5efe785448d2e87bcb53ab9d69588'
);

export const Search: React.FC = () => (
   <InstantSearch searchClient={searchClient} indexName="movies">
      <Container>
         <Configure hitsPerPage={4} />
         <CustomSearchBox />
         <CustomRefinementList attribute="genres" searchable transformItems={transfromLabels} />
         <CustomHits />
      </Container>
   </InstantSearch>
);
