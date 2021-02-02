// In App.js in a new project
import React, {Component} from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import First from './First';
import Second from './Second';
import HomeScreen from './HomeScreen';


const Stack = createStackNavigator();

class App extends Component{
  //이 class 안에서 전역변수 같은느낌으로 설정해줄수있음 state가 관여할때마다 render가 한번 다시 돌아감
  state={
    count:0
  }
  render(){
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" headerMode="null">
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="First" component={First} />
            <Stack.Screen name="Seconds" component={Second}/>
          </Stack.Navigator>
        </NavigationContainer>
          );
        }
}
export default App;