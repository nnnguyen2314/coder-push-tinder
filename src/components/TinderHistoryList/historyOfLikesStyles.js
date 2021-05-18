import {makeStyles} from "@material-ui/core";

const historyOfLikesStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    media: {
        height: 450,
        paddingTop: '56.25%', // 16:9
    },
    mt5: {
        marginTop: theme.spacing(5),
    },
    mt2: {
        marginTop: theme.spacing(2),
    },
    mt1: {
        marginTop: theme.spacing(1),
    },
}));

export default historyOfLikesStyles;
