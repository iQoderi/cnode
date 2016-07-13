/**
 * Created by qoder on 16-7-13.
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    WebView,
    TouchableOpacity,
    ToastAndroid,
}from 'react-native';

const back=require('../../images/back.png');
class TopicDetail extends  Component{
    _goBack(){
        const {navigator}=this.props;
        navigator.pop();
    }
    render(){
        const {content}=this.props;
        const url = `https://cnodejs.org/topic/${content}`;
        return (
            <View style={styles.flex}>
                <View style={styles.nav}>
                        <Image source={back} style={styles.image}/>
                        <Text
                            onPress={this._goBack.bind(this)}
                            style={styles.back_word}>返回</Text>
                </View>
                <View style={styles.flex}>
                <WebView
                    javaScriptEnabled={true}
                    source={{uri:content}}
                    decelerationRate="normal"
                    domStorageEnabled={true}
                    style={styles.flex}>
                </WebView>
                </View>
            </View>
        )
    }
}


const styles=StyleSheet.create({
    flex:{
        flex:1
    },
    nav:{
        height: 50,
        backgroundColor: '#444',
        paddingLeft: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    image:{
        width:20,
        height:30
    },
    back_word:{
        color:'#FFF',
        fontSize:16,
        fontWeight:'bold'
    }
});

export  default TopicDetail;
