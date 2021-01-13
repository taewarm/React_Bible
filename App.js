import React, { Component } from 'react';
import {StyleSheet, View,Text,TouchableOpacity,} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from "./Screen1";
import { NavigationContainer, StackActions } from '@react-navigation/native';


function _onPress() {
  console.log("버튼클릭을 눌렀을때");
}

function _onPress2({navigation}){
//  console.log("버튼클리2를 눌렀을때")
    navigation.navigate('Screen1');
}
function HomeScreen({navigation}){
  return(
    <View style={{flex:1}}>
      <View style={{height:'10%'}}>
        <Text style={{fontSize:50, textAlign:'center'}}>Start</Text>
      </View>
      <View style={{flexDirection:'row',height:'30%',backgroundColor: 'green'}}>
        <View style={{width:'50%',height:'50%',backgroundColor:'red'}}>
        <TouchableOpacity onPress={()=> _onPress()}>
        <View style={{width:'100%',height:'100%',justifyContent: 'center',alignItems: 'center'}}>
            <Text>버튼클릭</Text>
          </View>
        </TouchableOpacity>
        </View>
        <View style={{width:'50%',height:'50%',backgroundColor:'yellow'}}>
        <TouchableOpacity onPress={()=> navigation.navigate('Details')}>
          <View style={{width:'100%',height:'100%',justifyContent: 'center',alignItems: 'center'}}>
            <Text>버튼클릭2</Text>
          </View>
        </TouchableOpacity>
        </View>
      </View>
      <View style={{height:'60%',backgroundColor:'blue'}}/>
    </View>
  );
}
/*function DetailsScreen({navigation}) {
  return (
  
  );
}*/
const Stack = createStackNavigator();
class App extends React.Component {

render(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
};

const styles = StyleSheet.create({
  ButtonClick:{
    
  },
  Button: {
    backgroundColor: '#00ff00',
  },
});

export default App;
