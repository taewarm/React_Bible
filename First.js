import React, {Component} from 'react';
import {StyleSheet,View, Text,TextInput, TouchableOpacity,Image, Alert} from 'react-native';

class First extends Component {
    state={
        count:0,
        value:'',
        text:'',
        img: require('./image/killerwhale.jpg')
      }
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{width:'100%', height:'10%', alignItems: 'center'}}>{/*justifyContent는 세로로가운데정렬 */}
                    <View style={{flexDirection:'row'}}>
                        <View style={{marginTop:15,marginRight:10}}>
                            <Text>ㅊㅇ</Text>
                        </View>
                        <View>
                            <TextInput style={styles.input} onChangeText={(text) => this.setState({value:text})} keyboardType="number-pad"/>
                        </View>
                        <TouchableOpacity onPress={this.changeImage.bind(this)}>
                        <View style={{width:50,height:50,alignItems:'center',justifyContent:'center',marginLeft:10,backgroundColor:'red'}}>
                                <Text>검색</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{width:'100%',height:'90%'}}>
                        <Image style={{width:'100%',height:'100%',resizeMode:'cover'}} source={this.state.img}/>
                    </View>
            </View>
        );
    }
    changeImage = function(){
        let count = this.state.value;
        switch(count){
            case '1':
                this.setState({img:require('./image/kakaotalk.png')});
                break;
            case '2':
                this.setState({img:require('./image/killerwhale.jpg')});
                break;
            default:
                this.search();
                this.state.count = 0;
                break;
        }
    }
    search = function(){
        let inpp = this.state.value;
        Alert.alert('오류',inpp+"장은 없습니다.");
    }
}

export default First;

const styles = StyleSheet.create({
    input:{
        width:200,
        borderColor:"#000000",
        borderWidth: 1
    }
});