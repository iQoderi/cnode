/**
 * Created by qoder on 16-7-11.
 */
import React, {Component} from 'react';
import {
    DrawerLayoutAndroid,
    View,
    Text,
    Navigator,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import navigationView from './navigationView';

const More=require('../../images/more.png');
const Edit=require('../../images/edit.png');
class SideMenu extends Component {
    render() {
        return (
            <DrawerLayoutAndroid
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                drawerWidth={280}
                renderNavigationView={()=>navigationView}>
                <View style={{flex:1}}>
                    <View>
                        <View style={[styles.navBar]}>
                            <TouchableOpacity>
                                <Image source={More} style={styles.image}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.text}>最新</Text>
                            </TouchableOpacity>
                            <View style={styles.editImage}>
                            <TouchableOpacity >
                                <Image source={Edit} style={styles.image}/>
                            </TouchableOpacity>
                                </View>
                        </View>
                    </View>
                </View>
            </DrawerLayoutAndroid>
        )
    }
}

const styles = StyleSheet.create({
    navBar: {
        flex:1,
        height: 50,
        backgroundColor: '#444',
        paddingLeft:10,
        alignItems:'center',
        flexDirection:'row'
    },
    image:{
        width:32,
        height:32
    },
    editImage:{
        flex:1,
        marginRight:15,
        alignItems:'flex-end'
    },
    text:{
        color:'#FFF',
        fontSize:16,
        marginLeft:20,
        fontWeight:'bold'

    }
});

export  default SideMenu;