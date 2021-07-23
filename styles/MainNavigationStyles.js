import { alpha } from '@material-ui/core/styles';

export const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    appbar: {
        backgroundColor: 'transparent',
        paddingTop: 10,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    title: {
        flexGrow: 1,
        flexShrink: 0,
        marginRight: theme.spacing(2),
    },
    search: {
        position: 'relative',
        borderRadius: 20,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '18ch',
            '&:focus': {
                width: '24ch',
            },
        },
    },

    drawer: {
        width: 300,
        maxWidth: '40%',
    },
    drawerPaper: {
        width: 300,
        maxWidth: '40%',
    },
    listItems: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
