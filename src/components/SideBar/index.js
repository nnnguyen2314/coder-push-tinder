import React, {useCallback, useEffect, useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import clsx from "clsx";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import {useTheme} from "@material-ui/core";
import {NavLink, useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: 240,
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
}));

export default function SideBar() {
    const classes = useStyles();
    const theme = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();

    const handleDrawerOpen = () => {
        setIsOpen(true);
    };

    const handleDrawerClose = () => {
        setIsOpen(false);
    };

    return (
        <React.Fragment>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: isOpen,
                    [classes.drawerClose]: !isOpen,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: isOpen,
                        [classes.drawerClose]: !isOpen,
                    }),
                }}
            >
                <div className={clsx(classes.toolbar, {
                    [classes.contentAlignRight]: isOpen,
                    [classes.contentAlignLeft]: !isOpen,
                })}>
                    {
                        !isOpen ? (
                            <MenuIcon style={{marginLeft: 8}} onClick={handleDrawerOpen} />
                        ) : (
                            <MenuOpenIcon onClick={handleDrawerClose} />
                        )
                    }
                </div>
                <Divider />
                <List>
                    <ListItem component={NavLink} to="/">
                        <ListItemIcon><HomeIcon/></ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                </List>
                <Divider />
            </Drawer>
        </React.Fragment>
    );
}
