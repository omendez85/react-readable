import React from 'react';
import { Link } from 'react-router-dom';

const ActionsBtnsPost = ( props ) => {

    return (
        <div className="o-grid-text actions-post">
            <Link to={`/post/edit/${props.postId}`} className="c-link c-link--info"> Edit </Link> |
            <button type="button" onClick={ () => { props.onDeletePost(props.postId) }} className="c-button c-button--success u-xsmall">Delete</button>
            <div className="c-tags">
                <span className="c-tags__container">
                    Votes rating: {props.voteScore} <br/>
                    <button type="button" className="c-button c-button--brand" onClick={ () => props.onVotePost(props.postId, 'upVote') }>&#x1f44d;</button>
                    <button type="button" className="c-button c-button--brand" onClick={ () => props.onVotePost(props.postId, 'downVote') }>&#128078;</button>
                </span>
            </div>
        </div>
    );
};

export default ActionsBtnsPost
