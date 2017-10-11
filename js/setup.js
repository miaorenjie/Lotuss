import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';

import Toolbar from './view/toolbar'
import ItemView from './view/LotusItem'
const {width, height} = Dimensions.get('window');
export default class setup extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Toolbar/>

                <ItemView>

                </ItemView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:width,
        height:height,
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