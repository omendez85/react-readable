import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddComment extends Component {

    handleSubmit = (event) => {
        console.log(event);
        event.preventDefault();
    }
    render() {
        return (
            <div className="o-grid__cell">
                <h3 className="c-heading u-super">Add comment</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input className="c-field" name="author" type="text"/>
                    </label>
                    <br />
                    <label>
                        Comment:
                        <textarea className="c-field" name="numberOfGuests" ></textarea>
                    </label>
                    <button type="button" className="c-button c-button--success">Submit</button>
                </form>
            </div>
        )
    }
};

export default AddComment
