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
import {
    FETCH_SUGGESTIONS_INIT,
    FETCH_SUGGESTIONS_SUCCESS,
    DO_LIKE,
    DO_UNLIKE,
    DO_RESTORE_LAST_UNLIKED,
} from '../../store/actions';
import {TinderContext} from "../../contexts/Tinder";

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
    const [ state, dispatch ] = React.useContext(TinderContext);

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
        dispatch({ type: DO_LIKE, payload: state.suggestions[0] });
    };
    const doUnliking = () => {
        dispatch({ type: DO_UNLIKE, payload: state.suggestions[0] });
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

    return (
        <Grid container spacing={3} className={classes.centerContent}>
            <Grid item xs={12} className={`${classes.mt5} ${classes.centerContent}`}>
                <Typography variant="h4">
                    Hello CoderPush
                </Typography>
            </Grid>
            {loading && (<CircularProgress color="secondary" />)}
            {state.suggestions && state.suggestions.length > 0 &&  (
                <Grid item xs={12} className={`${classes.mt2} ${classes.centerContent}`}>
                    <Swipeable
                        onSwipe={handleOnSwipe}
                        renderButtons={({right, left}) => (
                            <TinderButtons right={right} left={left} />
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
        </Grid>
    )
};

export default TinderList;
