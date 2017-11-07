import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const EditPost = ( {postData} ) => {

    if(!postData.length) return null;

    let post = postData[0];
    let date = new Date(post.timestamp);
    date = date.toGMTString();
    return (
        <div className="o-grid__cell">
            <div className="o-grid-text">

                <form>
                    <label>
                        Title
                        <input className="c-field" name="author" type="text" value={post.title}/>
                    </label>
                    <br />
                    <label>
                        Body:
                        <textarea className="c-field" name="numberOfGuests">{post.body}</textarea>
                    </label>
                    <button type="button" className="c-button c-button--success">Save</button>
                </form>
            </div>
        </div>
    );
};

export default EditPost
