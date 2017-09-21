import React, {Component} from 'react';
import Post from './Post.js';

class PostFeed extends Component {
  render() {
    const posts = this.props.posts.map((post) => {
      return <Post
        title={ post.title }
        location={ post.location }
        description={ post.description }
        image={ post.image }
        key={ post.id }
        userId= { post.user_id } />
    })
    return (
      <main className='posts'>
        { posts }
      </main>
    );
  }
}

export default PostFeed;