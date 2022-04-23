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
  TouchableOpacity,
  Platform,
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

function identifier(){
  let In="ABCDEFGHIJKLMNOPQRSTabcdefghijklmopqrstuvwxyz0123456789!@#$%^&*()_+{}[]";
  let Gh="";
  for(let i=0;i<In.length;i++){
if(i%2==0){
  Gh=Gh+In[Math.floor(Math.random() * (In.length-0) + 0)];
}
  }
  return Gh;
}

class App extends Component{

  render(){
  return (
            <Text >AutoGenerate - {identifier()}</Text> 
  );
        }
};
const styles = StyleSheet.create({
 
 MainContainer :{
 
   justifyContent: 'center',
   alignItems: 'center',
   flex:1,
   paddingTop: (Platform.OS == 'ios' ? 20 : 0)
 
 },
 
 button: {
    
  paddingTop: 10,
  paddingBottom: 10,
  width: '90%',
  backgroundColor: '#4CAF50',
},
 
TextStyle:{
    color:'#fff',
    textAlign:'center',
}
 
});
export default App;
