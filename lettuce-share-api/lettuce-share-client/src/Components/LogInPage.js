import React, { Component } from 'react';
import LogInForm from '../Containers/logInForm';

class LogInPage extends Component {
  submit = (values, dispatch) => {
    console.log(values, dispatch);
  }
  render() {
    return (
      <LogInForm onSubmit={ this.submit } />
    )
  }
}

export default LogInPage