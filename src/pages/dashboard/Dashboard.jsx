import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: ${props => props.theme.colors.primary};
`;

class Dashboard extends Component {
  render() {
    return (
      <Container>
        Dashboard
      </Container>
    );
  }
}

export default Dashboard;
