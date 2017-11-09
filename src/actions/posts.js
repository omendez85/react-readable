import * as Api from '../utils/api';
import uuid from 'uuid/v4';

export const INIT_POSTS = 'INIT_POSTS'
export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const EDIT_POST = 'EDIT_POST'
export const VOTE_POST = 'VOTE_POST'
export const SET_CURRENT_POST = 'SET_CURRENT_POST'
export const NEW_COMMENT_POST = 'NEW_COMMENT_POST'

/******** INIT POSTS **************/

export function initPosts (posts) {
    return {
        type: INIT_POSTS,
        data: posts
    }
}
export function getInitListPosts() {
    return dispatch => {
        Api.getPosts()
            .then( posts => {
                dispatch(initPosts(posts));
            });
      };
}


/******** VOTE POST **************/
export function votePostAction (post) {
    return {
        type: VOTE_POST,
        data: post
    }
}

export function votePosts(postId, voteValue) {
    let vote = { option: voteValue}
    return dispatch => {
        Api.votePost(postId, vote)
            .then( res => {
                dispatch(votePostAction(res));
            });
      };
}

/**************** UPDATE NEW COMMENT POST VALUE *******/

export function updateCountCommentsPostAction (post) {
    return {
        type: NEW_COMMENT_POST,
        data: post
    }
}

export function updateCountCommentsPost(postId, voteValue) {

    return dispatch => {
        Api.getPostById(postId)
            .then( res => {
                dispatch(updateCountCommentsPostAction(res));
            });
      };
}

/************* NEW POST ***************/

export function addPostAction (post) {
    return {
        type: ADD_POST,
        data: post
    }
}

export function addPost (newPost) {
    newPost.id = uuid();
    newPost.timestamp = new Date().getTime();
    return dispatch => {
        Api.createPost(newPost)
            .then( res => {
                dispatch(addPostAction(res));
            });
      };
}

/*************** EDIT POST *************/
export function editPostAction (post) {
    return {
        type: EDIT_POST,
        data: post
    }
}

export function editPost (post) {
    return dispatch => {
        Api.editPost(post.postId, post)
            .then( res => {

                dispatch(editPostAction(res));
            });
      };
}








export function removePost ({ id }) {
  return {
    type: REMOVE_POST,
    id
  }
}







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
