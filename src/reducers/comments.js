import * as COMMENTS_ACTIONS from '../actions/comments';

// const initialCommentState = {
//     comments: []
//     // id: null,
//     // parentId: null,
//     // timestamp: null,
//     // body: null,
//     // author: null,
//     // voteScore: null,
//     // deleted: null,
//     // parentDeleted: null
// }
const initialCommentState = [];

const comments = function (state = initialCommentState, action) {
    switch (action.type) {
        case COMMENTS_ACTIONS.INIT_COMMENTS:
            return [...action.data]
        case COMMENTS_ACTIONS.ADD_COMMENT:

            break;
        case COMMENTS_ACTIONS.REMOVE_COMMENT:

            break;
        case COMMENTS_ACTIONS.EDIT_COMMENT:

            break;
        case COMMENTS_ACTIONS.VOTE_COMMENT:

            break;
        case COMMENTS_ACTIONS.GET_COMMENT:

            break;
        default:
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
