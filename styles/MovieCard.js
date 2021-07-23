export const styles = theme => ({
    card: {
        width: '100%',
        cursor: 'pointer',
    },
    media: {
        opacity: '1',
        transition: '0.3s',
        '&:hover': {
            opacity: '0.5',
        },
    },

    title: {
        padding: theme.spacing(2, 0, 1, 0),
    },
});
