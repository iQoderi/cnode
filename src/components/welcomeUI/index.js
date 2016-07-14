/**
 * Created by qoder on 16-7-12.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Navigator,
    Image,
    Alert,
    BackAndroid,
    ToastAndroid
}from 'react-native';

import  CommonStyles from '../../style/index.style';
const welcome = require('../../images/cnode.jpg');
import SideMenu from '../../containers/sideMenu.container';

class WelCome extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.timer = null;
        this._onBackAndroid = this._onBackAndroid.bind(this);
    }

    _onBackAndroid() {
        const {navigator}=this.props;
        let routeLen = navigator.getCurrentRoutes().length;
        if (routeLen > 1) {
            navigator.pop();
            return true;
        } else {
            if (this.lastBackPress && this.lastBackPress + 2000 >= Date.now()) {
                return false;
            }
            this.lastBackPress = Date.now();
            ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
            return true;
        }
    }
    
    componentWillMount() {
        BackAndroid.addEventListener('hardwareBackPress', this._onBackAndroid);
    }

    componentWillUnMount() {
        BackAndroid.removeEventListener('hardwareBackPress', this._onBackAndroid);
    }

    componentDidMount() {
        const TIME = 1500;
        const {navigator} =this.props;
        this.timer = setTimeout(()=> {
            navigator.replace({
                name: 'home',
                component: SideMenu
            });
            clearTimeout(this.timer);
        }, TIME)
    }

    render() {
        return (
            <View style={[CommonStyles.flex,CommonStyles.center,{backgroundColor:'#444'}]}>
                <Image source={welcome} style={{width:300,height:300}}/>
            </View>
        )
    }
}


export  default WelCome;