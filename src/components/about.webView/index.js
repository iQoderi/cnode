/**
 * Created by qoder on 16-7-14.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    WebView,
    TouchableOpacity,
    StyleSheet
}from 'react-native';

const close = require('../../images/close.png');
const more = require('../../images/more-2.png');

class AboutWebView extends Component {
    _close() {
        const {navigator}=this.props;
        navigator.pop();
    }

    render() {
        const {name, content}=this.props;
        return (
            <View style={styles.flex}>
                <View style={styles.navBar}>
                    <TouchableOpacity
                        onPress={this._close.bind(this)}>
                        <Image source={close} style={[styles.image]}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>{name}</Text>
                    <View style={styles.moreIcon}>
                        <TouchableOpacity>
                            <Image source={more} style={[styles.image]}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <WebView
                    savaScriptEnabled={true}
                    source={{uri:content}}
                    decelerationRate="normal"
                    domStorageEnabled={true}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    navBar: {
        height: 50,
        backgroundColor: '#444',
        paddingLeft: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    image: {
        width: 30,
        height: 30
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
        marginLeft: 20
    },
    moreIcon: {
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: 20
    }
});


export  default AboutWebView;