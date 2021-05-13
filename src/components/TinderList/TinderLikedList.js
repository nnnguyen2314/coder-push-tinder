import React, {useCallback, useEffect, useState} from 'react';
import TinderListItem from './TinderListItem';
import {
    makeStyles
} from "@material-ui/core";
import { Swipeable, direction } from 'react-deck-swiper';
import {CircularProgress} from "@material-ui/core";

import {getAllUsers} from "../../services/tinderService";
import Grid from "@material-ui/core/Grid";
import TinderdButtons from "./TinderButtons";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    tinderList: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        display: 'flex',
    },
    mt5: {
        marginTop: theme.spacing(5),
    },
    mt2: {
        marginTop: theme.spacing(2),
    },
    mt1: {
        marginTop: theme.spacing(1),
    },
}));

const TinderList = () => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [lastSwipeDirection, setLastSwipeDirection] = React.useState(null);
    const [users, setUsers] = useState([]);
    const [likedUsers, setLikedUsers] = useState([]);

    useEffect(() => {
        setLoading(true);
        async function fetchData() {
            const req = await getAllUsers();
            setUsers(req.data.data);
            setLoading(false);
        }
        fetchData();
    }, []);

    const handleOnSwipe = (swipeDirection) => {
        if (swipeDirection === direction.RIGHT) {
            setLastSwipeDirection('You just like someone!');
            setLikedUsers(prevState => [...prevState, users[0]]);
        }
        if (swipeDirection === direction.LEFT) {
            setLastSwipeDirection('left');
        }
        setUsers((prev) => {
            return prev.slice(1);
        });
    };

    return (
        <Grid container spacing={3} className={classes.tinderList}>
            {
                users.length > 0 && (
                    <Grid item xs={12} className={`${classes.mt2} ${classes.tinderList}`}>
                        {
                            lastSwipeDirection
                                ? (
                                    <Typography variant="body1">
                                        {'Looks like you have just swiped to '}
                                        {lastSwipeDirection}
                                        ? 🔮
                                    </Typography>
                                )
                                : (
                                    <Typography variant="body1">
                                        Try swiping the card below!
                                    </Typography>
                                )
                        }
                    </Grid>
                )
            }
            {loading && (<CircularProgress color="secondary" />)}
            {users.length > 0 &&  (
                <Grid item xs={12} className={`${classes.mt2} ${classes.tinderList}`}>
                    <Swipeable
                        onSwipe={handleOnSwipe}
                        renderButtons={({
                                            right,
                                            left,
                                        }) => (
                            <TinderdButtons
                                right={right}
                                left={left}
                            />
                        )}
                    >
                        <TinderListItem key={users[0].id} pictureUrl={users[0].picture} title={users[0].title} fullName={`${users[0].firstName} ${users[0].lastName}`} />
                    </Swipeable>
                </Grid>
            )}
        </Grid>
    )
}

export default TinderList;
