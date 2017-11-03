import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Link, withRouter } from 'react-router-dom';
import _ from 'lodash';

import Header from './components/header';
import Categories from './components/categories';
import ListPosts from './components/listPosts';
import SortBy from './components/sortBy';
import Post from './components/post';

import * as commentActions from './actions/comments';
import * as postActions from './actions/posts';

class App extends Component {
  state = {
    categories: [],
    // posts: [],
    // comments: [],
    sortBy: '1'
  }

  componentDidMount() {


      postActions.getInitListPosts();
    // Api.getCategories().then((categories) => {
    //     this.setState({ categories });
    // });
    //
    // Api.getPosts().then((posts) => {
    //     //this.setState({ posts: _.orderBy(posts, ['timestamp'], ['desc']) });
    //     dispatch(postActions.initPosts(posts))
    // });

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
      this.setState({ posts: _.orderBy(this.state.posts, [order], [direction]) });
  }

  render() {
    return (
      <div className="App">

        <Header/>

        <Route exact path='/' render={() => (
            <div className="o-grid--full">
                <Categories categories={this.state.categories}/>
                <SortBy onSortPostBy={this.onSortPostBy}/>
                <ListPosts posts={this.props.posts}/>
            </div>
        )}/>

        <Route exact path="/category/:categoryId" render={() =>(
            <div>Some: {this.props.categoryId}</div>
        )}/>


        <Route path="/post/:postId" component={Post} />

      </div>
    );
  }
}

function mapStateToProps ({ comments, posts }) {
  return {
    comments,
    posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    commentActions: bindActionCreators( commentActions, dispatch ),
    postActions: bindActionCreators( postActions, dispatch )
  }
}

// export default App;
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
