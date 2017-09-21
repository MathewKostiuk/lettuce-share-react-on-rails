import React , {Component} from 'react';

class Post extends Component {

  render() {

    return (
      <div className='post'>
        <span>{ this.props.title }</span>
        <img src={ this.props.image }alt='post' />
        <span>{ this.props.description }</span>
        <span>{ this.props.location }</span>
      </div>
    )
  }
}

export default Post;