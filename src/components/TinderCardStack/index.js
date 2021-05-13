import {useCallback, useState} from "react";
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    withStyles,
    Box, makeStyles, CardActions, Button, CardActionArea,
} from "@material-ui/core";
import {
    ActionAnimations,
    SwipeableList,
    SwipeableListItem
} from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import { findKey, mapEntries } from '@sandstreamdev/std/object';

const TinderCardStack = ({users}) => {
    const [contentAnimation, setContentAnimation] = useState(
        ActionAnimations.REMOVE
    );
};

export default TinderCardStack;