import { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import InputBase from '@material-ui/core/InputBase';
import Drawer from '@material-ui/core/Drawer';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { styles } from '../../styles/MainNavigationStyles';

const MainNavigation = ({ classes }) => {
    const [open, setOpen] = useState(false);

    const list = (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
            <List className={classes.listItems}>
                <ListItem button>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Genere" />
                </ListItem>
            </List>
        </ClickAwayListener>
    );

    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0} position="absolute">
                <Toolbar component="nav">
                    {/* Menu Icon */}
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="secondary"
                        aria-label="open drawer"
                        onClick={() => setOpen(prev => !prev)}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* Title */}
                    <Typography className={classes.title} variant="h5" component="h2" noWrap>
                        Netflix
                    </Typography>

                    {/* Search Bar */}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search..."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="left"
                open={open}
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                {list}
            </Drawer>
        </div>
    );
};

export default withStyles(styles)(MainNavigation);
