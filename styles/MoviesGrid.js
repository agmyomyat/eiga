export const styles = theme => ({
    root: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px,1fr))',
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px,1fr))',
        },
        [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))',
        },
        [theme.breakpoints.up('xl')]: {
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px,1fr))',
        },
        gridGap: 10,
        padding: theme.spacing(3),
    },
});
