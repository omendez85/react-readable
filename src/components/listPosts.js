import React from 'react';
import ResumePost from '../components/resumePost';

const ListPosts = (props) => {
    return (
        <div className="o-grid__cell list-posts">
            <div className="o-grid o-grid--wrap">
                  { props.posts.map( (post, i) => (
                      <ResumePost
                          post={post}
                          onDeletePost={props.onDeletePost}
                          onVotePost={props.onVotePost}
                          key={i}
                      />
                  ))}
            </div>
        </div>
    )
}

export default ListPosts;
