import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const AddComment = ( {postData} ) => {
    return (
        <div className="o-grid__cell">
        <form>
            <label>
                Name
                <input
                name="author"
                type="checkbox"
                checked={this.state.isGoing}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
                Number of guests:
                <input
                name="numberOfGuests"
                type="number"
                value={this.state.numberOfGuests}
                onChange={this.handleInputChange} />
                </label>
            </form>
        </div>
    )
};

export default AddComment
