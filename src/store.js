var redux = require('redux');
var reducer = require('./reducer/reducer.js');
var store = redux.createStore(reducer);
store.subscribe(()=> console.log(store.getState()));
module.exports = store;
