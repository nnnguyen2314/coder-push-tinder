import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import './App.css';
import theme from './themes';
import HomePage from "./containers/HomePage";
import React from "react";

function App() {
  return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
            <Switch>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </MuiThemeProvider>
      </BrowserRouter>
  );
}

export default App;
