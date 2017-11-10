import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import serializeForm from 'form-serialize';
import * as commentActions from '../actions/comments';
import AddComment from './addComment';
import Comment from './comment';

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
            document.querySelector('.addCommentForm').reset();
            return;
        }
        this.setState({ showErrorFormComments: true });
    }
    editComment = (event) => {
        event.preventDefault();

        const fieldsValues = serializeForm(event.target, {hash: true});
        if (fieldsValues.body !== undefined){
            this.props.commentActions.editComment(fieldsValues);
            return;
        }
    }

    deleteComment = (commentId) => {
        this.props.commentActions.removeComment(commentId);
    }

    render() {
        return (
            <div className="o-grid-text">
                <div className="o-grid__cell">
                <h3 className="c-heading u-super">Comments</h3>
                    <ul className="c-list">
                    { this.props.comments.listComments.map( (comment, i) =>
                        <Comment
                            comment={comment}
                            onVoteComment={this.voteComment}
                            onEditComment={this.editComment}
                            onDeleteComment={this.deleteComment}
                            key={i}
                        />
                    )}
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
