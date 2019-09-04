import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

const Errors = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: 13px;
`;

const SignUpForm = styled(Form)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  padding: 20px 40px;
  margin: 0 auto;
  width: 460px;
  margin-top: 30px;
`;

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      isError: false,
      error: ''
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
    }, () => {
      if(this.state.password !== this.state.confirmPassword) {
        this.setState({
          isError: true,
          error: 'Passwords don\'t match.'
        });
      } else {
        if(this.state.isError) {
          this.setState({ isError: false, error: '' });
        }
      }
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if(this.state.password !== this.state.confirmPassword && !this.state.isError) {
      this.setState({
        isError: true,
        error: 'Passwords don\'t match.'
      });
      return false;
    }

    request.post('/signup/', {
      'first_name': this.state.firstName,
      'last_name': this.state.lastName,
      'username': this.state.username,
      'email': this.state.email,
      'password': this.state.password
    }).then(({ data }) => {
      localStorage.setItem('token', data.token);
      this.props.history.push('/dashboard');
    }).catch(({ response }) => console.log(response.data));
  }

  render() {
    return (
      <Wrapper>
        <SignUpForm onSubmit={this.handleSubmit}>
          <Title>Sign up at Lend</Title>
          <Note>Already have an account? Click <Link to="/login">here</Link> to login!</Note>
          <FormRow>
            <FormGroup>
              <Label>First name</Label>
              <Input name="firstName" type="text" value={this.state.firstName} onChange={this.handleInputChange} placeholder="Enter your first name" required={true} />
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label>Last name</Label>
              <Input name="lastName" type="text" value={this.state.lastName} onChange={this.handleInputChange} placeholder="Enter your last-name" required={true} />
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label>Username</Label>
              <Input name="username" type="text" value={this.state.username} onChange={this.handleInputChange} placeholder="Enter your username" required={true} />
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label>Email</Label>
              <Input name="email" type="email" value={this.state.email} onChange={this.handleInputChange} placeholder="Enter your email" required={true} />
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
              <Label>Confirm password</Label>
              <Input name="confirmPassword" type="password" value={this.state.confirmPassword} onChange={this.handleInputChange} placeholder="Confirm your password" required={true} />
            </FormGroup>
          </FormRow>
          {this.state.isError && <FormRow>
            <Errors>{this.state.error}</Errors>
          </FormRow>}
          <FormRow>
            <FormGroup>
              <Button
                type="submit"
                styleClass="solid"
                bgColor="primary"
                width="100%"
                color="white"
                disabled={this.state.isError}>Sign Up</Button>
            </FormGroup>
          </FormRow>
        </SignUpForm>
      </Wrapper>
    );
  }
}

export default SignUp;
