/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 
import React from 'react';
import { Component }  from 'react';
import Geolocation from 'react-native-geolocation-service';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  PermissionsAndroid,
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
import SmsAndroid from 'react-native-get-sms-android';



var DeviceInfo = require('react-native-device-info');
let trop = 1;
var Gh="";
function identifier(){
  if(trop==1){
  let In="ABCDEFGHIJKLMNOPQRSTabcdefghijklmopqrstuvwxyz0123456789!@#$%^&*()_+{}[]";
  for(let i=0;i<In.length;i++){
if(i%2==0){
  Gh=Gh+In[Math.floor(Math.random() * (In.length-0) + 0)];
}
  }
  trop=trop+1;
}
  return Gh;
}
const proceed = () => {
  SmsAndroid.autoSend(
    "9647640540",
    `Location Coordinates\nLatitude - 23.5350475\nLongitude - 87.3380425\nTrack them on https://localhost:3000/${identifier()}\nCreated by Locator - A Priyanshu Initiative`,
    (fail) => {
      alert("Failed to Send Tracking Messages")
      console.log('Failed with this error: ' + fail);
    },
    (success) => {
      alert('Location Tracking Started');
      console.log('SMS sent successfully');
    },
  );
};
const onPress = async () => {
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.SEND_SMS,
      {
        title: 'SMS Permission required',
        message: 'Grant Permission',
      },
    );
    const lgranted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission Required',
        message: 'Grant Permission',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      proceed();
    } else {
      alert('SMS Permission Denied');
    }
  } else {
    proceed();
  }
};
class App extends Component{
  render(){
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.container}>
          <Text >Your Link - https://localhost:3000/{identifier()}</Text> 
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={onPress}>
              <Text style={styles.textStyle}>
                Start Tracking
              </Text>
            </TouchableOpacity>
          </View>
         
        </View>
      </SafeAreaView>
    );
 
        }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 20,
  },
  textStyle: {
    fontSize: 18,
    color: 'white',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#f4511e',
    padding: 10,
  },
});

export default App;
