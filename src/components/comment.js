import React, { Component } from 'react';

class Comment extends Component {
    state = {
        showFormEditComment: false
    }

    onShowEditForm = () =>{
        this.setState({showFormEditComment: true});
    }
    onSaveEditForm = (e) =>{
        this.props.onEditComment(e);
        this.setState({showFormEditComment: false});
    }

    render() {

        return (
            <li className="c-list__item comment-item" >
                By: {this.props.comment.author}<br/>
                <a
                    onClick={this.onShowEditForm}
                    className={`c-link c-link--info ${this.state.showFormEditComment ? 'hidden' : ''}`}>
                    Edit
                </a> |
                <button type="button" className="c-button c-button--success u-xsmall" onClick={ () => { this.props.onDeleteComment(this.props.comment.id) }}>Delete</button>
                <br/>
                Votes: {this.props.comment.voteScore}<br/>
                <span className="c-tags__container">
                    <button type="button" onClick={ () => this.props.onVoteComment(this.props.comment.id, 'upVote') } className="c-button c-button--brand">&#x1f44d;</button>
                    <button type="button" onClick={ () => this.props.onVoteComment(this.props.comment.id, 'downVote') } className="c-button c-button--brand">	&#128078;</button>
                </span>

                <p className={this.state.showFormEditComment ? 'hidden' : ''} >{this.props.comment.body}</p>

                <form onSubmit={this.onSaveEditForm} className='editPostForm' className={this.state.showFormEditComment ? '' : 'hidden'}>
                    <input name="id" type="hidden" value={this.props.comment.id}/>

                    <label>
                        Body
                        <input className="c-field" name="body" type="text" defaultValue={this.props.comment.body}/>
                    </label>
                    <button type="submit" className="c-button c-button--success">Save</button>
                </form>
            </li>

        );
    }
}
export default Comment
