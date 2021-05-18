import React, {useContext, useEffect, useState} from 'react';
import TinderListItem from './TinderListItem';
import { Swipeable, direction } from 'react-deck-swiper';

import {getAllUsers} from "../../services/tinderService";
import Grid from "@material-ui/core/Grid";
import TinderButtons from "./TinderButtons";
import Typography from "@material-ui/core/Typography";

import {
    FETCH_SUGGESTIONS_INIT,
    FETCH_SUGGESTIONS_SUCCESS,
    DO_LIKE,
    DO_UNLIKE,
} from '../../store/actions';
import {TinderContext} from "../../contexts/Tinder";
import CustomCircularProgress from "../shared/CustomCircularProgress";
import tinderListStyles from "./tinderListStyles";

const TinderList = () => {
    const classes = tinderListStyles();
    const [loading, setLoading] = useState(false);
    const [state, dispatch] = useContext(TinderContext);
    const [shouldFetchMoreData, setShouldFetchMoreData] = useState(false);

    async function fetchData() {
        setLoading(true);
        dispatch({ type: FETCH_SUGGESTIONS_INIT });
        const req = await getAllUsers(state.suggestion.currentLimit, state.suggestion.currentPage);
        setShouldFetchMoreData(req.data.data && req.data.data.length > 0);
        dispatch({
            type: FETCH_SUGGESTIONS_SUCCESS, payload: {
                list: req.data.data
            }
        });
        setLoading(false);
    }

    useEffect(() => {
        function loadData() {
            if (!state.suggestion.list || state.suggestion.list.length === 0 || (state.suggestion.list && state.suggestion.list.length === 5)) {
                fetchData();
            }
        }
        loadData();
    });

    const doLiking = () => {
        dispatch({ type: DO_LIKE, payload: state.suggestion.list[0] });
    };
    const doUnliking = () => {
        dispatch({ type: DO_UNLIKE, payload: state.suggestion.list[0] });
    };

    const handleOnSwipe = (swipeDirection) => {
        if (swipeDirection === direction.RIGHT) {
            doLiking();
        }
        if (swipeDirection === direction.LEFT) {
            doUnliking();
        }
        if (shouldFetchMoreData && state.suggestion.list.length === 5) {
            fetchData();
        }
    };

    return (
        <Grid container spacing={3} className={classes.centerContent}>
            {(!state.suggestion.list || state.suggestion.list.length <= 0) && loading ?
                (
                    <Grid item xs={12} className={`${classes.mt5} ${classes.centerContent}`}>
                        <CustomCircularProgress />
                    </Grid>
                )
                : (
                    <Grid item xs={12} className={`${classes.mt2} ${classes.centerContent}`}>
                        <Grid container spacing={3} className={classes.centerContent}>
                            <Grid item xs={12} className={`${classes.mt2} ${classes.centerContent}`}>
                                <Typography variant="h5">
                                    Hello, Welcome to CoderPush Tinder-like!
                                </Typography>
                                <Typography component="p">
                                    We found some suggestions for you here.
                                </Typography>
                            </Grid>
                            {state.suggestion.list && state.suggestion.list.length > 0 &&  (
                                <Grid item xs={12} className={`${classes.mt2} ${classes.centerContent}`}>
                                    <Swipeable
                                        onSwipe={handleOnSwipe}
                                        renderButtons={({right, left}) => (
                                            <TinderButtons right={right} left={left} />
                                        )}
                                    >
                                        <TinderListItem
                                            key={state.suggestion.list[0].id}
                                            pictureUrl={state.suggestion.list[0].picture}
                                            title={state.suggestion.list[0].title}
                                            fullName={`${state.suggestion.list[0].firstName} ${state.suggestion.list[0].lastName}`}
                                        />
                                    </Swipeable>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                )
            }
        </Grid>
    )
};

export default TinderList;
