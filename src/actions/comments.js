import * as Api from '../utils/api';

export const ADD_COMMENT = 'ADD_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const GET_COMMENTS = 'GET_COMMENTS'

export function addComment ({ parentId, body, author }) {
  return {
    type: ADD_COMMENT,
    parentId,
    body,
    author
  }
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

export function voteComment ({ id }) {
  return {
    type: VOTE_COMMENT,
    id
  }
}

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
