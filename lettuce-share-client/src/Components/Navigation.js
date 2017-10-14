import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logoutUser } from '../Actions/auth';
import '../Styles/Navigation.css';

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