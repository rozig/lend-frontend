import React, { Component } from 'react';
import styled from 'styled-components';

import {
  Button,
  Wrapper,
} from './../../helpers/styled-components';


const Description = styled.p`
  font-weight: lighter;
  font-size: 48px;
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
  margin-top: 4em;
`;

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Description>Lend application homepage.</Description>
        <Button
          type="solid"
          bgColor="primary"
          color="white"
          margin="0 5px 0 0"
          onClick={() => this.props.history.push('/login')}>Login</Button>
        <Button
          type="solid"
          bgColor="accent"
          color="white"
          margin="0 0 0 5px"
          onClick={() => this.props.history.push('/signup')}>Sign up</Button>
      </Wrapper>
    );
  }
}

export default Home;
