import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    withStyles,
    Box, makeStyles,
} from "@material-ui/core";
import {useCallback, useState} from "react";
import {Info} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    content: {
        position: 'absolute',
        zIndex: 2,
        bottom: 0,
        width: '100%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

const UserCard = (props) => {
    const classes = useStyles();
    const {id, pictureUrl, title, fullName, gender, location} = props;
    const {likeStatus, setLikeStatus} = useState(false);
    const {dislikeStatus, setDislikeStatus} = useState(false);

    const doLiking = useCallback(
        (evt) => {
            setLikeStatus(!likeStatus);
        }, [setLikeStatus]
    );
    const doDisliking = useCallback(
        (evt) => {
            setDislikeStatus(!likeStatus);
        }, [setDislikeStatus]
    );

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={pictureUrl ? pictureUrl : 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg'}
                title={fullName}
            />
            <Box py={3} px={2} className={classes.content}>
                <Typography gutterBottom variant="h5" component="h2">
                    {/*{`${title} ${fullName}`}*/}
                    Lizard
                </Typography>
            </Box>
        </Card>
    )
}

export default UserCard;