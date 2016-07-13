/**
 * Created by qoder on 16-7-12.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Navigator
}from 'react-native';

import WelcomeUI from  '../welcomeUI';

class RouterApp extends Component {
    renderScene(route){
        if(route.name==='TopicDetail'){
            return Navigator.SceneConfigs.PushFromRight;
        }else{
            return Navigator.SceneConfigs.FloatFromRight;
        }
    }
    render() {
        let defautName='welcome';
        let defaultComponent=WelcomeUI;
        return (
            <Navigator
            initialRoute={{name:defautName,component:defaultComponent}}
            configureScene={(route)=>{
            return Navigator.SceneConfigs.PushFromRight; }}
            renderScene={(route,navigator)=>{
            let Component=route.component;
            return <Component {...route.params} navigator={navigator} content={route.content}/>
            }}/>
        )

    }
}



export  default RouterApp;