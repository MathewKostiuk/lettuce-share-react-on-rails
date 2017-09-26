import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import posts from './Reducers/reducers';
import './Styles/index.css';
import App from './Components/App';
import registerServiceWorker from './Components/registerServiceWorker';

let store = createStore(posts);

const RootEl = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   RootEl);
registerServiceWorker();