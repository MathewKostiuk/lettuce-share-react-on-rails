import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import logo from '../lettuce-logo.png';
import '../Styles/App.css';
import NewPost from './NewPost';
import PostFeed from './PostFeed';
import { connect } from 'react-redux';
import { addPost } from '../Actions/posts';


const mapStateToProps = function(state) {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addPost: addPost
  }, dispatch)
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to LettuceShare!</h2>
        </div>
          <NewPost addPost={ this.props.addPost }/>
          <PostFeed posts={ this.props.posts } />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
