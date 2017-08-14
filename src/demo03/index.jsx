import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouterProvider} from 'react-router-redux-saga-model'
import App from './view/app/app.jsx';
import loading from './plugins/loading.js';

ReactDOM.render(
  <BrowserRouterProvider component={App} plugins={[loading]}/>,
  document.querySelector('#root')
);