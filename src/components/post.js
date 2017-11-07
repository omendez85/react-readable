import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddComment from './addComment';
import Comments from './comments';

const Post = ( {postData} ) => {

    if(!postData.length) return null;

    let post = postData[0];
    let date = new Date(post.timestamp);
    date = date.toGMTString();
    return (
        <div className="o-grid__cell">
            <div className="o-grid-text">
                <h2 className="c-heading">{post.title}</h2>
                <div className="c-tags">
                    <span className="c-tags__container">
                        <Link
                        to={`/post/edit/${post.id}`}
                        className="c-button c-tag"> Edit </Link>
                    </span>
                </div>
                <div className="c-tags">
                    <span className="c-tags__container">
                        Total Votes: {post.voteScore} <br/>
                        <button type="button" className="c-button c-button--brand">&#x1f44d;</button>
                        <button type="button" className="c-button c-button--brand">	&#128078;</button>
                    </span>
                </div>
                <span className="c-heading__sub">Date: {date}</span> <br/>
                <span className="c-heading__sub">Category: {post.category}</span> <br/>
                <span className="c-heading__sub">Comments: {post.commentCount}</span> <br/>
                <p className="c-paragraph">{post.body}</p>
            </div>

            <div className="o-grid-text">
                <Comments postId={post.id} />
            </div>
            <div className="o-grid-text">
                <AddComment />
            </div>
        </div>
    );
};

export default Post
