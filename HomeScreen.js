    import React, { Component } from 'react';
    import {StyleSheet, View,Text,TouchableOpacity,Image} from 'react-native';
    
    
    
    function _onPress({navigation}) {
      {navigation.navigate('Seconds');}
        //console.log(aaa);
    }
    
    function _onPress1({navigation}) {
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
      <Image style={{width:'100%',height:'50%',resizeMode:'cover'}} source={require('./image/killerwhale.jpg')}/>
      <View style={{flexDirection:'row',height:'50%',backgroundColor: 'green'}}>
        <View style={{width:'50%',height:'50%',backgroundColor:'red'}}>
        <TouchableOpacity onPress={()=> _onPress({navigation})}>
        <View style={{width:'100%',height:'100%',justifyContent: 'center',alignItems: 'center'}}>
            <Text>버튼클릭</Text>
          </View>
        </TouchableOpacity>
        </View>
        <View style={{width:'50%',height:'50%',backgroundColor:'yellow'}}>
        <TouchableOpacity onPress={()=> _onPress1({navigation})}>
        <View style={{width:'100%',height:'100%',justifyContent: 'center',alignItems: 'center'}}>
            <Text>버튼클릭1</Text>
          </View>
        </TouchableOpacity>
        </View>
      </View>
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
    