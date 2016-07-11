/**
 * Created by qoder on 16-7-11.
 */
import React, {Component} from 'react';
import {
    DrawerLayoutAndroid,
    View,
    Text
} from 'react-native';

import navigationView from './navigationView';

class SideMenu extends Component {
    render() {
        return (
            <DrawerLayoutAndroid
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                drawerWidth={300}
                renderNavigationView={()=>navigationView}>

            </DrawerLayoutAndroid>
        )
    }
}

export  default SideMenu;