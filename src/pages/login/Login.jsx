import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import {
  FormGroup,
  FormRow,
  Wrapper,
  Button,
  Input,
  Label,
  Form
} from './../../helpers/styled-components';
import { request } from './../../helpers/request';


const Title = styled.h1`
  margin-bottom: 10px;
  margin-top: 30px;
  font-size: 24px;
  display: block;
`;

const Note = styled.p`
  color: ${({ theme }) => theme.colors.black}90;
  margin: 30px auto;
  font-size: 13px;
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
    margin: 0 5px;
    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    }
  }
`;

const LoginForm = styled(Form)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  padding: 20px 40px;
  margin: 0 auto;
  width: 460px;
  margin-top: 120px;
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(evt) {
    const target = evt.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    request.post('/login/', this.state).then(({ data }) => {
      localStorage.setItem('token', data.token);
      this.props.history.push('/dashboard');
    }).catch(({ response }) => console.log(response.data));
  }

  render() {
    return (
      <Wrapper>
        <LoginForm onSubmit={this.handleSubmit}>
          <Title>Login to Lend</Title>
          <Note>Don't have an account? Click <Link to="/signup">here</Link> to signup!</Note>
          <FormRow>
            <FormGroup>
              <Label>Username</Label>
              <Input name="username" type="text" value={this.state.username} onChange={this.handleInputChange} placeholder="Enter your username" required={true} />
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label>Password</Label>
              <Input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} placeholder="Enter your password" required={true} />
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Button
                type="submit"
                styleClass="solid"
                bgColor="primary"
                width="100%"
                color="white">Login</Button>
            </FormGroup>
          </FormRow>
        </LoginForm>
      </Wrapper>
    );
  }
}

export default Login;
