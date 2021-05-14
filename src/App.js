import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {MuiThemeProvider, CssBaseline} from '@material-ui/core';
import './App.css';
import theme from './themes';
import React from "react";
import Grid from "@material-ui/core/Grid";
import SideBar from "./components/SideBar";
import HomePage from "./containers/HomePage";
import HistoryPage from "./containers/HistoryPage";
import {TinderProvider} from "./contexts/Tinder";
import TinderList from "./components/TinderList";
import LikedHistoryList from "./components/TinderHistoryList/LikedHistoryList";

function App() {
    return (
        <BrowserRouter>
            <TinderProvider>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    <Grid container>
                        <Grid item xs={12} style={{marginTop:10}}>
                            <SideBar />
                        </Grid>
                        <Grid item xs={12} style={{marginTop:10}}>
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
                </MuiThemeProvider>
            </TinderProvider>
        </BrowserRouter>
    );
}

export default App;
