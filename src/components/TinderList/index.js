import React, {useCallback, useEffect, useState} from 'react';
import TinderListItem from './TinderListItem';
import {
    CardContent,
    makeStyles
} from "@material-ui/core";
import { Swipeable, direction } from 'react-deck-swiper';
import {CircularProgress} from "@material-ui/core";

import {getAllUsers} from "../../services/tinderService";
import Grid from "@material-ui/core/Grid";
import TinderdButtons from "./TinderButtons";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";

const useStyles = makeStyles((theme) => ({
    tinderList: {
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
    const theme = useTheme();
    const [loading, setLoading] = useState(false);
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [lastSwipeDirection, setLastSwipeDirection] = React.useState(null);
    const [users, setUsers] = useState([]);
    const [likedUsers, setLikedUsers] = useState([]);

    useEffect(() => {
        setLoading(true);
        async function fetchData() {
            const req = await getAllUsers();
            setUsers(req.data.data);
            setLoading(false);
        }
        fetchData();
    }, []);

    const handleOnSwipe = (swipeDirection) => {
        if (swipeDirection === direction.RIGHT) {
            setLastSwipeDirection('Looks like you have just swiped to like someone!');
            setLikedUsers(prevState => [...prevState, users[0]]);
        }
        setUsers((prev) => {
            return prev.slice(1);
        });
    };

    const handleOpenDialog = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    return (
        <Grid container spacing={3} className={classes.tinderList}>
            {
                users.length > 0 && (
                    <Grid item xs={12} className={`${classes.mt2} ${classes.tinderList}`}>
                        {
                            likedUsers.length > 0 &&
                            (
                                <Typography variant="body1">
                                    {lastSwipeDirection}
                                    <Button variant="outlined" color="primary" onClick={handleOpenDialog}>
                                        View Persons who you liked
                                    </Button>
                                </Typography>
                            )
                        }
                    </Grid>
                )
            }
            {loading && (<CircularProgress color="secondary" />)}
            {users.length > 0 &&  (
                <Grid item xs={12} className={`${classes.mt2} ${classes.tinderList}`}>
                    <Swipeable
                        onSwipe={handleOnSwipe}
                        renderButtons={({right, left}) => (
                            <TinderdButtons
                                right={right}
                                left={left}
                            />
                        )}
                    >
                        <TinderListItem key={users[0].id} pictureUrl={users[0].picture} title={users[0].title} fullName={`${users[0].firstName} ${users[0].lastName}`} />
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
                fullScreen={useMediaQuery(theme.breakpoints.down('sm'))}
            >
                <DialogTitle id="alert-dialog-slide-title">
                    <Typography gutterBottom variant="h4" component="h3">
                        Who you liked
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={3} className={classes.tinderList}>
                        {likedUsers && likedUsers.map((usr, index) => (
                            <Grid item xs={12} className={`${classes.mt2} ${classes.tinderList}`}>
                                <TinderListItem key={index} pictureUrl={usr.picture} title={usr.title} fullName={`${usr.firstName} ${usr.lastName}`} />
                            </Grid>
                        ))}
                    </Grid>
                </DialogContent>
            </Dialog>
        </Grid>
    )
};

export default TinderList;
