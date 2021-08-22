import { instantMeiliSearch, InstantMeiliSearchInstance } from '@meilisearch/instant-meilisearch'
import { InstantSearch, SearchBox, connectHits,RefinementList} from 'react-instantsearch-dom';
// import './meili.module.scss' //should i delete later?
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';



const searchClient:InstantMeiliSearchInstance = instantMeiliSearch(
  'http://localhost:7700',
  '46bd992c4b247adc6414afdd55b094ece9869c88494b08a94fd014bd1bb0bd13'
)
const Hits=({hits})=> {
  const classes = useStyles();

  return (
    <Grid
  container
>
  {hits.map((hit)=>{return(
  <Grid key={hit.id} item xs={6} sm={6}>
    <Card className={classes.root}>
       <CardMedia
        className={classes.media}
        image={hit.photo_url}
        title="Paella dish"
      />
      <CardContent>

        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {hit.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium">Watch</Button>
      </CardActions>
      
    </Card>
    </Grid>
    )})}
    </Grid>
  );
}

const CustomHits = connectHits(Hits)

export const Search:React.FC = () => (
  <InstantSearch searchClient={searchClient} indexName="movies">
    <SearchBox />
    <CustomHits/>
    <RefinementList attribute="genres" />
    
  </InstantSearch>
);


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    
  },
  bullet: {
    display: 'grid',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
   media: {

      height: 0,
      paddingTop: '25%', // 16:9
      
    },
  pos: {
    marginBottom: 12,
  },
});



