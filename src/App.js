import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {MuiThemeProvider, CssBaseline} from '@material-ui/core';
import './App.css';
import theme from './themes';
import React from "react";
import Grid from "@material-ui/core/Grid";
import SideBar from "./components/SideBar";
import {TinderProvider} from "./contexts/Tinder";
import TinderList from "./components/TinderList";
import LikedHistoryList from "./components/TinderHistoryList/LikedHistoryList";

function App() {
    return (
        <BrowserRouter>
            <TinderProvider>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    <div style={{flexGrow: 1}}>
                        <Grid container spacing={3}>
                            <Grid item md={1} xs={12} style={{marginTop: 10, padding: 0}}>
                                <SideBar />
                            </Grid>
                            <Grid item md={11} xs={12} style={{marginTop: 10, padding: 0}}>
                                <Switch>
                                    <Route exact  path="/">
                                        <TinderList />
                                    </Route>
                                    <Route path="/history">
                                        <LikedHistoryList />
                                    </Route>
                                </Switch>
                            </Grid>
                        </Grid>
                    </div>
                </MuiThemeProvider>
            </TinderProvider>
        </BrowserRouter>
    );
}

export default App;
