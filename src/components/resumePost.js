import React from 'react';
import { Link } from 'react-router-dom';
import ActionsBtnsPost from './actionsBtnsPost';

const ResumePost = (props) => {
    let date = new Date(props.post.timestamp);
    date = date.toGMTString();
    let resumeBody = (props.post.body.length >= 100) ? props.post.body.substring(0,100) : props.post.body;
    return (
        <div className="o-grid__cell o-grid__cell--width-100 o-grid__cell--width-50@small o-grid__cell--width-33@medium">
            <div className="card-post o-grid-text">
                <h2 className="c-heading">
                    <Link
                        to={`/${props.post.category}/${props.post.id}`}
                        className="c-link c-link--info">
                        {props.post.title}
                    </Link>
                </h2>

                <ActionsBtnsPost
                    postId={props.post.id}
                    voteScore={props.post.voteScore}
                    onDeletePost={props.onDeletePost}
                    onVotePost={props.onVotePost}
                />

                <span className="c-heading__sub">Date: {date}</span> <br/>
                <span className="c-heading__sub">Category: {props.post.category}</span> <br/>
                <span className="c-heading__sub">Comments: {props.post.commentCount}</span> <br/>
                <span className="c-heading__sub">Author: {props.post.author}</span><br/>
                <span className="c-heading__sub">Vote rating: {props.post.voteScore}</span>
                <p className="c-paragraph">{resumeBody}</p>
            </div>
        </div>
    );
};

export default ResumePost
