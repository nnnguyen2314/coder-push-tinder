import {makeStyles} from "@material-ui/core";

const tinderButtonsStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(1),
    },
    btnLeftContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    btnRightContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    btnCenterContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    btn: {
        boxShadow: '0 2px 6px 0 rgb(112 125 134 / 14%)',
        backgroundColor: '#ffffff'
    },
}));

export default tinderButtonsStyles;
