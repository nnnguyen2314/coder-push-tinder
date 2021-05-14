import React, {useCallback, useEffect, useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import clsx from "clsx";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = useState({
        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button>
                    <ListItemIcon><HomeIcon/></ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
            </List>
            <Divider />
        </div>
    );

    return (
        <React.Fragment>
            <Button onClick={toggleDrawer('left', true)}>
                <AppsIcon/>
            </Button>
            <Drawer anchor='left' open={state['left']} onClose={toggleDrawer('left', false)}>
                {list('left')}
            </Drawer>
        </React.Fragment>
    );
}
