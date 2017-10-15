import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ListView,
} from 'react-native';

import Toolbar from './view/toolbar'
import ItemView from './view/LotusItem'
import {PullList} from 'react-native-pull'
const {width, height} = Dimensions.get('window');
export default class setup extends Component {
    constructor(props){
        super(props);
        this.state={
            dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2}),
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Toolbar/>

                <ItemView name="qqq" title="eee">

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