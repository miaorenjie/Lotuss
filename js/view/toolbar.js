import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Dimensions,
    View,
    StatusBar
} from 'react-native';
const {width, height} = Dimensions.get('window');
export default class toolbar extends Component{
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'black'}>
                </StatusBar>

                <View style={styles.backButton}>
                </View>

                <View style={{width:1,height:30,marginTop:10,marginBottom:10,backgroundColor:'#000000'}}>
                </View>

                <Text style={{fontSize:16,color:'#ffffff',marginTop:18,marginLeft:15}}>审核</Text>
            </View>




        )
    }
}
const styles = StyleSheet.create({
    container: {
        height:50,
        width:width,
        flexDirection:'row',
        backgroundColor: '#323232',
    },
    backButton:{
        height:50,
        width:50,
        //backgroundColor:'#ffffff'
    }
});
