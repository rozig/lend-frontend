import React, { Component } from 'react';
import {
  Redirect,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import styled from 'styled-components';

import { PrivateRoute } from './../../helpers/router';

import Account from './account/Account';
import Loan from './loan/Loan';
import Header from './../../components/header/Header';


class Dashboard extends Component {
  render() {
    const url = this.props.match.url;
    return (
      <React.Fragment>
        <Header history={this.props.history} />
        <Switch>
          <PrivateRoute path={`${url}/account`} component={Account} />
          <PrivateRoute path={`${url}/loan`} component={Loan} />
          <Redirect to="/dashboard/account" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Dashboard;
