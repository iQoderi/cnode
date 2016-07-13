/**
 *
 * Created by qoder on 16-7-13.
 */

import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
const navigationBarRouteMapper = {
    LeftButton(route, navigator, index, navState){

    },
    RightButton(route, navigator, index, navState){

    },
    Title(route, navigator, index, navState){
        return (
            <View>
                <Text>最新</Text>
            </View>
        )
    }
};


export  default navigationBarRouteMapper;