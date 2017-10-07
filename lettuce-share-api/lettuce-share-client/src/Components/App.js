import React, { Component } from 'react';
import logo from '../lettuce-logo.png';
import '../Styles/App.css';
import ActivePostFeed from '../Containers/PostFeed';
import Navigation from './Navigation';


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to LettuceShare!</h2>
          <Navigation />
        </div>
          <ActivePostFeed />
      </div>
    );
  }
}

export default App;
