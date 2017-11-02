import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Link, withRouter } from 'react-router-dom';

import * as Api from './utils/api';

import Header from './components/header';
import Categories from './components/categories';
import ListPosts from './components/listPosts';
import SortBy from './components/sortBy';

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
    Api.getCategories().then((categories) => {
        this.setState({ categories });
    });

    Api.getPosts().then((posts) => {
        console.log(posts);
        this.setState({ posts });
    });
  }

  onSortPostBy  = (event) => {
      let option = event.target.value;
      switch (option) {
          case 1:
                //return this.state.posts.filter(
              break;
          case 2:
                //return this.state.posts.filter(
              break;
          case 3:
                //return this.state.posts.filter(
              break;
          case 4:
                //return this.state.posts.filter(
              break;
          default:
                //return this.state.posts.filter(
      }
  }

  render() {
    return (
      <div className="App">

        <Header/>

        <Route exact path='/' render={() => (
            <div className="o-grid--full">
                <Categories categories={this.state.categories}/>
                <SortBy onSortPostBy={this.onSortPostBy}/>
                <ListPosts posts={this.state.posts}/>
            </div>
        )}/>

        <Route exact path="/category/:categoryId" render={() =>(
            <div>Some: {this.props.categoryId}</div>
        )}/>

        <Route exact path="/post" render={() =>(
            <div>POST ID</div>
        )}/>

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
