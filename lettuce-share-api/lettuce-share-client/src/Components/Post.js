import React , {Component} from 'react';
import '../Styles/Post.css';

class Post extends Component {

  render() {

    return (
      <div className='post'>
        <img className='post-image' src={ this.props.image }alt='post' />
        <span>{ this.props.description }</span>
      </div>
    )
  }
}

export default Post;