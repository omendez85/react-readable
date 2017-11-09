import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Link, withRouter } from 'react-router-dom';
import _ from 'lodash';
import * as Api from './utils/api';

import Header from './components/header';
import Categories from './components/categories';
import ListPosts from './components/listPosts';
import SortBy from './components/sortBy';
import Post from './components/post';
import EditPost from './components/editPost';
import OverlayLoading from './components/overlayLoading';

import * as commentActions from './actions/comments';
import * as postActions from './actions/posts';
import * as categoriesActions from './actions/categories';

class App extends Component {
    state = {
        sortBy: '1'
    }

    componentDidMount() {
        this.props.categoriesActions.getCategories();
        this.props.postActions.getInitListPosts();
    }

    onSortPostBy  = (event) => {
        let option = parseInt(event.target.value);
        let order, direction;
        switch (option) {
          case 1:
                order = 'timestamp';
                direction = 'desc';
              break;
          case 2:
                order = 'timestamp';
                direction = 'asc';
              break;
          case 3:
                order = 'voteScore';
                direction = 'desc';
              break;
          case 4:
                order = 'voteScore';
                direction = 'asc';
              break;
          default:
                order = 'timestamp';
                direction = 'desc';
        }
        this.setState({ posts: _.orderBy(this.state.posts.listPosts, [order], [direction]) });
    }

    getPostData = (postId) => {
        return this.props.posts.listPosts.filter( post => post.id === postId);
    }

    votePost = (postId, typeVote) => {
        this.props.postActions.votePosts(postId, typeVote);
    }

    render() {
    return (
            <div className="App">
                <Header/>
                <Route exact path='/' render={() => (
                    <div className="o-grid--full">
                        <Categories categories={this.props.categories.listCategories}/>
                        <SortBy onSortPostBy={this.onSortPostBy}/>
                        <ListPosts posts={this.props.posts.listPosts} onSetPost={this.onSetPost}/>
                    </div>
                )}/>

                <Route exact path="/category/:categoryId" render={() =>(
                    <div>Some: {this.props.categoryId}</div>
                )}/>

                <Route path="/post/:postId" render={(props) => (
                    <Post postData={this.getPostData(props.match.params.postId)} onVotePost={this.votePost}/>
                ) }/>

                <Route path="/post/edit/:postId" render={(props) => ( <EditPost postData={this.getPostData(props.match.params.postId)}/> ) }/>

                

            </div>
        );
    }
}

function mapStateToProps ({ comments, posts, categories }) {
    return {
        comments,
        posts,
        categories
    }
}

function mapDispatchToProps (dispatch) {
    return {
        commentActions: bindActionCreators( commentActions, dispatch ),
        categoriesActions: bindActionCreators( categoriesActions, dispatch ),
        postActions: bindActionCreators( postActions, dispatch )
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App))
