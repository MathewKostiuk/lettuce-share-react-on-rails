import React, { Component } from 'react';
import { Redirect } from 'react-router';
import  RegisterForm  from '../Containers/RegisterForm';
import { registerUser } from '../Actions/auth';

class RegisterPage extends Component {
  handleRedirect(response) {
    if (response < 300) {
      this.props.fireRedirect()
    }
  }

  submitForm = (values, dispatch) => {
    dispatch(registerUser(values)).then(this.handleRedirect.bind(this))
  }
  render() {
    const { redirect } = this.props
    return (
      <div>
        <RegisterForm onSubmit={ this.submitForm } />
          {redirect &&  (
              <Redirect to='/posts'/>
          )}
      </div>
    )
  }
}

export default RegisterPage