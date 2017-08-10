import React from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router';
import {Link} from 'react-router-dom';
import {BrowserRouterControllerProvider} from 'react-router-redux-saga-model'
import About from './view/about/index.jsx';
import Index from './view/index/index.jsx';


ReactDOM.render(
  <BrowserRouterControllerProvider>
    <div>
        <Link to="/about">关于</Link>
        <Link to="/">主页</Link>
        <Route exact path="/" component={Index}/>
        <Route path="/about" component={About}/>
    </div>
  </BrowserRouterControllerProvider>,
  document.querySelector('#root')
)