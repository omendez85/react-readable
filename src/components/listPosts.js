import React, { Component } from 'react';
import lang from '../utils/lang';
import ResumePost from '../components/resumePost';
import { Link } from 'react-router-dom';

class ListPosts extends Component {
  render() {
    return (
        <div className="o-grid__cell list-posts">
            <div className="o-grid o-grid--wrap">
                  { this.props.posts.map( (post, i) => (
                      <ResumePost post={post} key={i}>first</ResumePost>
                  ))}
            </div>
        </div>
    );
  }
}

export default ListPosts;
