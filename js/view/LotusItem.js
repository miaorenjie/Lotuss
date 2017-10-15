import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    Text,
    Image,
} from 'react-native';
import NetUtil from '../Util/NetUtil';
const {width, height} = Dimensions.get('window');

export default class LotusItem extends Component {

    // static propTypes = {
    //     image:PropTypes.string,
    //     name:PropTypes.string,
    //     title:PropTypes.string,
    //     time:PropTypes.string,
    //     headPortrait:PropTypes.string,
    //     group:PropTypes.string,
    // };

    constructor(props) {
        super(props);
    }
    render(){

        var map=NetUtil.signature();
        console.log(map.timestamp+'111');
        NetUtil.get(NetUtil.HOST_URL+NetUtil.LOGIN_CODE_URL,null,{'ts':map.timestamp,'key':map.key,'token':map.token})
            .then((responseData)=>{
                        console.log(responseData);
                    });

        // NetUtil.get('https://guangdiu.com/api/getlist.php',{"count":10})
        //     .then((responseData)=>{
        //         console.log(responseData);
        //     });
        console.log(NetUtil.HOST_URL+NetUtil.LOGIN_CODE_URL);
        return(
            <View style={styles.container}>
                <View style={styles.textArea}>
                    <View style={styles.topArea}>
                        <Image style={styles.headImage} source={{uri:this.props.headPortrait}}>

                        </Image>
                        <View style={styles.infoArea}>
                            <Text style={{marginTop:15,fontSize:9,textColor:'red',paddingTop:3}}>
                                {this.props.name}
                            </Text>
                            <View style={{marginTop:7,height:13,width:150,flexDirection:'row'}}>
                                <View style={{width:13,height:13,borderRadius:360,backgroundColor:'green'}}>

                                </View>
                                <Text style={{marginLeft:5,paddingTop:3,fontSize:8,color:'#b0b0b0'}}>
                                    {this.props.time}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottomArea}>
                        <Text style={{width:183,height:21,fontSize:9,color:'#323232'}}>
                            {this.props.title}
                        </Text>
                    </View>
                </View>
                <View style={styles.groupArea}>

                </View>
                <View style={styles.previewImageArea}>

                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
        container: {
            height: 100,
            width: width,
            flexDirection: 'row',
            backgroundColor:'#111111'
        },
        textArea: {
            width: 188,
            height: 100,
            marginLeft: 15,
            backgroundColor:'blue'
        },
        groupArea:{
            marginLeft:13,
            height:16,
            width:16,
            marginTop:22,
            backgroundColor:'red'
        },
        previewImageArea:{
            marginLeft:13,
            marginTop:15,
            width:100,
            height:70,
            backgroundColor:'orange'
        },
        headImage: {
            marginTop: 15,
            width: 33,
            height: 33,
            borderRadius: 360,
            backgroundColor:'blue'
        },
        topArea: {
            width: 188,
            backgroundColor:'red',
            height: 48,
            flexDirection: 'row',
        },
        infoArea:{
            marginLeft:5,
            height:48,
            width:150,
            backgroundColor:'blue',
        },
        bottomArea: {
            width:188,
            marginLeft:5,
            backgroundColor:'green',
            height:52,
        },
    }

);