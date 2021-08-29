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
   '46bd992c4b247adc6414afdd55b094ece9869c88494b08a94fd014bd1bb0bd13'
);

export const Search: React.FC = () => (
   <InstantSearch searchClient={searchClient} indexName="movies">
      <Container>
         <Configure hitsPerPage={4} />
         <CustomSearchBox />
         <CustomRefinementList attribute="genres" transformItems={transfromLabels}  />
         <CustomHits />
      </Container>
   </InstantSearch>
);
