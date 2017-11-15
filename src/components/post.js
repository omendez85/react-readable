import React from 'react';
import Comments from './comments';
import ActionsBtnsPost from './actionsBtnsPost';

const Post = ( {postData, onVotePost, onDeletePost} ) => {

    if(!postData.length) return null;

    let post = postData[0];
    let date = new Date(post.timestamp);
    date = date.toGMTString();

    return (
        <div className="o-grid__cell">
            <div className="o-grid-text">
                <h2 className="c-heading">
                    {post.title}
                </h2>
                <ActionsBtnsPost
                    postId={post.id}
                    voteScore={post.voteScore}
                    onDeletePost={onDeletePost}
                    onVotePost={onVotePost}
                />
                <span className="c-heading__sub">Date: {date}</span> <br/>
                <span className="c-heading__sub">Category: {post.category}</span> <br/>
                <span className="c-heading__sub">Author: {post.author}</span> <br/>
                <p className="c-paragraph">{post.body}</p>
            </div>

            <Comments postId={post.id} />

        </div>
    );
};

export default Post
