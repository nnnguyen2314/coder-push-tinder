import {makeStyles} from "@material-ui/core";

const tinderListItemStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
    },
    media: {
        minWidth: 400,
        minHeight: 450,
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
