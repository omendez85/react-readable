import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Route, Link } from 'react-router-dom';

import * as Api from './utils/api';

import Header from './components/header';
import Categories from './components/categories';

import * as commentActions from './actions/comments';
import * as postActions from './actions/posts';

class App extends Component {
  state = {
    categories: [],
    posts: [],
    comments: []
  }
  componentDidMount() {
    Api.getCategories().then((categories) => {
      this.setState({ categories });
    });
  }
  render() {
    return (
      <div className="App">
        <Header/>

        <Route exact path='/' render={() => (
          <Categories categories={this.state.categories}/>
        )}/>

        <Route exact path='/category' render={() => (
          <div>Filter</div>
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


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
