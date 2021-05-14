import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DislikeIcon from '@material-ui/icons/Close';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';

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
    btnCenterContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    btn: {
        boxShadow: '0 2px 6px 0 rgb(112 125 134 / 14%)',
        backgroundColor: '#ffffff'
    },
}));

const TinderButtons = ({right, left, restoreUnliked}) => {
    const classes = useStyles();

    return (
        <Grid container justify="space-between" className={classes.root}>
            <Grid item xs={4} className={classes.btnCenterContainer}>
                <IconButton
                    onCLick={restoreUnliked}
                    aria-label="restore"
                    className={classes.btn}
                >
                    <SettingsBackupRestoreIcon fontSize="large" />
                </IconButton>
            </Grid>
            <Grid item xs={4} className={classes.btnCenterContainer}>
                <IconButton
                    onClick={left}
                    aria-label="dislike"
                    className={classes.btn}
                >
                    <DislikeIcon color="secondary" fontSize="large" />
                </IconButton>
            </Grid>
            <Grid item xs={4} className={classes.btnCenterContainer}>
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
