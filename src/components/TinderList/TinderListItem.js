import React, {useCallback, useState} from "react";
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    IconButton,
    makeStyles, CardActions, CardActionArea,
    capitalize
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        maxWidth: 600,
    },
    media: {
        minWidth: 400,
        height: "auto",
        minHeight: 450,
        paddingTop: '56.25%',
    },
    cardMedia: {
        objectFit: 'cover',
        objectPosition: 'top',
        userSelect: 'none',
        pointerEvents: 'none',
    },
});

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
                    <Typography gutterBottom variant="h6" component="h3">
                        {capitalize(`${fullName}`)}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default TinderListItem;
