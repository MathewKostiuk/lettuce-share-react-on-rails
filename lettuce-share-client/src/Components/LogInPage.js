import React, { Component } from 'react';
import { Redirect } from 'react-router';
import LogInForm from '../Containers/logInForm';
import { loginUser } from '../Actions/auth';

class LogInPage extends Component {
  handleRedirect(response) {
    if (response < 300) {
      this.props.fireRedirect()
    }
  }

  submitForm = (values, dispatch) => {
    dispatch(loginUser(values)).then(this.handleRedirect.bind(this))
  }

  render() {
    const { redirect } = this.props
    return (
      <div>
        <LogInForm onSubmit={ this.submitForm } />
        {redirect &&  (
            <Redirect to='/posts'/>
        )}
      </div>
    )
  }
}

export default LogInPage