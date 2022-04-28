import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import  chat from './chatscreen'
const Drawer = createDrawerNavigator();
import Home from './homescreen'
const App = () => {
  return (
   
      <NavigationContainer>
       <Drawer.Navigator initialRouteName="Home" >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Chatscreen" component={chat} />
      </Drawer.Navigator>
      </NavigationContainer>
  );
};

export default App;