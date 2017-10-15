import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import logo from '../lettuce-logo.png';
import '../Styles/App.css';
import Navigation from './Navigation';
import { ActivePostFeed } from '../Containers/PostFeed';
import WelcomePage from './WelcomePage';

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
                <WelcomePage />
                )
            )}/>
            <Route path='/posts' component={ActivePostFeed} />
            <Route path='/register' component={WelcomePage} />
            <Route path='/login' component={WelcomePage} />
          </Switch>
      </div>
    );
  }
}

export default App;
