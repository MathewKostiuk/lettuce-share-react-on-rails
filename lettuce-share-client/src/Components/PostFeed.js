import React, {Component} from 'react';
import '../Styles/PostFeed.css';
import Post from './Post';
import NewPost from './NewPost';

class PostFeed extends Component {

  componentDidMount() {
    this.props.getAllPosts();
  }


  render() {
    const posts = this.props.posts.map((post) => {
      return <Post
        description={ post.description }
        image={ post.image }
        key={ post.id }
        userId= { post.user_id } />
    })
    return (
      <main className='posts-container'>
        <NewPost />
        { posts }
      </main>
    );
  }
}

export default PostFeed;