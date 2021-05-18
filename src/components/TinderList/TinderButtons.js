import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DislikeIcon from '@material-ui/icons/Close';
import tinderButtonsStyles from "./tinderButtonsStyles";

const TinderButtons = ({right, left}) => {
    const classes = tinderButtonsStyles();

    return (
        <Grid container justify="space-between" className={classes.root}>
            <Grid item xs={6} className={classes.btnCenterContainer}>
                <IconButton
                    onClick={left}
                    aria-label="dislike"
                    className={classes.btn}
                >
                    <DislikeIcon fontSize="large" />
                </IconButton>
            </Grid>
            <Grid item xs={6} className={classes.btnCenterContainer}>
                <IconButton
                    onClick={right}
                    aria-label="like"
                    className={classes.btn}
                >
                    <FavoriteIcon color="primary" fontSize="large" />
                </IconButton>
            </Grid>
        </Grid>
    );
};

export default TinderButtons;
