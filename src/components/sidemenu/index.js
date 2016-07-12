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
    TouchableOpacity,
    ScrollView,
    RefreshControl,
    Alert,
    ToastAndroid,
    TouchableNativeFeedback
} from 'react-native';
import navigationView from './navigationView';
import CommonStyle from '../../style/index.style';

const More = require('../../images/more.png');
const Edit = require('../../images/edit.png');
class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false
        };
    }

    _onDrawer() {
        this.refs.drawer.openDrawer();
    }

    _onRefresh() {
        ToastAndroid.show('已经是最新信息', ToastAndroid.LONG);
    }

    render() {
        return (
            <DrawerLayoutAndroid
                ref="drawer"
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                drawerWidth={280}
                keyboardDismissMode="on-drag"
                renderNavigationView={()=>navigationView}>
                <View style={{flex:1}}>
                    <View>
                        <View style={[styles.navBar]}>
                            <TouchableOpacity
                                onPress={this._onDrawer.bind(this)}>
                                <Image source={More} style={styles.image}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.text}>最新</Text>
                            </TouchableOpacity>
                            <View style={styles.editImage}>
                                <TouchableOpacity>
                                    <Image source={Edit} style={styles.image}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <ScrollView
                        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh.bind(this)}
            tintColor="#ff0000"
            title="下拉刷新..."
            titleColor="#666"
            colors={['#009100']}
            progressBackgroundColor="#fff"/>}>
                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#e8e8e8',false)}>
                            <View style={[styles.cell]}>
                                <Text style={[styles.topic_color]}>中国最大的javascript开发者大会JSConf China...</Text>
                                <View style={[CommonStyle.flex,CommonStyle.row,{marginTop:5}]}>
                                    <Text style={[styles.put_top]}>最新</Text>
                                    <Text style={styles.author}>Qoder</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>


                    </ScrollView>
                </View>
            </DrawerLayoutAndroid>
        )
    }
}

const styles = StyleSheet.create({
    navBar: {
        flex: 1,
        height: 50,
        backgroundColor: '#444',
        paddingLeft: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    image: {
        width: 32,
        height: 32
    },
    editImage: {
        flex: 1,
        marginRight: 15,
        alignItems: 'flex-end'
    },
    text: {
        color: '#FFF',
        fontSize: 16,
        marginLeft: 20,
        fontWeight: 'bold'

    },
    cell: {
        padding: 10,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0'
    },
    topic_color: {
        color: '#333',
        fontSize: 16
    },
    put_top: {
        backgroundColor: '#80bd01',
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 2,
        paddingBottom: 2,
        fontSize: 12,
        width: 40,
        borderRadius: 5,
        textAlign: 'center',
        color: '#FFF'
    },
    topiclist_tab: {
        backgroundColor: "#999",
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 2,
        paddingBottom: 2,
        fontSize: 12,
        width: 40,
        borderRadius: 5,
        textAlign: 'center',
        color: '#666'
    },
    author: {
        marginLeft: 5,
        fontSize: 14,
        color: '#666'
    }
});

export  default SideMenu;