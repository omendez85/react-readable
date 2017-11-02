import {
  ADD_POST,
  REMOVE_POST,
  EDIT_POST,
  VOTE_POST,
} from '../actions/posts';

const initialCommentState = {
    comments: []
    // id: null,
    // timestamp: null,
    // title: null,
    // body: null,
    // author: null,
    // category: null,
    // voteScore: null,
    // deleted: null
}

const posts = function (state = initialCommentState, action) {
  switch (action.type) {
    case ADD_POST:
      const { recipe } = action

      return {
        ...state,
        [recipe.label]: recipe,
      }
    default :
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
