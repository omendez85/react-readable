import * as POSTS_ACTIONS from '../actions/posts';

// const posts = {
//     posts: []
//     // id: null,
//     // timestamp: null,
//     // title: null,
//     // body: null,
//     // author: null,
//     // category: null,
//     // voteScore: null,
//     // deleted: null
// }

const initialPostsState = [];

const posts = function (state = initialPostsState, action) {
    switch (action.type) {
        case POSTS_ACTIONS.INIT_POSTS:
                return [...action.data]
        case POSTS_ACTIONS.ADD_POST:

            break;
        case POSTS_ACTIONS.REMOVE_POST:

            break;
        case POSTS_ACTIONS.EDIT_POST:

            break;
        case POSTS_ACTIONS.VOTE_POST:

            break;
        case POSTS_ACTIONS.GET_POST:

            break;
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
