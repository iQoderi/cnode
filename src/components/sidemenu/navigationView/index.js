/**
 * Created by qoder on 16-7-11.
 */
import React, {Component} from 'react';
import {
    DrawerLayoutAndroid,
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import commonStyle from '../../../style/index.style';
import MenuItem from '../MenuItem';

const cLogo = require('../../../images/cnodelogo.png');
const github = require('../../../images/github.png');

const styles = StyleSheet.create({
    navBar: {
        height: 50,
        backgroundColor: '#444'
    },
    bottomItem: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: "row"
    },
    bottomItemText: {
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        height: 40,
        alignItems: 'center',
        flex: 1,
        paddingLeft: 20,
        flexDirection: 'row'
    },
    image: {
        width: 35,
        height: 35,
        marginRight: 20
    }
});

const datas = [
    {
        name: "最新",
        tab: 'new'
    },
    {
        name: '分享',
        tab: 'share'
    },
    {
        name: '问答',
        tab: "ask"
    },
    {
        name: '招聘',
        tab: 'job'

    }
];
const MenuItems = datas.map((data)=> {
    return <MenuItem name={data.name} tab={data.tab} press={()=>{alert(1)}}/>
});

const NavigationView = (
    <View style={[commonStyle.flex,{backgroundColor:'#f5f5f5'}]}>
        <View style={styles.navBar}>
            <Image source={cLogo} style={{width:150}}/>
        </View>
        <View>
            <MenuItem name="登陆" tab="login"/>
            <MenuItem name="板块" style={{height: 40, backgroundColor: '#e8e8e8'}}/>
            {MenuItems}
            <MenuItem name="其他" style={{height: 40, backgroundColor: '#e8e8e8'}}/>
            <MenuItem name="设置" tab="setting" press={()=>{alert(1)}}/>
        </View>
        <View style={styles.bottomItem}>
            <View style={styles.bottomItemText}>
                <Image source={github} style={styles.image}/>
                <Text>github.com/iQoderi</Text>
            </View>
        </View>
    </View>
);


export  default NavigationView;