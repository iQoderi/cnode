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
    Alert
}from 'react-native';

import  CommonStyles from '../../style/index.style';
const welcome = require('../../images/cnode.jpg');
import SideMenu from '../../containers/sideMenu.container';

class WelCome extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
          this.timer=null;
      }
    componentDidMount() {
        const TIME=1500;
        const {navigator} =this.props;
        this.timer = setTimeout(()=> {
            navigator.replace({
                name:'home',
                component:SideMenu
            });
            clearTimeout(this.timer);
        },TIME)
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