import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <header>
        <nav className='navigation'>
          <ul>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/posts'>Home</Link></li>
            <li><Link to='/register'>Register</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navigation