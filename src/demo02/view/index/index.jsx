import React from 'react';
import {connect} from 'react-redux';
import * as indexAction from './action.js';

class IndexView extends React.Component {
  componentWillUnmount(){
    console.log('index unmout')
  }

  render() {
    return (
      <div>
        <div>主页页面</div>
        <div>name: {this.props.name}</div>
        <div>{this.props.loading ? 'changing' : 'done'}</div>
        <a href="javascript:;" onClick={this.changeNames}> click me to changeName </a>
      </div>
    );
  }

  changeNames = ()=>{
    this.props.dispatch(indexAction.changeNameAction());
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    name:state.index.name,
    loading:state.loading.models.index,
  }
}
export default connect(mapStateToProps)(IndexView);
