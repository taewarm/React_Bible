import React, {Component} from 'react';
import {StyleSheet,View, Text,TextInput, TouchableOpacity,Image, Alert} from 'react-native';

class Second extends Component {
    state={
        count:0,
        value:'',
        text:'',
      }
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{width:'100%', height:'10%', alignItems: 'center'}}>{/*justifyContent는 세로로가운데정렬 */}
                    <View style={{flexDirection:'row'}}>
                        <View style={{marginTop:15,marginRight:10}}>
                            <Text>ㅅㄱ</Text>
                        </View>
                        <View>
                            <TextInput style={styles.input} onChangeText={(text) => this.setState({value:text})}/>
                        </View>
                        <TouchableOpacity onPress={this.printbible.bind(this)}>
                        <View style={{width:50,height:50,alignItems:'center',justifyContent:'center',marginLeft:10,backgroundColor:'red'}}>
                                <Text>검색</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{width:'100%',height:'90%'}}>
                        <Text>{this.state.text}</Text>
                    </View>
            </View>
        );
    }
    printbible = function(){
        let bible = this.state.value;
        this.setState({text:bible});
    }
    search = function(){
        let inpp = this.state.value;
        Alert.alert('오류',inpp+"장은 없습니다.");
    }
}

export default Second;

const styles = StyleSheet.create({
    input:{
        width:200,
        borderColor:"#000000",
        borderWidth: 1
    }
});