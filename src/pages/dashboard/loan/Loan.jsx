import React, { Component } from 'react';
import styled from 'styled-components';

import { withContext } from './../../../helpers/context';
import {
  Button,
  Wrapper,
} from './../../../helpers/styled-components';


const Description = styled.p`
  margin-bottom: 30px;
  margin-top: 4em;
  font-size: 48px;
  padding: 0;
`;

class Loan extends Component {
  render() {
    return (
      <Wrapper>
        <Description>Loan page.</Description>
      </Wrapper>
    );
  }
}

export default withContext(Loan);
