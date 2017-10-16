import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ListView,
    Image,
    TextInput,
} from 'react-native';
import NetUtil from './Util/NetUtil'
import Toolbar from './view/toolbar'
import ItemView from './view/LotusItem'
import {PullList} from 'react-native-pull'
const {width, height} = Dimensions.get('window');
var that;
export default class setup extends Component {
    constructor(props){
        super(props);
        this.state={
            dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2}),
            codeKey:'',
            captchaData:'',
        }
    }
    componentWillMount(){
        that=this;
        NetUtil.getVerificationCode().then((response)=>{
            that.setState({
                codeKey:response.data.codeKey,
                captchaData:response.data.captchaData,
            });
            console.log(that.state.captchaData);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Toolbar/>
                <Image source={{uri:this.state.captchaData}} style={{height:150,width:width}}>
                </Image>
                <TextInput onSubmitEditing={(event)=>{
                    console.log(event.nativeEvent.text);
                    NetUtil.login(event.nativeEvent.text,'miaorenjie','xiyou3g',this.state.codeKey)
                        .then((response)=>{
                            console.log(response);
                        })
                }}>

                </TextInput>
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