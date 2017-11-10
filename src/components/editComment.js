import React, { Component } from 'react';

const EditPost = ( props ) => {

    return (
        <div className="o-grid__cell">
            <div className="o-grid-text">
                <form onSubmit={props.onSubmitEditComment} className='editCommentForm'>

                    <input name="postId" type="hidden" value={comment.id}/>
                    <input name="commentId" type="hidden" value={comment.parentId}/>

                    <span className={`errorMessage c-link c-link--error ${props.onShowErrorMsg ? 'show' : ''}`}>Please fill all the fields</span>
                    <h2>{comment.title}</h2>
                    <label>
                        Body:
                        <textarea className="c-field" name="body" defaultValue={comment.body}></textarea>
                    </label>
                    <button type="submit" className="c-button c-button--success">Save</button>
                </form>
            </div>
        </div>
    );
};

export default EditPost
