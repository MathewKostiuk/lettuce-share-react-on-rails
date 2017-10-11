import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import logo from '../lettuce-logo.png';
import '../Styles/App.css';
import PostFeed from '../Containers/PostFeed';
import Navigation from './Navigation';
import LoginPage from './LogInPage';
import RegisterPage from './RegisterPage';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to LettuceShare!</h2>
        </div>
          <Navigation />
          <Switch>
            <Route exact path='/' render={() => (
              !!sessionStorage.jwt ? (
                <Redirect to='/posts' />
                ) : (
                <LoginPage />
                )
            )}/>
            <Route path='/posts' component={PostFeed} />
            <Route path='/register' component={RegisterPage} />
            <Route path='/login' component={LoginPage} />
          </Switch>
      </div>
    );
  }
}

export default App;
