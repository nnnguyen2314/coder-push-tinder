import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    IconButton,
    makeStyles, CardActions, CardActionArea,
    capitalize
} from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import DislikeIcon from '@material-ui/icons/HighlightOff';
import {useCallback, useState} from "react";

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

const TinderListItem = (props) => {
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
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={pictureUrl ? pictureUrl : ''}
                    title={fullName}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h6">
                        {capitalize(`${title}. ${fullName}`)}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">

                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
                <IconButton aria-label="Like">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="Dislike">
                    <DislikeIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default TinderListItem;