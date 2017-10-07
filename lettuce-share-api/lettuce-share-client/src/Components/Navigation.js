import React, { Component } from 'react';
import '../Styles/Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className='navigation'>
        <span>Login</span>
        <span>Logout</span>
      </div>
    )
  }
}

export default Navigation