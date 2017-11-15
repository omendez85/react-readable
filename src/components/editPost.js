import React from 'react';

const EditPost = ( props ) => {
    let post = props.postData[0];
    return (
        <div className="o-grid__cell">
            <div className="o-grid-text">
                <form onSubmit={props.onSubmitEditPost} className='editPostForm'>
                    <input name="postId" type="hidden" value={post.id}/>
                    <input name="category" type="hidden" value={post.category}/>

                    <span className={`errorMessage c-link c-link--error ${props.onShowErrorMsg ? 'show' : ''}`}>Please fill all the fields</span>

                    <label>
                        Title
                        <input className="c-field" name="title" type="text" defaultValue={post.title}/>
                    </label>
                    <label>
                        Body:
                        <textarea className="c-field" name="body" defaultValue={post.body}></textarea>
                    </label>
                    <button type="submit" className="c-button c-button--success">Save</button>
                </form>
            </div>
        </div>
    );
};

export default EditPost
