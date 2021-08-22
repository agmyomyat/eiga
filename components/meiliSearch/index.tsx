import { instantMeiliSearch, InstantMeiliSearchInstance } from '@meilisearch/instant-meilisearch';
import { InstantSearch, SearchBox, connectHits, RefinementList } from 'react-instantsearch-dom';
import './meili.module.scss';

const searchClient: InstantMeiliSearchInstance = instantMeiliSearch(
   'http://localhost:7700',
   '2e2716d9058e8c26ab4c01f936fd66f16dd5efe785448d2e87bcb53ab9d69588'
);

export const Search: React.FC = () => (
   <InstantSearch searchClient={searchClient} indexName="movies">
      <SearchBox />
      <RefinementList attribute="genres" />
      <CustomHits />
   </InstantSearch>
);

const Hits = ({ hits }) => {
   return (
      <ol>
         {hits.map(hit => (
            <li key={hit.id}>
               <a href={`/movies/${hit.uuid}`}>{hit.name}</a>
            </li>
         ))}
      </ol>
   );
};

const CustomHits = connectHits(Hits);
