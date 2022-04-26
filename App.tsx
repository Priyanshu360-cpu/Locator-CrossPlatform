
import React from 'react';
import { Component }  from 'react';
import Geolocation from 'react-native-geolocation-service';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  PermissionsAndroid,
  TouchableOpacity,
  Linking, 
  Platform,
  View
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SmsAndroid from 'react-native-get-sms-android';
import { getPhoneNumber, getPhoneNumberSync } from 'react-native-device-info';
var DeviceInfo = require('react-native-device-info');

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

}
geolocation();
const proceed = () => {
  let phoneNumbers = ["8637845107"];
  for(let i=0;i<phoneNumbers.length;i++){
  SmsAndroid.autoSend(
    phoneNumbers[i],
    `Location Coordinates\nLatitude - ${lat}\nLongitude - ${long}\nAltitude - ${altitude}\nTrack them on https://localhost:3000/${DeviceInfo.getDeviceId()}\nSent on - ${timestamp}\nMap - https://www.google.com/maps/@${lat},${long},17z\nCreated by Locator - A Priyanshu Initiative`,
    (fail) => {
      alert("Failed to Send Tracking Messages")
      console.log('Failed with this error: ' + fail);
    },
    (success) => {
      alert('Location Tracking Started');
      console.log('SMS sent successfully');
    },
  );
  }
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
          <Text onPress={() => Linking.openURL(`https://localhost:3000/${DeviceInfo.getDeviceId()}`)}>Your Link - https://localhost:3000/{DeviceInfo.getDeviceId()}</Text> 
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
