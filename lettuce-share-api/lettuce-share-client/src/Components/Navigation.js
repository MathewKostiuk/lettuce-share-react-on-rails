import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul className='navigation'>
            <li><Link to='/login' className='nav-link'>Login</Link></li>
            <li><Link to='/posts' className='nav-link'>Home</Link></li>
            <li><Link to='/register' className='nav-link'>Register</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navigation