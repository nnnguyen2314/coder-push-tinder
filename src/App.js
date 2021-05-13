import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import './App.css';
import theme from './themes';
import HomePage from "./containers/HomePage";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //   <div>
    //     <TinderList />
    //   </div>
    // </div>
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
