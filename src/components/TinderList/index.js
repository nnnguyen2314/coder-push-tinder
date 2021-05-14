import React, {useEffect, useReducer, useState} from 'react';
import TinderListItem from './TinderListItem';
import {
    makeStyles
} from "@material-ui/core";
import { Swipeable, direction } from 'react-deck-swiper';
import {CircularProgress} from "@material-ui/core";

import {getAllUsers} from "../../services/tinderService";
import Grid from "@material-ui/core/Grid";
import TinderButtons from "./TinderButtons";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import {initialState, tinderReducer} from "../../store/reducer";
import {
    FETCH_SUGGESTIONS_INIT,
    FETCH_SUGGESTIONS_SUCCESS,
    DO_LIKE,
    DO_UNLIKE,
    DO_RESTORE_LAST_UNLIKED,
} from '../../store/actions';

const useStyles = makeStyles((theme) => ({
    centerContent: {
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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const TinderList = () => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [lastSwipeDirection, setLastSwipeDirection] = React.useState(null);

    const [state, dispatch] = useReducer(tinderReducer, initialState);

    useEffect(() => {
        setLoading(true);
        async function fetchData() {
            dispatch({ type: FETCH_SUGGESTIONS_INIT });
            const req = await getAllUsers();
            setLoading(false);
            dispatch({ type: FETCH_SUGGESTIONS_SUCCESS, payload: req.data.data });
        }
        fetchData();
    }, []);

    const doLiking = () => {
        setLastSwipeDirection('Looks like you have just swiped to like someone!');
        dispatch({ type: DO_LIKE, payload: state.suggestions[0] });
    };
    const doUnliking = () => {
        setLastSwipeDirection('Looks like you have just swiped to unlike someone!');
        dispatch({ type: DO_UNLIKE, payload: state.suggestions[0] });
    };
    const doRestoreRecentUnliked = () => {
        dispatch({ type: DO_RESTORE_LAST_UNLIKED });
    };

    const handleOnSwipe = (swipeDirection) => {
        if (swipeDirection === direction.RIGHT) {
            doLiking();
        }
        if (swipeDirection === direction.LEFT) {
            doUnliking();
        }
        dispatch({ type: FETCH_SUGGESTIONS_SUCCESS, payload: state.suggestions.slice(1)});
    };

    const handleOpenDialog = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    return (
        <Grid container spacing={3} className={classes.centerContent}>
            <Grid item xs={12} className={`${classes.mt5} ${classes.centerContent}`}>
                <Typography variant="h4" component="h4">
                    Hello CoderPush
                </Typography>
            </Grid>
            <Grid item xs={12} className={`${classes.mt2} ${classes.centerContent}`}>
                {
                    state.likedHistoryList.length > 0 &&
                    (
                        <div>
                            <Typography variant="body1">
                                {lastSwipeDirection}
                            </Typography>
                            <Button variant="outlined" color="primary" onClick={handleOpenDialog}>
                                View Persons who you liked
                            </Button>
                        </div>
                    )
                }
            </Grid>
            {loading && (<CircularProgress color="secondary" />)}
            {state.suggestions.length > 0 &&  (
                <Grid item xs={12} className={`${classes.mt2} ${classes.centerContent}`}>
                    <Swipeable
                        onSwipe={handleOnSwipe}
                        renderButtons={({right, left}) => (
                            <TinderButtons right={right} left={left} restoreUnliked={doRestoreRecentUnliked}/>
                        )}
                    >
                        <TinderListItem
                            key={state.suggestions[0].id}
                            pictureUrl={state.suggestions[0].picture}
                            title={state.suggestions[0].title}
                            fullName={`${state.suggestions[0].firstName} ${state.suggestions[0].lastName}`}
                        />
                    </Swipeable>
                </Grid>
            )}
            <Dialog
                TransitionComponent={Transition}
                keepMounted
                open={dialogOpen}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                fullScreen
            >
                <DialogTitle id="alert-dialog-slide-title" onClose={handleCloseDialog}>
                    <Typography gutterBottom variant="h4" component="h4">
                        Who you liked
                    </Typography>
                </DialogTitle>
                <DialogContent dividers>
                    <Grid container spacing={3}>
                        {state.likedHistoryList && state.likedHistoryList.map((usr, index) => (
                            <Grid key={index} item xs={12}>
                                <TinderListItem key={usr.id} pictureUrl={usr.picture} title={usr.title} fullName={`${usr.firstName} ${usr.lastName}`} />
                            </Grid>
                        ))}
                    </Grid>
                </DialogContent>
                <Button autoFocus onClick={handleCloseDialog} color="primary">
                    Close
                </Button>
            </Dialog>
        </Grid>
    )
};

export default TinderList;
