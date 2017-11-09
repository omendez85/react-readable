const api = "http://localhost:3001"

const headers = {
  'Accept': 'application/json',
  'Authorization': 'whatever-you-want'
}

const headersEdit = {
    ...headers,
    'Content-Type': 'application/json'
}

// GET /categories
//    USAGE:
//      Get all of the categories available for the app. List is found in categories.js.
//      Feel free to extend this list as you desire.
export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

//  GET /:category/posts
//    USAGE:
//      Get all of the posts for a particular category
export const getPostsByCategorie = (categoryId) =>
  fetch(`${api}/${categoryId}/posts`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

//  GET /posts
//    USAGE:
//      Get all of the posts. Useful for the main page when no category is selected.
export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json());

//  POST /posts
//    USAGE:
//      Add a new post
//
//    PARAMS:
//      id - UUID should be fine, but any unique id will work
//      timestamp - timestamp in whatever format you like, you can use Date.now() if you like
//      title - String
//      body - String
//      author - String
//      category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.
export const createPost = (dataPost) =>
  fetch(`${api}/posts`, { method: 'post', headers: headersEdit, body: JSON.stringify( dataPost ) })  // body: JSON.stringify({a: 7, str: 'Some string: &=&'})
    .then(res => res.json());

//  GET /posts/:id
//    USAGE:
//      Get the details of a single post
export const getPostById = (postId) =>
  fetch(`${api}/posts/${postId}`, { headers })
    .then(res => res.json())

//  POST /posts/:id
//    USAGE:
//      Used for voting on a post
//    PARAMS:
//      option - String: Either "upVote" or "downVote"
export const votePost = (postId, postParams) =>
  fetch(`${api}/posts/${postId}`, { method: 'post', headers: headersEdit, body: JSON.stringify(postParams)})
    .then(res => res.json())

//  PUT /posts/:id
//    USAGE:
//      Edit the details of an existing post
//    PARAMS:
//      title - String
//      body - String
export const editPost = (postId, postParams) =>
  fetch(`${api}/posts/${postId}`, { method: 'put', headers: headersEdit, body: JSON.stringify(postParams)})
    .then(res => res.json());

//  DELETE /posts/:id
//    USAGE:
//      Sets the deleted flag for a post to 'true'.
//      Sets the parentDeleted flag for all child comments to 'true'.  **************
export const deletePost = (postId) =>
  fetch(`${api}/posts/${postId}`, { method: 'DELETED', headers, body: JSON.stringify({deleted: true}) })
    .then(res => res.json())
    .then( (res) => {
        //get all comments related to the postId
        const commentsReleated = getCommentsByPostId(postId);
        commentsReleated.forEach( comment => {
            deleteComment(comment.id);
        })
        return res.categories
    });


//  GET /posts/:id/comments
//    USAGE:
//      Get all the comments for a single post
export const getCommentsByPostId = (postId) =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json());

//  POST /comments
//    USAGE:
//      Add a comment to a post
//
//    PARAMS:
//      id: Any unique ID. As with posts, UUID is probably the best here.
//      timestamp: timestamp. Get this however you want.
//      body: String
//      author: String
//      parentId: Should match a post id in the database.
export const addComment = (comment) =>
  fetch(`${api}/comments`, { method: 'POST', headers: headersEdit, body: JSON.stringify(comment) })
    .then(res => res.json());


//  GET /comments/:id
//    USAGE:
//      Get the details for a single comment
export const getCommentById = (commentId) =>
  fetch(`${api}/comments/${commentId}`, { headers })
    .then(res => res.json());

//  POST /comments/:id
//    USAGE:
//      Used for voting on a comment.
export const voteComment = (commentId, commentParams) =>
  fetch(`${api}/comments/${commentId}`, { method: 'post', headers: headersEdit, body: JSON.stringify(commentParams)})
    .then(res => res.json());

//  PUT /comments/:id
//    USAGE:
//      Edit the details of an existing comment
//
//    PARAMS:
//      timestamp: timestamp. Get this however you want.
//      body: String
export const editComment = (commentId, comment) =>
  fetch(`${api}/comments/${commentId}`, { method: 'PUT', headers, body: JSON.stringify(comment) })
    .then(res => res.json())
    .then(data => data.categories);

//  DELETE /comments/:id
//    USAGE:
//      Sets a comment's deleted flag to 'true'
export const deleteComment = (commentId) =>
  fetch(`${api}/comments/${commentId}`, { method: 'DELETED', headers, body: JSON.stringify( {deleted: true}) })
    .then(res => res.json())
    .then(data => data.categories);


// export const getAll = () =>
//   fetch(`${api}/books`, { headers })
//     .then(res => res.json())
//     .then(data => data.books)
//
// export const update = (book, shelf) =>
//   fetch(`${api}/books/${book.id}`, {
//     method: 'PUT',
//     headers: {
//       ...headers,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ shelf })
//   }).then(res => res.json())
//
// export const search = (query, maxResults) =>
//   fetch(`${api}/search`, {
//     method: 'POST',
//     headers: {
//       ...headers,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ query, maxResults })
//   }).then(res => res.json())
//     .then(data => data.books)
