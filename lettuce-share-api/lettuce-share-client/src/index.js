import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import posts from './Reducers/posts';
import './Styles/index.css';
import App from './Components/App';
import registerServiceWorker from './Components/registerServiceWorker';
import { fetchAllPosts } from './Actions/posts';

const loggerMiddleware = createLogger();

const store = createStore(
  posts,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
    )
  )

const RootEl = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   RootEl);
registerServiceWorker();

store
  .dispatch(fetchAllPosts())
  .then(() => console.log(store.getState()))

