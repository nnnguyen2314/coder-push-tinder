import React from "react";
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActionArea,
    capitalize
} from "@material-ui/core";
import tinderListItemStyles from "./tinderListItemStyles";

const TinderListItem = (props) => {
    const classes = tinderListItemStyles();

    const {pictureUrl, fullName} = props;

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
};

export default TinderListItem;
