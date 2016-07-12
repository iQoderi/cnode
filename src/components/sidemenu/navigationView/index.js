/**
 * Created by qoder on 16-7-11.
 */
import React, {Component} from 'react';
import {
    DrawerLayoutAndroid,
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import commonStyle from '../../../style/index.style';
import MenuItem from '../MenuItem';

const cLogo = require('../../../images/cnodelogo.png');
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
        justifyContent:'center',
        flex:1,
        paddingLeft:20
    }
});

const datas = [
    {
        name: "登陆",
        tab: 'login'
    },
    {
        name: "板块",
        tab: 'modules',
        style: {
            height: 40,
            backgroundColor: '#f2f2f2'
        }
    },
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

    },
    {
        name: '其他',
        tab: 'other',
        style: {
            height: 40,
            backgroundColor: '#f2f2f2'
        }
    },
    {
        name: '设置',
        tab: 'setting'
    }
];
const MenuItems = datas.map((data)=> {
    if (data.style) {
        return <MenuItem name={data.name} tab={data.tab} style={data.style}/>
    } else {
        return <MenuItem name={data.name} tab={data.tab}/>
    }
});

const NavigationView = (
    <View style={[commonStyle.flex,{backgroundColor:'#f5f5f5'}]}>
        <View style={styles.navBar}>
            <Image source={cLogo} style={{width:150}}/>
        </View>
        <View>
            {MenuItems}
        </View>
        <View style={styles.bottomItem}>
            <View style={styles.bottomItemText}>
                <Text>github.com/iQoderi</Text>
            </View>
        </View>
    </View>
);


export  default NavigationView;