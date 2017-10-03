import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { postReducers } from './Reducers/posts';
import { fetchAllPosts, POST_ADDED } from './Actions/posts';
import './Styles/index.css';
import App from './Components/App';
import registerServiceWorker from './Components/registerServiceWorker';

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
  posts: postReducers,
  form: formReducer.plugin({
    post: (state, action) => {
      switch(action.type) {
        case POST_ADDED:
          return undefined;
        default:
          return state;
      }
    }
  })
})

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
    )
  )

store
  .dispatch(fetchAllPosts())

const RootEl = document.getElementById('root');

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
     RootEl);
  registerServiceWorker();


