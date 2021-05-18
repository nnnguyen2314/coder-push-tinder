import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ListItem from "@material-ui/core/ListItem";
import {NavLink} from "react-router-dom";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
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

export default function SideBar() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Drawer
                variant="permanent"
                className={classes.drawer}
                anchor="left"
            >
                <div className={classes.toolbar}>
                </div>
                <Divider />
                <List>
                    <ListItem component={NavLink} to="/" className={clsx(classes.pl8, classes.pr8)}>
                        <ListItemIcon className={classes.contentAlignCenter} title="Home">
                            <HomeIcon color="secondary" className={classes.icon}/>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem component={NavLink} to="/history" className={clsx(classes.pl8, classes.pr8)}>
                        <ListItemIcon className={classes.contentAlignCenter} title="Likes">
                            <FavoriteIcon color="primary" className={classes.icon}/>
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Drawer>
        </React.Fragment>
    );
}
