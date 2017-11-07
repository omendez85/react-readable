import * as COMMENTS_ACTIONS from '../actions/comments';

const initialCommentState = {
    listComments: [],
    currentComment: {}
    // id: null,
    // timestamp: null,
    // title: null,
    // body: null,
    // author: null,
    // category: null,
    // voteScore: null,
    // deleted: null
}

const comments = function (state = initialCommentState, action) {
    switch (action.type) {
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
