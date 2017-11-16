import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, withRouter } from 'react-router-dom';
import serializeForm from 'form-serialize';

import Header from './components/header';
import Categories from './components/categories';
import ListPosts from './components/listPosts';
import SortBy from './components/sortBy';
import Post from './components/post';
import EditPost from './components/editPost';
import NewPost from './components/newPost';
import NotPageFound from './components/notPageFound';

import * as commentActions from './actions/comments';
import * as postActions from './actions/posts';
import * as categoriesActions from './actions/categories';

class App extends Component {
    state = {
        sortBy: '1',
        filterByCategories: '',
        showErrorFormPost: false
    }

    componentDidMount() {
        this.props.categoriesActions.getCategories();
        this.props.postActions.getInitListPosts('timestamp', 'desc');
    }

    onSortPostBy  = (event) => {
        let option = parseInt(event.target.value, 10);
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
                direction = 'direction';
        }
        this.props.postActions.orderPosts(order, direction);
    }

    getPostData = (postId) => {
        return this.props.posts.listPosts.filter( post => post.id === postId);
    }

    votePost = (postId, typeVote) => {
        this.props.postActions.votePosts(postId, typeVote);
    }

    filterPostsByCategory = (category) => {
        this.setState({ filterByCategories: category });
    }

    submitNewPost = (event) => {
        event.preventDefault();
        const fieldsValues = serializeForm(event.target, {hash: true});

        if ( fieldsValues.title !== undefined &&
             fieldsValues.body !== undefined &&
             fieldsValues.author !== undefined &&
             fieldsValues.category !== undefined) {
             this.props.postActions.addPost(fieldsValues);
             document.querySelector('.newPostForm').reset();
             this.setState({ showErrorFormPost: false });
             return;
        }
        this.setState({ showErrorFormPost: true });
    }

    submitEditPost = (event) => {
        event.preventDefault();
        const fieldsValues = serializeForm(event.target, {hash: true});

        if ( fieldsValues.title !== undefined &&
             fieldsValues.body !== undefined) {
             this.props.postActions.editPost(fieldsValues);
             document.querySelector('.editPostForm').reset();
             this.setState({ showErrorFormPost: false });
             this.props.history.push(`/${fieldsValues.category}/${fieldsValues.postId}`);
             return;
        }
        this.setState({ showErrorFormPost: true });
    }

    deletePost = (postId) => {
        this.props.postActions.removePost(postId);
        this.props.history.push('/');
    }

    returnHome = () => {
        this.setState({ filterByCategories: '' });
    }

    render() {

        return (
            <div className="App">
                <Header onReturnHome={this.returnHome}/>
                <Route exact path='/:category?' render={() => {

                    const catExist = this.props.categories.listCategories.find( cat => cat.name === this.state.filterByCategories);

                    if(!catExist && this.state.filterByCategories !== "") {
                        return <NotPageFound textPage="Category not found" />;
                    }

                    const filteredPosts = ( this.state.filterByCategories === '') ? this.props.posts.listPosts : this.props.posts.listPosts.filter( post => post.category === this.state.filterByCategories) ;

                    return (<div className="o-grid--full">
                                <Categories
                                    categories={this.props.categories.listCategories}
                                    currentCategory={this.state.filterByCategories}
                                    onSelectCategory={this.filterPostsByCategory}
                                />
                                <SortBy onSortPostBy={this.onSortPostBy}/>
                                <ListPosts
                                    posts={filteredPosts}
                                    onSetPost={this.onSetPost}
                                    onDeletePost={this.deletePost}
                                    onVotePost={this.votePost}
                                />
                                <NewPost
                                    categories={this.props.categories.listCategories}
                                    onShowErrorForm={this.state.showErrorFormPost}
                                    onSubmitPost={this.submitNewPost} />
                            </div>)
                }}/>

                <Route exact path="/:category/:postId" render={(props) => {

                    const catExist = this.props.categories.listCategories.find( cat => cat.name === props.match.params.category);

                    if(!catExist) {
                        return <NotPageFound textPage="Page not found" />;
                    }

                    return <Post
                        postData={this.getPostData(props.match.params.postId)}
                        onVotePost={this.votePost}
                        onDeletePost={this.deletePost}
                    />
                }}/>

                <Route exact path="/post/edit/:postId" render={(props) => (
                    <EditPost
                        postData={this.getPostData(props.match.params.postId)}
                        onSubmitEditPost={this.submitEditPost}
                        onShowErrorMsg={this.state.showErrorFormPost}
                    />
                )}/>

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
