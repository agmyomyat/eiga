import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../styles/MovieCard';
import Image from 'next/image';
import Typography from '@material-ui/core/Typography';

const Movie = ({ title, image, classes }) => {
    return (
        <div>
            <Card className={classes.card}>
                <Image
                    src={image}
                    className={classes.media}
                    layout="responsive"
                    width={600}
                    height={900}
                    alt={title}
                />
            </Card>
            <Typography className={classes.title} variant="body2" component="h3" noWrap="false">
                {title}
            </Typography>
        </div>
    );
};

export default withStyles(styles)(Movie);
