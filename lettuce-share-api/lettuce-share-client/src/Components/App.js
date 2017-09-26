import React, { Component } from 'react';
import logo from '../lettuce-logo.png';
import '../Styles/App.css';
import NewPost from './NewPost';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to LettuceShare!</h2>
        </div>
        <p className="App-intro">
          <NewPost />
        </p>
      </div>
    );
  }
}

export default App;
