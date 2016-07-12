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
    render() {
        let defautName='welcome';
        let defaultComponent=WelcomeUI;
        return (
            <Navigator
            initialRoute={{name:defautName,component:defaultComponent}}
            configureScene={(route)=>{
            return Navigator.SceneConfigs.FloatFromRight; }}
            renderScene={(route,navigator)=>{
            let Component=route.component;
            return <Component {...route.params} navigator={navigator}/>
            }}/>
        )

    }
}



export  default RouterApp;