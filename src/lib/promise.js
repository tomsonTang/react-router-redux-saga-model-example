
if(window && !window.Promise){
  window.Promise = require('promise/lib/es6-extensions')
  require('promise/lib/rejection-tracking').enable();
}