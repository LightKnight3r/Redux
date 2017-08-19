import React, { Component } from 'react';
import styles from '../css/style.js';
import TrueFalse from './tf.js'
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
}from 'react-native';
import {connect} from 'react-redux';
import {change,unchange,increaseTemp,decreaseHumid,increaseHumid,decreaseTemp} from '../actions/actions'
class Showing extends Component{
  handleIncrease(){
    var {dispatch}=this.props;
    dispatch(increaseTemp());
    dispatch(increaseHumid());
    dispatch(change());
  }
  handleDecrease(){
    var {dispatch}=this.props;
    dispatch(decreaseTemp());
    dispatch(decreaseHumid());
    dispatch(unchange());
  }
  render(){
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.increase} onPress={this.handleIncrease.bind(this)}><Text style={styles.text}>+</Text></TouchableOpacity>
        <Text style={styles.temp}>{this.props.temp+" \u2103"}</Text>
        <Text style={styles.temp}>{this.props.temp*9 / 5 + 32+" \u2109"}</Text>
        <Text style={styles.temp}>{this.props.humid+' %'}</Text>
        <TouchableOpacity style={styles.increase} onPress={this.handleDecrease.bind(this)}><Text style={styles.text}>-</Text></TouchableOpacity>
        <TrueFalse style={styles.temp}/>
      </View>
    );
  }
}

module.exports = connect(function(state){
  return {
    temp: state.temp,
    humid: state.humid,
  }
})(Showing);
