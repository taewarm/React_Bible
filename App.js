// In App.js in a new project

import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import First from './First';
import Second from './Second';
import HomeScreen from './HomeScreen';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Details" headerMode="null">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details" component={First} />
        <Stack.Screen name="Seconds" component={Second}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;