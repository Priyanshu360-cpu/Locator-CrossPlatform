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
  let In="ABCDEFGHIJKLMNOPQRSTabcdefghijklmopqrstuvwxyz0123456789!@#$%^&*_+";
  for(let i=0;i<In.length;i++){
if(i%2==0){
  Gh=Gh+In[Math.floor(Math.random() * (In.length-0) + 0)];
}
  }
  trop=trop+1;
}
  return Gh;
}
let lat: number;
let long: number;
let altitude: number;
let timestamp : string;

function geolocation(){
  Geolocation.getCurrentPosition(
    (position) => {
      console.log(position);
      lat=position.coords.latitude;
      long=position.coords.longitude;
      altitude=position.coords.altitude;
      timestamp=new Date(position.timestamp).toLocaleString("en-in");
    },
    (error) => {
      console.log(error.code, error.message);
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
);
setTimeout(()=>{console.log(lat)},1000);

}
geolocation();
const proceed = () => {
  let phoneNumbers = {
    "addressList": ["****", "***", "****"]
  };
  
  SmsAndroid.autoSend(
    JSON.stringify(phoneNumbers),
    `Location Coordinates\nLatitude - ${lat}\nLongitude - ${long}\nAltitude - ${altitude}\nTrack them on https://localhost:3000/${identifier()}\nSent on - ${timestamp}\nCreated by Locator - A Priyanshu Initiative`,
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
          <Text>Geolocation - {lat}, {long}</Text>
          <Text>TimeStamp - {timestamp}</Text>
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
