import * as Api from '../utils/api';

export const INIT_POSTS = 'INIT_POSTS'
export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const EDIT_POST = 'EDIT_POST'
export const VOTE_POST = 'VOTE_POST'
export const SET_CURRENT_POST = 'SET_CURRENT_POST'

export function initPosts (posts) {
    return {
        type: INIT_POSTS,
        data: posts
    }
}

export function getInitListPosts() {
    return dispatch => {
        Api.getPosts()
            .then((posts) => {
                dispatch(initPosts(posts));
            });
      };
}

export function addPost ({ title, body, author, category }) {
  return {
    type: ADD_POST,
    title,
    body,
    author,
    category
  }
}

export function removePost ({ id }) {
  return {
    type: REMOVE_POST,
    id
  }
}

export function editPost ({ id, title, body, author, category }) {
  return {
    type: EDIT_POST,
    id,
    title,
    body,
    author,
    category
  }
}

export function votePost ({ id }) {
  return {
    type: VOTE_POST,
    id
  }
}


export function setCurrentPost (post) {
  return {
    type: SET_CURRENT_POST,
    data: post
  }
}

// export function getPostApi (postId) {
//     return Api.getPostById(postId).then( ;
// }

export function getPostApi(postId) {
    return dispatch => {
        Api.getPostById(postId)
            .then((post) => {
                dispatch(setCurrentPost(post));
            });
      };
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
