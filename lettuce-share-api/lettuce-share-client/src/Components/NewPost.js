import React, { Component } from 'react';
import PostForm from '../Containers/PostForm';
import { addPostRequest } from '../Actions/posts';

class NewPost extends Component {
  submit = (values, dispatch) => {
    console.log(values, dispatch);
    dispatch(addPostRequest(values))
  }
  render() {
    return (
      <PostForm onSubmit={this.submit} />
    )
  }
}

export default NewPost