import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import Root from './Components/Root';
import registerServiceWorker from './Components/registerServiceWorker';
import { store } from './Store/Store';


const RootEl = document.getElementById('root');

  ReactDOM.render(
    <Root store={store} />,
     RootEl);
  registerServiceWorker();


