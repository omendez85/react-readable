import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const newPost = (props) => {
    return (
        <div className="o-grid__cell">
            <h3 className="c-heading u-super">Add Post</h3>
            <form onSubmit={props.onSubmitPost} className='newPostForm'>
                <span className={`errorMessage c-link c-link--error ${props.showError ? 'show' : ''}`}>Please fill all the fields</span>
                <label>
                    Title
                    <input className="c-field" name="title" type="text"/>
                </label>
                <label>
                    Author
                    <input className="c-field" name="author" type="text"/>
                </label>
                <div className="o-form-element">
                    <label className="c-label">Category:
                        <select className="c-field" name="category">
                            { props.categories.map( (category, i) => (
                                <option value={category.name} key={i}>{category.name}</option>
                            ))}
                        </select>
                    </label>
                </div>
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
