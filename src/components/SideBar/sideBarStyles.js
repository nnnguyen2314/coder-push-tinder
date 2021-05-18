import {makeStyles} from "@material-ui/core";

const sideBarStyles = makeStyles((theme) => ({
    drawer: {
        width: 70,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: 240,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    contentAlignLeft: {
        justifyContent: 'flex-start',
    },
    contentAlignRight: {
        justifyContent: 'flex-end',
    },
    contentAlignCenter: {
        justifyContent: 'center',
    },
    horizontalList: {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
    },
    pl8: {
        paddingLeft: 8,
    },
    pr8: {
        paddingRight: 8,
    },
    icon: {
        width: '1.5em',
        height: '1.5em'
    }
}));

export default sideBarStyles;
