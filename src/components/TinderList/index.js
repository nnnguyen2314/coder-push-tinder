import React, {useCallback, useEffect, useState} from 'react';
import TinderListItem from './TinderListItem';
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    makeStyles,
    Typography
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DislikeIcon from "@material-ui/icons/HighlightOff";
import {CircularProgress} from "@material-ui/core";

import {getAllUsers} from "../../services/tinderService";

const useStyles = makeStyles((theme) => ({
    tinderList: {
        display: "flex",
        marginTop: "10vh",
        justifyContent: "center"
    }
}));

const TinderList = () => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        setLoading(true);
        async function fetchData() {
            const req = await getAllUsers();
            setUsers(req.data.data);
            setLoading(false);
        }

        fetchData();
    }, []);

    console.log(users);

    return (
        <div className={classes.tinderList}>
            {loading && (<CircularProgress color="secondary" />)}
            {users && users.map((usr, index) => (
                <TinderListItem key={index} pictureUrl={usr.picture} title={usr.title} fullName={`${usr.firstName} ${usr.lastName}`} />
            ))}
        </div>
    )
}

export default TinderList;