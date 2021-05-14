import React, {useEffect, useReducer, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    makeStyles,
    CardActionArea,
    capitalize
} from "@material-ui/core";
import {initialState, tinderReducer} from "../../store/reducer";
import {
    FETCH_LIKED_HISTORY,
} from '../../store/actions'

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

const LikedHistoryList = () => {
    const classes = useStyles();
    const [state, dispatch] = useReducer(tinderReducer, initialState);
    useEffect(() => {
        dispatch({ type: FETCH_LIKED_HISTORY });
    }, []);

    return (
        <Grid container spacing={3} className={classes.centerContent}>
            <Grid item xs={12} className={`${classes.mt5} ${classes.centerContent}`}>
                <Typography variant="h4">
                    Hello CoderPush
                </Typography>
            </Grid>
            <Grid item xs={12} className={`${classes.mt2} ${classes.centerContent}`}>
                <Grid container spacing={3}>
                    {state.likedHistoryList && state.likedHistoryList.map((usr, index) => (
                        <Grid key={index} item xs={12}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        image={usr.pictureUrl ? usr.pictureUrl : ''}
                                        title={usr.fullName}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="h3">
                                            {capitalize(`${usr.fullName}`)}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default LikedHistoryList;