import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root ': {
            marginTop: theme.spacing(2),
            width: '100%',
        },
    },
}));

export default function Form(props) {
    const classes = useStyle()
    return (
        <form className={classes.root}>
            {props.children}
        </form>
    );
};