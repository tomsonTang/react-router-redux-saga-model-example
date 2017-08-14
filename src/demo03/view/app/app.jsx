import React, { Component } from 'react';
import {Route} from 'react-router';
import {Link} from 'react-router-dom';
import About from '../about/index.jsx';
import Index from '../index/index.jsx';
import IndexModel from '../index/indexModel.js';

export default class App extends Component {

  componentWillMount = () => {
    const {register,history,sagaModel} = this.props;

    register(IndexModel);
    
    history.listen((location)=>{
      console.log('location change');
    });
  }

  componentWillUnmount() {
    const {dump,sagaModel} = this.props;

    dump(IndexModel.namespace);
  }

  render() {
    return (
      <div>
        <Link to="/about">关于</Link>
        <Link to="/">主页</Link>
        <Route exact path="/" component={Index}/>
        <Route path="/about" component={About}/>
    </div>
    );
  }
}
