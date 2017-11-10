import React from 'react';

const AddComment = (props) => {
    return (
        <div className="o-grid__cell">
            <h3 className="c-heading u-super">Add comment</h3>
            <form onSubmit={props.onNewComment} className="addCommentForm">

                <span className={`errorMessage c-link c-link--error ${props.showError ? 'show' : ''}`}>Please fill all the fields</span>
                <label>
                    Name
                    <input className="c-field" name="author" type="text"/>
                </label>
                <br />
                <label>
                    Comment:
                    <textarea className="c-field" name="body" ></textarea>
                </label>
                <button type="submit" className="c-button c-button--success">Submit</button>
            </form>
        </div>
    )
};

export default AddComment
