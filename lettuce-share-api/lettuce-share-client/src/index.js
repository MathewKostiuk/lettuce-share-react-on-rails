import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { postReducers } from './Reducers/posts';
import { fetchAllPosts } from './Actions/posts';
import './Styles/index.css';
import App from './Components/App';
import registerServiceWorker from './Components/registerServiceWorker';

const loggerMiddleware = createLogger();

const reducers = {
  posts: postReducers
}

const reducer = combineReducers(reducers);

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
    )
  )

store
  .dispatch(fetchAllPosts())

const RootEl = document.getElementById('root');

setTimeout(function() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
     RootEl);
  registerServiceWorker();
}, 2000)


