import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Api from '../utils/api';

import Header from './header';
import Categories from './categories';

import * as commentActions from '../actions/comments';
import * as postActions from '../actions/posts';

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
        <Categories categories={this.state.categories}/>
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
