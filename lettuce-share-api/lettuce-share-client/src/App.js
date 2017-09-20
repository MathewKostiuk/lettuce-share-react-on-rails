import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch('/posts.json')
    .then((response) => {
      return response.json();
    }).then((myJSON) => {
      this.setState({
        posts: myJSON
      })
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Post />
        </p>
      </div>
    );
  }
}

export default App;
