import {makeStyles} from "@material-ui/core";

const tinderListItemStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
    },
    media: {
        minWidth: 300,
        minHeight: 350,
        paddingTop: '56.25%',
    },
    cardMedia: {
        objectFit: 'cover',
        objectPosition: 'top',
        userSelect: 'none',
        pointerEvents: 'none',
    },
}));

export default tinderListItemStyles;
