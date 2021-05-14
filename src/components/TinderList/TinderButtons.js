import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DislikeIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(1),
    },
    btnLeftContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    btnRightContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    btnLeft: {
        boxShadow: '0 2px 6px 0 rgb(112 125 134 / 14%)',
        backgroundColor: '#ffffff'
    },
    btnRight: {
        boxShadow: '0 2px 6px 0 rgb(112 125 134 / 14%)',
        backgroundColor: '#ffffff'
    }
}));

const TinderButtons = ({right, left}) => {
    const classes = useStyles();

    return (
        <Grid container justify="space-between" className={classes.root}>
            <Grid item xs={6} className={classes.btnLeftContainer}>
                <IconButton
                    onClick={left}
                    aria-label="dislike"
                    className={classes.btnLeft}
                >
                    <DislikeIcon color="secondary" fontSize="large" />
                </IconButton>
            </Grid>

            <Grid item xs={6} className={classes.btnRightContainer}>
                <IconButton
                    onClick={right}
                    aria-label="like"
                    className={classes.btnRight}
                >
                    <FavoriteIcon color="primary" fontSize="large" />
                </IconButton>
            </Grid>
        </Grid>
    );
};

export default TinderButtons;
