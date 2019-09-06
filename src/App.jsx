import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AppProvider } from './helpers/context';
import { request } from './helpers/request';
import { PrivateRoute } from './helpers/router';
import {
  GlobalStyle,
  theme
} from './helpers/styled-components';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/sign-up/SignUp';
import Dashboard from './pages/dashboard/Dashboard';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    request.get('/user/', {
      headers: { Authorization: `Token ${localStorage.getItem('token')}`}
    }).then(({ data }) => {
      this.setState({user: data});
    }).catch(({ response }) => {
      console.log(response.data);
    });
  }

  render() {
    return (
      <AppProvider value={this.state}>
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
      </AppProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
