import React, {Component} from 'react';
import '../Styles/PostFeed.css';
import Post from './Post';
import NewPost from './NewPost';
import LogInPage from './LogInPage';
import RegisterPage from './RegisterPage';

class PostFeed extends Component {


  render() {
    const posts = this.props.posts.posts.map((post) => {
      return <Post
        description={ post.description }
        image={ post.image }
        key={ post.id }
        userId= { post.user_id } />
    })
    return (
      <main className='posts-container'>
      <RegisterPage />
      <LogInPage />
        <NewPost />
        { posts }
      </main>
    );
  }
}

export default PostFeed;