import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {
  render() {
    return (
        <div className="o-grid__cell o-grid__cell--width-100 o-grid__cell--width-50@small o-grid__cell--width-33@medium">
            <div className="o-grid-text">
                <h2 className="c-heading">
                    <Link to={`/post/${this.props.post.id}`} className="c-link c-link--info"> {this.props.post.title} </Link>
                </h2>
                <span className="c-heading__sub">Category: {this.props.post.category}</span> <br/>
                <span className="c-heading__sub">By: {this.props.post.author}</span>
                <p className="c-paragraph">{this.props.post.body}</p>
            </div>
        </div>
    );
  }
}

export default Post;
