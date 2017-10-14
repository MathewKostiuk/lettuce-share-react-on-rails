import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { logoutUser, fireRedirect } from '../Actions/auth';
import '../Styles/Navigation.css';

class Navigation extends Component {
  logoutUser = (event) => {
    event.preventDefault();
    this.props.logoutUser();
    this.props.fireRedirect();
  }

  render() {
    const { auth, redirect } = this.props
    if (auth) {
      return (
        <header>
          <nav>
            <ul className='navigation'>
              <li><Link to='/posts' className='nav-link'>Home</Link></li>
              <a href='/logout' className='nav-link' onClick={this.logoutUser}>Logout</a>
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
            {redirect &&  (
                <Redirect to='/register'/>
            )}
        </header>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.auth,
    redirect: state.auth.redirect
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => {
      dispatch(logoutUser())
    },
    fireRedirect: () => {
      dispatch(fireRedirect())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)