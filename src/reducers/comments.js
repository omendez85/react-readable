import * as COMMENTS_ACTIONS from '../actions/comments';

const initialCommentState = {
    listComments: []
}

const comments = function (state = initialCommentState, action) {
    let newValues = [];
    switch (action.type) {
        case COMMENTS_ACTIONS.ADD_COMMENT:
                return { ...state,
                        listComments: [...state.listComments, action.data]
                }
            break;
        case COMMENTS_ACTIONS.REMOVE_COMMENT:
                return { ...state,
                        listComments: state.listComments.filter(item => {
                            return item.id !== action.data.id
                        })
                }
            break;
        case COMMENTS_ACTIONS.EDIT_COMMENT:
                newValues = state.listComments.map( el => {
                    if ( el.id === action.data.id) {
                        return action.data;
                    }
                    return el;
                });
                return { ...state, listComments: [...newValues] }

            break;
        case COMMENTS_ACTIONS.VOTE_COMMENT:
                newValues = state.listComments.map( el => {
                    if ( el.id === action.data.id) {
                        return action.data;
                    }
                    return el;
                });
                return { ...state, listComments: [...newValues] }

            break;
        case COMMENTS_ACTIONS.GET_COMMENTS:
                return  { ...state, listComments: [...action.data] }
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
