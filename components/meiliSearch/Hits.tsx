import { connectHits } from 'react-instantsearch-dom';
import { HitsProvided } from 'react-instantsearch-core';
import Movies from '../movies/Movies';

function Hits({ hits }: HitsProvided<any>) {
   return <Movies movies={hits} />;
}

const CustomHits = connectHits(Hits);

export default CustomHits;
