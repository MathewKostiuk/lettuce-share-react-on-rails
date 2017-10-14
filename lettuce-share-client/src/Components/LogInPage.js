import React, { Component } from 'react';
import { Redirect } from 'react-router';
import LogInForm from '../Containers/logInForm';
import { loginUser } from '../Actions/auth';

class LogInPage extends Component {
  constructor() {
    super();
    this.state = {
      fireRedirect: false
    }
  }

  handleRedirect(response) {
    if (response < 300) {
      this.setState({
        fireRedirect: true
      })
    }
  }

  submitForm = (values, dispatch) => {
    dispatch(loginUser(values)).then(this.handleRedirect.bind(this))
  }

  render() {
    const { fireRedirect } = this.state
    return (
      <div>
        <LogInForm onSubmit={ this.submitForm } />
        {fireRedirect &&  (
            <Redirect to='/posts'/>
        )}
      </div>
    )
  }
}

export default LogInPage