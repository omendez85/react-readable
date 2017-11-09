import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddComment extends Component {
    render() {
        return (
            <div className="o-grid__cell">
                <h3 className="c-heading u-super">Add comment</h3>
                <form onSubmit={this.props.onNewComment}>

                    <span className={`errorMessage c-link c-link--error ${this.props.showError ? 'show' : ''}`}>Please fill all the fields</span>
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
    }
};

export default AddComment
