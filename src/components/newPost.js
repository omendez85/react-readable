import React from 'react';
import ListCategories from './listCategories';

const newPost = (props) => {
    console.log(props);
    return (
        <div className="o-grid__cell">
            <h3 className="c-heading u-super">Add Post</h3>
            <form onSubmit={props.onSubmitPost} className='newPostForm'>
                <span className={`errorMessage c-link c-link--error ${props.onShowErrorForm ? 'show' : ''}`}>Please fill all the fields</span>
                <label>
                    Title
                    <input className="c-field" name="title" type="text"/>
                </label>
                <label>
                    Author
                    <input className="c-field" name="author" type="text"/>
                </label>
                <ListCategories />
                <label>
                    Post:
                    <textarea className="c-field" name="body" ></textarea>
                </label>
                <button type="submit" className="c-button c-button--success">Submit</button>
            </form>
        </div>
    );
};

export default newPost
