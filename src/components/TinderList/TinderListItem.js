import React from "react";
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    makeStyles,
    CardActionArea,
    capitalize
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
    },
    media: {
        minWidth: 400,
        minHeight: 450,
        paddingTop: '56.25%',
    },
    cardMedia: {
        objectFit: 'cover',
        objectPosition: 'top',
        userSelect: 'none',
        pointerEvents: 'none',
    },
}));

const TinderListItem = (props) => {
    const classes = useStyles();

    const {id, pictureUrl, title, fullName, gender, location} = props;

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
