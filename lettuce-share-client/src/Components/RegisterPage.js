import React, { Component } from 'react';
import  RegisterForm  from '../Containers/RegisterForm';
import { registerUser } from '../Actions/auth';

class RegisterPage extends Component {
  handleRedirect(response) {
    if (response < 300) {
      this.props.history.push('/posts')
    }
  }

  submitForm = (values, dispatch) => {
    dispatch(registerUser(values)).then(this.handleRedirect.bind(this))
  }

  render() {
    return (
        <RegisterForm onSubmit={ this.submitForm } />
    )
  }
}

export default RegisterPage