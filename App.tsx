import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import home from './drawer'
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer independent={true}>
   <Stack.Navigator >
        <Stack.Screen
          name="Home"
          component={home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;