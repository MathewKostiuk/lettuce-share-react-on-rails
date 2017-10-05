import React, { Component } from 'react';
import  RegisterForm  from '../Containers/RegisterForm';
import { registerUser } from '../Actions/auth';

class RegisterPage extends Component {
  submit = (values, dispatch) => {
    dispatch(registerUser(values))
  }
  render() {
    return (
      <RegisterForm onSubmit={ this.submit } />
    )
  }
}

export default RegisterPage