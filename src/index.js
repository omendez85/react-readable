import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import ReduxThunk from 'redux-thunk'
import './css/blaze.min.css';
import './css/styles.css';
import reducers from './reducers'
import App from './App';

const Router = ( window.location.host.includes('github') ) ? HashRouter : BrowserRouter;

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

const createStoreWithMiddleware = applyMiddleware(ReduxThunk, logger)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
            <App />
        </Router>
    </Provider>,
  document.getElementById('root')
)
