import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
import Appa from './homescreen'
const App = () => {
  return (
   
      <NavigationContainer>
       <Drawer.Navigator initialRouteName="Home" >
        <Drawer.Screen name="Home" component={Appa} />
      </Drawer.Navigator>
      </NavigationContainer>
  );
};

export default App;