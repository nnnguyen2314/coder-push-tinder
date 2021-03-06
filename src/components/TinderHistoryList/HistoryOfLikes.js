import React from 'react';
import Grid from "@material-ui/core/Grid";
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActionArea,
    capitalize
} from "@material-ui/core";

import {TinderContext} from "../../contexts/Tinder";
import historyOfLikesStyles from "./historyOfLikesStyles";
import clsx from "clsx";

const HistoryOfLikes = () => {
    const classes = historyOfLikesStyles();
    const [ state ] = React.useContext(TinderContext);

    return (
        <div className={classes.root}>
            <Grid container className={clsx(classes.nonMargin, classes.mt2)}>
                <Grid item xs={12} className="non-padding">
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

export default HistoryOfLikes;
