    import React, { Component } from 'react';
    import {StyleSheet, View,Text,TouchableOpacity,Image, ImageBackground} from 'react-native';
    
    
    
    function _onPress({navigation}) {
      {navigation.navigate('Seconds');}
        //console.log(aaa);
    }
    
    function _onPress1({navigation}) {
      //{navigation.navigate('First');}
      {navigation.navigate('First');}
        //console.log(aaa);
    }

    class HomeScreen extends Component {
    
    render(){
      const {navigation} = this.props;
      return (
    <View style={{flex:1}}>
      <View style={{height:'10%'}}>
        <Text style={{fontSize:50, textAlign:'center'}}>Start</Text>
      </View>
      <ImageBackground style={{width:'100%',height:'100%',resizeMode:'cover'}} source={require('./image/killerwhale.jpg')}>
      <View style={{flexDirection:'row',height:'50%'}}>
        <View style={{width:'50%',height:'50%',backgroundColor:'red',marginTop:400,borderRadius:100}}>
        <TouchableOpacity onPress={()=> _onPress({navigation})}>
        <View style={{width:'100%',height:'100%',justifyContent: 'center',alignItems: 'center'}}>
            <Text>ㅅㄱ</Text>
          </View>
        </TouchableOpacity>
        </View>
        <View style={{width:'50%',height:'50%',backgroundColor:'yellow',marginTop:400,borderRadius:100}}>
        <TouchableOpacity onPress={()=> _onPress1({navigation})}>
        <View style={{width:'100%',height:'100%',justifyContent: 'center',alignItems: 'center'}}>
            <Text>ㅊㅇ</Text>
          </View>
        </TouchableOpacity>
        </View>
      </View>
      </ImageBackground>
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
    
    export default HomeScreen;
    