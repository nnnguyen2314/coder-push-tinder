import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {MuiThemeProvider, CssBaseline, makeStyles} from '@material-ui/core';
import './App.css';
import theme from './themes';
import React from "react";
import Grid from "@material-ui/core/Grid";
import SideBar from "./components/SideBar";
import HomePage from "./containers/HomePage";
import HistoryPage from "./containers/HistoryPage";
import {initialState} from "./store/reducer";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));
export const TinderContext = React.createContext({
    state: initialState,
    dispatch: () => null
})
function App() {
    const classes = useStyles();
    return (
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Grid container>
                    <Grid item xs={12} style={{marginTop:10}}>
                        <SideBar />
                    </Grid>
                    <Grid item xs={12} style={{marginTop:10}}>
                        <Switch>
                            <Route path="/">
                                <HomePage />
                            </Route>
                            <Route path="/history">
                                <HistoryPage />
                            </Route>
                        </Switch>
                    </Grid>
                </Grid>
            </MuiThemeProvider>
        </BrowserRouter>
    );
}

export default App;
