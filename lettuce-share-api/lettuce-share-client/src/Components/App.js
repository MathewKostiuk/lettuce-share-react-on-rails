import React, { Component } from 'react';
import logo from '../lettuce-logo.png';
import '../Styles/App.css';
// import NewPost from './NewPost';
import ActivePostFeed from '../Containers/PostFeed';


class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to LettuceShare!</h2>
        </div>
          <ActivePostFeed />
      </div>
    );
  }
}

export default App;
