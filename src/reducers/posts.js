import * as POSTS_ACTIONS from '../actions/posts';

const initialPostsState = {
    listPosts: []
}

const posts = function (state = initialPostsState, action) {
    let newValues;
    switch (action.type) {
        case POSTS_ACTIONS.INIT_POSTS:
                return  { ...state, listPosts: [...action.data] }
        case POSTS_ACTIONS.ADD_POST:
                return { ...state,
                        listPosts: [...state.listPosts, action.data]
                }
        case POSTS_ACTIONS.REMOVE_POST:
                return { ...state,
                        listPosts: state.listPosts.filter(item => {
                            return item.id !== action.data.id
                        })
                }
        case POSTS_ACTIONS.EDIT_POST:
                newValues = state.listPosts.map( el => {
                    if ( el.id === action.data.id) {
                        return action.data;
                    }
                    return el;
                });
                return { ...state, listPosts: [...newValues] }
        case POSTS_ACTIONS.VOTE_POST:
                newValues = state.listPosts.map( el => {
                    if ( el.id === action.data.id) {
                        return action.data;
                    }
                    return el;
                });
                return { ...state, listPosts: [...newValues] }
        case POSTS_ACTIONS.NEW_COMMENT_POST:
                newValues = state.listPosts.map( el => {
                    if ( el.id === action.data.id) {
                        return action.data;
                    }
                    return el;
                });
                return { ...state, listPosts: [...newValues] }
        default:
            return state
    }
}

export default posts;

/*
Posts:
Posts are the building blocks of your application. Posts include:

Attribute	Type	Description
id	String	Unique identifier
timestamp	Integer	Time created - default data tracks this in Unix time. You can use Date.now() to get this number
title	String	Post title
body	String	Post body
author	String	Post author
category	String	Should be one of the categories provided by the server
voteScore	Integer	Net votes the post has received (default: 1)
deleted	Boolean	Flag if post has been 'deleted' (inaccessible by the front end), (default: false)
*/
