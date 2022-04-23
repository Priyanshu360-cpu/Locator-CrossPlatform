/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 
import React from 'react';
import { Component }  from 'react';

import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

var DeviceInfo = require('react-native-device-info');

class App extends Component{
  constructor(){
    super();
    this.state={
      DeviceID : ' '
    }
  }
  getDeviceID=()=>{
 
    var id = DeviceInfo.getUniqueID();
 
    this.setState({
 
      DeviceID : id
     
    })
 
  }
  render(){
  return (
            <Text >App.js - {this.state.DeviceID}</Text> 
  );
        }
};

export default App;
