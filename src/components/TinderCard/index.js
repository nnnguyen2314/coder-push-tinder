import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    withStyles,
    Box, makeStyles, CardActions, Button, CardActionArea,
} from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import DislikeIcon from '@material-ui/icons/HighlightOff';
import {useCallback, useState} from "react";
import { Frame, useMotionValue, useTransform, useAnimation } from 'framer';

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

const TinderCard = ({props}) => {
    const classes = useStyles();

    const {id, pictureUrl, title, fullName, gender, location, image, color} = props;
    const {likeStatus, setLikeStatus} = useState(false);
    const {dislikeStatus, setDislikeStatus} = useState(false);

    // To move the card as the user drags the cursor
    const motionValue = useMotionValue(0);

    // To rotate the card as the card moves on drag
    const rotateValue = useTransform(motionValue, [-200, 200], [-50, 50]);

    // To decrease opacity of the card when swipped
    // on dragging card to left(-200) or right(200)
    // opacity gradually changes to 0
    // and when the card is in center opacity = 1
    const opacityValue = useTransform(
        motionValue,
        [-200, -150, 0, 150, 200],
        [0, 1, 1, 1, 0]
    );

    // Framer animation hook
    const animControls = useAnimation();

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

    async function onCardDragEnd (event, info) {
        if (Math.abs(info.point.x) <= 150) {
            await animControls.start({
                x: 0,
                transition: { duration: 0.2 },
            });

            // onDelete(index);
        } else {
            await animControls.start({x: info.point.x < 0 ? -200 : 200, opacity: 1, transition: {duration: 0.5}});
        }
    }

    return (
        <Frame
            center
            // Card can be drag only on x-axis
            drag='x'
            x={motionValue}
            rotate={rotateValue}
            opacity={opacityValue}
            dragConstraints={{ left: -1000, right: 1000 }}
            onDragEnd={onCardDragEnd}
        >
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={pictureUrl ? pictureUrl : image}
                        title={fullName}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles
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
        </Frame>
    )
}

export default TinderCard;