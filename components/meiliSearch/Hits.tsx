import { connectHits } from 'react-instantsearch-dom';
import Movies from '../movies/Movies';

function Hits({ hits }) {
   return <Movies movies={hits} />;
}

const CustomHits = connectHits(Hits);

export default CustomHits;
