import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import List from '@material-ui/core/List';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ListItem from "@material-ui/core/ListItem";
import {NavLink} from "react-router-dom";
import clsx from "clsx";
import sideBarStyles from "./sideBarStyles";

export default function SideBar() {
    const classes = sideBarStyles();

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
