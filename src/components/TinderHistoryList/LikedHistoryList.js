import React from 'react';
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
    root: {
        flexGrow: 1,
    },
    media: {
        height: 450,
        paddingTop: '56.25%', // 16:9
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
        <div className={classes.root}>
            <Grid container className={classes.mt5} style={{marginLeft: 0, marginRight: 0, marginBottom: 0}}>
                <Grid item xs={12} style={{padding: 0}}>
                    <Typography variant="h4">
                        Coder Push History
                    </Typography>
                </Grid>
                <Grid item xs={12} className={classes.mt2} style={{padding: 0}}>
                    <Grid
                        container
                        spacing={3}
                        justify="center" alignItems="center"
                    >
                        {(state.likedHistoryList && state.likedHistoryList.length > 0) ? state.likedHistoryList.map((usr, index) => (
                            <Grid key={index} item xs={12} sm={6} md={4}>
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
                            <Grid item md={12}>
                                <div style={{marginTop: 5}}>You didn't like anyone</div>
                            </Grid>
                        )
                        }
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default LikedHistoryList;
