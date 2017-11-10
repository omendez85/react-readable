import React, { Component } from 'react';
import ResumePost from '../components/resumePost';

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
