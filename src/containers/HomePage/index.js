import React, { useState, useEffect } from 'react';
import {getAllUsers, getUser} from '../../services/tinderService';
import TinderList from "../../components/TinderList";
import SideBar from "../../components/SideBar";
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

const HomePage = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container spacing={24}>
                <Grid item xs={12} style={{marginTop:10}}>
                    <SideBar />
                </Grid>
                <Grid item xs={12} style={{marginTop:10}}>
                    <TinderList />
                </Grid>
            </Grid>
        </React.Fragment>

    );
};

export default HomePage;
