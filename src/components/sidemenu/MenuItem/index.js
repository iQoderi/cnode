/**
 * Created by qoder on 16-7-12.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native';


class MenuItem extends Component {
    render() {
        const {name}=this.props;
        return (
            <TouchableOpacity
                onPress={this.props.press}>
                <View style={[styles.item,this.props.style]}>
                    <Text style={[styles.itemText]}>{name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    item: {
        height: 50,
        paddingLeft: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        justifyContent: 'center'
    },
    itemText: {
        color: '#666'
    }
});

export  default MenuItem;