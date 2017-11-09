import * as Api from '../utils/api';
import uuid from 'uuid/v4';

export const ADD_COMMENT = 'ADD_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const GET_COMMENTS = 'GET_COMMENTS'

/********** GET AND SET COMMENTS FOR POST ************/
export function setComments (comments) {
    return {
        type: GET_COMMENTS,
        data: comments
    }
}

export function getCommentsPost(postId) {
    return dispatch => {
        Api.getCommentsByPostId(postId)
            .then((res) => {
                dispatch(setComments(res));
            });
      };
}

/********** GET AND SET COMMENTS FOR POST ************/

export function voteCommentAction (comment) {
    return {
        type: VOTE_COMMENT,
        data: comment
    }
}

export function voteComment(commentId, voteValue) {
    return dispatch => {
        Api.voteComment(commentId, voteValue)
            .then((res) => {
                dispatch(voteCommentAction(res));
            });
      };
}

/************** ADD COMMENTS POST *****************/

export function addCommentAction (comment) {
    return {
        type: ADD_COMMENT,
        data: comment
    }
}

export function addComment (comment) {

    comment.id = uuid();
    comment.timestamp = new Date().getTime();
    return dispatch => {
        Api.addComment(comment)
            .then((res) => {
                dispatch(addCommentAction(res));
            });
      };
}





export function removeComment ({ id }) {
  return {
    type: REMOVE_COMMENT,
    id
  }
}

export function editComment ({ id, body, author }) {
  return {
    type: EDIT_COMMENT,
    id,
    body,
    author
  }
}






/*
comments:
Attribute	Type	Description
id	String	Unique identifier
parentId	String	id of the parent post
timestamp	Integer	Time created - default data tracks this in Unix time. You can use Date.now() to get this number
body	String	Comment body
author	String	Comment author
voteScore	Integer	Net votes the comment has received (default: 1)
deleted	Boolean	Flag if comment has been 'deleted' (inaccessible by the front end), (default: false)
parentDeleted	Boolean	Flag for when the the parent post was deleted, but the comment itself was not.
*/
