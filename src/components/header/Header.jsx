import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { Wrapper } from './../../helpers/styled-components';


const NavItem = styled.li`
  border-bottom: 5px solid ${({ theme }) => theme.colors.white};
  float: ${({ side }) => side ? side : 'left'};
  padding: 10px 15px;
  line-height: 50px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  height: 100%;
  -webkit-transition: .4s all;
  -moz-transition: .4s all;
  -ms-transition: .4s all;
  -o-transition: .4s all;
  transition: .4s all;
  &:hover, &.active {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const NavMenu = styled.ul`
  list-style-type: none;
  overflow: hidden;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
`;

const HeaderWrapper = styled(Wrapper)`
  width: 1200px;
  margin: auto;
  height: 100%;
`;

const Container = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  height: 70px;
`;

class Header extends Component {
  logOut() {
    localStorage.removeItem('token');
    this.props.history.push('/');
  }

  render() {
    return (
      <Container>
        <HeaderWrapper>
          <NavMenu>
            <NavItem
              className={window.location.href.indexOf('/dashboard/account') > -1 && 'active'}
              onClick={() => this.props.history.push('/dashboard/account')}>Account</NavItem>
            <NavItem
              className={window.location.href.indexOf('/dashboard/loan') > -1 && 'active'}
              onClick={() => this.props.history.push('/dashboard/loan')}>Loan</NavItem>
            <NavItem side="right" onClick={() => this.logOut()}>Log out</NavItem>
          </NavMenu>
        </HeaderWrapper>
      </Container>
    );
  }
}

export default Header;
