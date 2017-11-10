import React from 'react';
import { Link } from 'react-router-dom';
import Comments from './comments';

const Post = ( {postData, onVotePost} ) => {

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
                <Link to={`/post/edit/${post.id}`} className="c-link c-link--info"> Edit </Link> |
                <button type="button" className="c-button c-button--success u-xsmall" onClick={this.onShowEditForm}>Delete</button>
                <div className="c-tags">
                    <span className="c-tags__container">
                        Total Votes: {post.voteScore} <br/>
                        <button type="button" className="c-button c-button--brand" onClick={ () => onVotePost(post.id, 'upVote') }>&#x1f44d;</button>
                        <button type="button" className="c-button c-button--brand" onClick={ () => onVotePost(post.id, 'downVote') }>&#128078;</button>
                    </span>
                </div>
                <span className="c-heading__sub">Date: {date}</span> <br/>
                <span className="c-heading__sub">Category: {post.category}</span> <br/>
                <span className="c-heading__sub">Comments: {post.commentCount}</span> <br/>
                <p className="c-paragraph">{post.body}</p>
            </div>

            <Comments postId={post.id} />

        </div>
    );
};

export default Post
