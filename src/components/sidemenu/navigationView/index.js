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

const styles = StyleSheet.create({
    navBar: {
        height: 40,
        backgroundColor: '#444'
    }
});

const NavigationView = (
    <View style={[commonStyle.flex]}>
        <View style={styles.navBar}>
            <Text>cnode</Text>
        </View>
    </View>
);


export  default NavigationView;