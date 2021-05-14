import React, {useEffect} from 'react';
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

import {TinderContext} from "../../contexts/Tinder";

const useStyles = makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
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
    const [ state, dispatch ] = React.useContext(TinderContext);

    return (
        <Grid container spacing={3} className={classes.centerContent}>
            <Grid container item xs={12} className={`${classes.mt5} ${classes.centerContent}`}>
                <Typography variant="h4">
                    Coder Push History
                </Typography>
            </Grid>
            <Grid container item xs={12} className={`${classes.mt2} ${classes.centerContent}`}>
                <Grid
                    container
                    spacing={3}
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    {(state.likedHistoryList && state.likedHistoryList.length > 0) ? state.likedHistoryList.map((usr, index) => (
                        <Grid container key={index} item justify="center" alignItems="center">
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={usr.picture ? usr.picture : ''}
                                        title={`${usr.firstName} ${usr.lastName}`}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="h3">
                                            {capitalize(`${usr.firstName} ${usr.lastName}`)}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )) : (
                        <Grid item justify="center" alignItems="center">
                            <div style={{marginTop: 5}}>You didn't like anyone</div>
                        </Grid>
                    )
                    }
                </Grid>
            </Grid>
        </Grid>
    );
};

export default LikedHistoryList;
