import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import {
  GlobalStyle,
  theme
} from './helpers/styled-components';
import { PrivateRoute } from './helpers/router';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/sign-up/SignUp';
import Dashboard from './pages/dashboard/Dashboard';
import './App.scss';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />

            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Redirect to="/" />
          </Switch>
        </Router>
        <GlobalStyle />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
