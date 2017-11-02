import React, { Component } from 'react';
import lang from '../utils/lang';
import Post from '../components/post';
import { Link } from 'react-router-dom';

class ListPosts extends Component {
  render() {
    return (
        <div className="o-grid__cell list-posts">
            <div className="o-grid o-grid--wrap">
                  { this.props.posts.map( (post, i) => (
                      <Post post={post} key={i}>first</Post>
                  ))}
            </div>
        </div>
    );
  }
}

export default ListPosts;
