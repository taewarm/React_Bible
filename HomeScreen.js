    import React, { Component } from 'react';
    import {StyleSheet, View,Text,TouchableOpacity,} from 'react-native';
    import { createStackNavigator } from '@react-navigation/stack';
    
    
    
    function _onPress(aaa) {
        //navigation.navigate('Screen2');
        console.log(aaa);
    }
    
    function Home(){
        
    }
    /*function DetailsScreen({navigation}) {
      return (
      
      );
    }*/
    const Stack = createStackNavigator();
    class App extends React.Component {
    
    render(){
      const {navigation} = this.props;
      return (
        <View style={{flex:1}}>
      <View style={{height:'10%'}}>
        <Text style={{fontSize:50, textAlign:'center'}}>Start</Text>
      </View>
      <View style={{flexDirection:'row',height:'30%',backgroundColor: 'green'}}>
        <View style={{width:'50%',height:'50%',backgroundColor:'red'}}>
        <TouchableOpacity onPress={()=> _onPress(navigation)}>
        <View style={{width:'100%',height:'100%',justifyContent: 'center',alignItems: 'center'}}>
            <Text>버튼클릭</Text>
          </View>
        </TouchableOpacity>
        </View>
      </View>
      <View style={{height:'60%',backgroundColor:'blue'}}/>
    </View>
      );
    };
    };
    
    const styles = StyleSheet.create({
      ButtonClick:{
        
      },
      Button: {
        backgroundColor: '#00ff00',
      },
    });
    
    export default App;
    