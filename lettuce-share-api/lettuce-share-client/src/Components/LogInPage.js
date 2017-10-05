import React, { Component } from 'react';
import LogInForm from '../Containers/logInForm';
import { loginUser } from '../Actions/auth';

class LogInPage extends Component {
  submit = (values, dispatch) => {
    console.log(values, dispatch);
    dispatch(loginUser(values))
  }
  render() {
    return (
      <LogInForm onSubmit={ this.submit } />
    )
  }
}

export default LogInPage