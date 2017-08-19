import React, { Component } from 'react';
import styles from '../css/style.js';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
}from 'react-native';
import {connect} from 'react-redux';
class TrueFalse extends Component{
  render(){
    return(
      <View>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}
module.exports = connect(function(state){
  return {
    text: state.text,
  }
})(TrueFalse);
