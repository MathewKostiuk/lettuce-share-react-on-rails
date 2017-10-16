import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logoutUser } from '../Actions/auth';
import '../Styles/Navigation.css';
import LogInPage from './LogInPage';
import RegisterPage from './RegisterPage';

class Navigation extends Component {
  logoutUser = (event) => {
    event.preventDefault()
    this.props.logoutUser()
    this.props.history.push('/login')
  }

  render() {
    const { auth } = this.props
    if (auth) {
      return (
        <header>
          <nav>
            <ul className='navigation'>
              <li><Link to='/posts' className='nav-link'>Feed</Link></li>
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
              <li><Link to='/posts' className='nav-link'>Feed</Link></li>
              <li><a className='nav-link'>Login</a>
                <ul className='navigation'>
                  <li className='nav-link'><LogInPage /></li>
                </ul>
              </li>
              <li><a className='nav-link'>Register</a>
                <ul className='navigation'>
                  <li className='nav-link'><RegisterPage /></li>
                </ul>
              </li>
            </ul>
          </nav>
        </header>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => {
      dispatch(logoutUser())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navigation))