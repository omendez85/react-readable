import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import serializeForm from 'form-serialize';
import * as commentActions from '../actions/comments';
import AddComment from './addComment';

class Comments extends Component {
    state = {
        showErrorFormComments: false
    }
    componentDidMount() {
        this.props.commentActions.getCommentsPost(this.props.postId);
    }

    voteComment = (commentId, typeVote) => {
        this.props.commentActions.voteComment(commentId, typeVote);
    }

    newComment = (event) => {
        event.preventDefault();
        const fieldsValues = serializeForm(event.target, {hash: true});

        if (fieldsValues.body !== undefined && fieldsValues.author !== undefined && this.props.postId !== undefined){
            fieldsValues.parentId = this.props.postId;
            this.props.commentActions.addComment(fieldsValues);
            return;
        }
        this.setState({ showErrorFormComments: true });
    }

    render() {
        return (
            <div className="o-grid-text">
                <div className="o-grid__cell">
                <h3 className="c-heading u-super">Comments</h3>
                    <ul className="c-list">
                    { this.props.comments.listComments.map( (comment, i) => (
                        <li className="c-list__item comment-item" key={i}>
                            By: {comment.author}
                            <Link
                                to={`/comment/edit/${comment.id}`}
                                className="c-link c-link--info">Edit</Link><br/>
                                Votes: {comment.voteScore}<br/>
                            <span className="c-tags__container">
                                <button type="button" onClick={ () => this.voteComment(comment.id, 'upVote') } className="c-button c-button--brand">&#x1f44d;</button>
                                <button type="button" onClick={ () => this.voteComment(comment.id, 'downVote') } className="c-button c-button--brand">	&#128078;</button>
                            </span>
                            <p>{comment.body}</p>
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="o-grid__cell">
                    <AddComment onNewComment={this.newComment} showError={this.state.showErrorFormComments}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps ({ comments, posts }) {
    return {
        comments
    }
}

function mapDispatchToProps (dispatch) {
    return {
        commentActions: bindActionCreators( commentActions, dispatch ),
    }
}

// export default App;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comments)
