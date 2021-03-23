import React, {Component} from 'react';
import {StyleSheet,View, Text,TextInput, TouchableOpacity, Alert,Modal,TouchableHighlight} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class Second extends Component {
    state={
        count:0,
        value:'',
        text:'',
        size:15,
      };
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
                        <TouchableOpacity onPress={this.fetchData.bind(this)}>
                        <View style={{width:50,height:50,alignItems:'center',justifyContent:'center',marginLeft:10,backgroundColor:'red'}}>
                                <Text>검색</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.fontsizeP.bind(this)}>
                        <View style={{width:50,height:50,alignItems:'center',justifyContent:'center',marginLeft:10,backgroundColor:'#202856'}}>
                                <Text style={{color:'white'}}>+</Text>
                        </View>
                        </TouchableOpacity>
                        {/* <TouchableOpacity onPress={()=>{this.fontsizeM.bind(this)}}> */}
                        <TouchableOpacity onPress={this.fontsizeM.bind(this)}>
                        <View style={{width:50,height:50,alignItems:'center',justifyContent:'center',marginLeft:10,backgroundColor:'#202856'}}>
                                <Text style={{color:'white'}}>-</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{width:'100%',height:'90%'}}>
                    <ScrollView>
                        <Text style={{fontSize:this.state.size}}>{this.state.text}</Text>
                    </ScrollView>
                </View>
            </View>
        );
    }

    printbible = function(){
        // let bible = this.state.value;
        // this.setState({text:bible});
        // alert(bible);
    }
    search = function(){
        let inpp = this.state.value;
        Alert.alert('오류',inpp+"장은 없습니다.");
    }

    fontsizeP = function(){
        if(this.state.size == 25){
            Alert.alert('오류','더이상 글자를 늘릴 수 없습니다.');
        }else{
            this.state.size += 1;
            this.setState({size:this.state.size});
        }
        
    }

    fontsizeM = function(){
        if(this.state.size == 10){
            Alert.alert('오류','더이상 글자를 줄일 수 없습니다.');
        }else{
            this.state.size -= 1;
        this.setState({size:this.state.size});
        }
    }

    fetchData=()=>{
        var request = new XMLHttpRequest();
        let bible = this.state.value;
        request.onreadystatechange = (e) =>{
          if(request.readyState !== 4){
            return;
          }
          if(request.status ===200){
            console.log('success',request.responseText);
            console.log('check',request.responseText.length);
            if(request.responseText.length == 2 || request.responseText.length==184){
                this.setState({
                    bible:this.state.value
                })
                Alert.alert('오류',bible+'쪽은 값이 없습니다.');
            }else{
                //여기서 값 옮겨서 화면단에다가 출력할수있는방안찾기
                this.setState({
                    text: request.responseText
                })
            }
            
          }else{
            console.warn('error');
          }
        };
        request.open('GET','http://13.124.172.29:1750/tae'+bible);
        request.send();
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