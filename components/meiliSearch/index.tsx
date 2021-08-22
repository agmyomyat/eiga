import { instantMeiliSearch, InstantMeiliSearchInstance } from '@meilisearch/instant-meilisearch';
import { InstantSearch, SearchBox, connectHits, RefinementList } from 'react-instantsearch-dom';
// import './meili.module.scss' //should i delete later?
import Container from '@material-ui/core/Container';
import Movies from '../movies/Movies';

const searchClient: InstantMeiliSearchInstance = instantMeiliSearch(
   'http://localhost:7700',
   '2e2716d9058e8c26ab4c01f936fd66f16dd5efe785448d2e87bcb53ab9d69588'
);

const Hits = ({ hits }) => {
   return (
      <>
         <Movies movies={hits} />
      </>
   );
};

const CustomHits = connectHits(Hits);

export const Search: React.FC = () => (
   <InstantSearch searchClient={searchClient} indexName="movies">
      <Container>
         <SearchBox />
         <RefinementList attribute="genres" />
         <CustomHits />
      </Container>
   </InstantSearch>
);
