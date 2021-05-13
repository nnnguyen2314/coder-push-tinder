import React, { useState, useEffect } from 'react';
import {getAllUsers, getUser} from '../../services/tinderService';
import TinderList from "../../components/TinderList";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }
}));

const HomePage = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <TinderList />
        </div>
    );
};

export default HomePage;
