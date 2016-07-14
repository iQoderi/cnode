/**
 * Created by qoder on 16-7-14.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableNativeFeedback,
    Switch
} from 'react-native';

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    wrapper: {
        paddingTop: 10
    },
    item: {
        height: 45,
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e8e8e8',
        backgroundColor: "#FFF",
        flexDirection: "row",
        alignItems: 'center'
    },
    borderTop: {
        borderTopWidth: 1,
        borderTopColor: '#e8e8e8'
    },
    itemFont: {
        fontSize: 16
    },
    titleText: {
        fontSize: 14,
        color: '#666',
    },
    title: {
        paddingLeft: 20,
        height: 35,
        flexDirection: "row",
        alignItems: 'center'
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    rightSpan: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'flex-end'
    },
    smallFont: {
        color: '#666',
        fontSize: 12
    }
});



const Setting = (
    <View style={[styles.flex,styles.wrapper]}>
        <View style={[styles.item,styles.borderTop]}>
            <Text style={styles.itemFont}>小尾巴</Text>
            <View style={styles.rightSpan}>
                <Switch/>
            </View>
        </View>
        <View style={[styles.item]}>
            <Text style={styles.itemFont}>省流量</Text>
            <View style={styles.rightSpan}>
                <Switch/>
            </View>
        </View>
        <View style={styles.title}>
            <Text style={styles.titleText}>关于</Text>
        </View>
        <View style={[styles.item,styles.borderTop]}>
            <Text style={styles.itemFont}>当前版本</Text>
            <View style={styles.rightSpan}>
                <Text style={[styles.smallFont]}>1.0.0</Text>
            </View>
        </View>
        <View style={[styles.item]}>
            <Text style={styles.itemFont}>意见反馈</Text>
            <View style={styles.rightSpan}>
                <Text style={[styles.smallFont,styles.right]}>Email</Text>
            </View>
        </View>
        <View style={[styles.item]}>
            <Text style={styles.itemFont}>关于作者</Text>
        </View>
        <View style={[styles.item]}>
            <Text style={styles.itemFont}>关于CNode社区</Text>
        </View>
        <View style={styles.center}>
            <Text style={styles.smallFont}>&copy;2016 Qoder</Text>
        </View>

    </View>
);


export  default Setting;

