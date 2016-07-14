/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import  {Provider} from 'react-redux';
import configStore from './src/store';
import RouterApp from './src/components/navigator';
import Storage from 'react-native-storage';

let storage = new Storage({
    size: 1000,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
    sync: {}
});

global.storage = storage;

const store = configStore();


class cnode extends Component {
    render() {
        return (
            <Provider store={store}>
                <RouterApp/>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('cnode', () => cnode);
