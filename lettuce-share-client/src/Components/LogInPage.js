import React, { Component } from 'react';
import LogInForm from '../Containers/logInForm';
import { loginUser } from '../Actions/auth';

class LogInPage extends Component {
  handleRedirect(response) {
    if (response < 300) {
      this.props.history.push('/posts')
    }
  }

  submitForm = (values, dispatch) => {
    dispatch(loginUser(values)).then(this.handleRedirect.bind(this))
  }

  render() {
    return (
        <LogInForm onSubmit={ this.submitForm } />
    )
  }
}

export default LogInPage