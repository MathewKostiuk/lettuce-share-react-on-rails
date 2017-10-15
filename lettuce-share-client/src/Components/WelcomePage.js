import React, { Component } from 'react';
import LogInPage from './LogInPage';
import RegisterPage from './RegisterPage';
import '../Styles/Forms.css';

class WelcomePage extends Component {
  render() {
    return (
      <div className='login-register'>
        <LogInPage />
        <RegisterPage />
      </div>
    )
  }
}

export default WelcomePage