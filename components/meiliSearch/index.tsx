import { instantMeiliSearch, InstantMeiliSearchInstance } from '@meilisearch/instant-meilisearch'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';



const searchClient:InstantMeiliSearchInstance = instantMeiliSearch(
  'http://localhost:7700',
  'dc3fedaf922de8937fdea01f0a7d59557f1fd31832cb8440ce94231cfdde7f25'
)

