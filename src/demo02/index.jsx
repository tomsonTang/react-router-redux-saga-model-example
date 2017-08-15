import React from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router';
import {Link} from 'react-router-dom';
import {BrowserRouterProvider} from 'react-router-redux-saga-model'
import About from './view/about/index.jsx';
import Index from './view/index/index.jsx';
import loading from './plugins/loading.js';
import IndexModel from './view/index/indexModel.js';
import '../lib/promise.js';
const App = (sagaModel) =>{

  sagaModel.register(IndexModel);

  return (
    <div>
        <Link to="/about">关于</Link>
        <Link to="/">主页</Link>
        <Route exact path="/" component={Index}/>
        <Route path="/about" component={About}/>
    </div>
  )
};

ReactDOM.render(
  <BrowserRouterProvider children={App} plugins={[loading]}/>,
  document.querySelector('#root')
);