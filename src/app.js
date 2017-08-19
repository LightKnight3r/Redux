import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Showing from './components/index.js';
var store = require('./store.js');
export default class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <Showing/>
      </Provider>
    );
  }
}
