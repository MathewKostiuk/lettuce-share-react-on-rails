import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../Styles/Navigation.css';

class Navigation extends Component {
  render() {
    const { auth } = this.props;
    if (auth.auth) {
      return (
        <header>
          <nav>
            <ul className='navigation'>
              <li><Link to='/posts' className='nav-link'>Home</Link></li>
            </ul>
          </nav>
        </header>
      )
    } else {
      return (
        <header>
          <nav>
            <ul className='navigation'>
              <li><Link to='/posts' className='nav-link'>Home</Link></li>
              <li><Link to='/login' className='nav-link'>Login</Link></li>
              <li><Link to='/register' className='nav-link'>Register</Link></li>
            </ul>
          </nav>
        </header>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Navigation)