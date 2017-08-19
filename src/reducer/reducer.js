var redux = require('redux');
var doingReducer = require('./doingReducer.js');
import humidReducer from './humidReducer';
import changeReducer from './changeReducer';
var reducer = redux.combineReducers({
  temp: doingReducer,
  humid: humidReducer,
  text: changeReducer,
});
module.exports = reducer;
