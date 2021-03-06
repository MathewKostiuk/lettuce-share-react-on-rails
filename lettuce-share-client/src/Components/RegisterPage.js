import React, { Component } from 'react';
import  RegisterForm  from '../Containers/RegisterForm';
import { registerUser } from '../Actions/auth';
import { withRouter } from 'react-router';
import '../Styles/Forms.css'

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

export default withRouter(RegisterPage)