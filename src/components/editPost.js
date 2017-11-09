import React, { Component } from 'react';
import ListCategories from './listCategories';

const EditPost = ( props ) => {

    if(!props.postData.length) return null;

    let post = props.postData[0];
    let date = new Date(post.timestamp);
    date = date.toGMTString();
    return (
        <div className="o-grid__cell">
            <div className="o-grid-text">
                <form onSubmit={props.onSubmitEditPost}>
                    <input name="postId" type="hidden" value={post.id}/>

                    <span className={`errorMessage c-link c-link--error ${props.onShowErrorMsg ? 'show' : ''}`}>Please fill all the fields</span>

                    <label>
                        Title
                        <input className="c-field" name="author" type="text" defaultValue={post.title}/>
                    </label>
                    <ListCategories optionSelected={post.category} />
                    <label>
                        Body:
                        <textarea className="c-field" name="numberOfGuests" defaultValue={post.body}></textarea>
                    </label>
                    <button type="submit" className="c-button c-button--success">Save</button>
                </form>
            </div>
        </div>
    );
};

export default EditPost
