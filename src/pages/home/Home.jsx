import React, { Component } from 'react';
import styled from 'styled-components';

import {
  Button,
  Wrapper,
} from './../../helpers/styled-components';


const Description = styled.p`
  margin-bottom: 30px;
  margin-top: 4em;
  font-size: 48px;
  padding: 0;
`;

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Description>Lend application homepage.</Description>
        <Button
          styleClass="solid"
          bgColor="primary"
          color="white"
          margin="0 5px 0 0"
          onClick={() => this.props.history.push('/login')}>Login</Button>
        <Button
          styleClass="solid"
          bgColor="accent"
          color="white"
          margin="0 0 0 5px"
          onClick={() => this.props.history.push('/signup')}>Sign up</Button>
      </Wrapper>
    );
  }
}

export default Home;
