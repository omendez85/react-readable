import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  EDIT_COMMENT,
  VOTE_COMMENT,
} from '../actions/comments';

const initialCommentState = {
    posts: []
    // id: null,
    // parentId: null,
    // timestamp: null,
    // body: null,
    // author: null,
    // voteScore: null,
    // deleted: null,
    // parentDeleted: null
}

const comments = function (state = initialCommentState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      const { recipe } = action

      return {
        ...state,
        [recipe.label]: recipe,
      }
    default :
      return state
  }
}

export default comments;

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
