import React,{Component} from 'react';
import SHA256 from 'crypto-js/sha256';
import JSEncrypt from './JSEncrypt'
export default class NetUtil{
    static HOST_URL='https://my.xiyoumobile.com';
    static LOGIN_CODE_URL='/api/login/code';
    static LOGIN_SUBMIT_URL='/api/login/submit';
    static PUBLIC_KEY= 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDnT//1WweiluU1NZvjV3W3yFh2' +
        'HaLfs5VosT5n5eIyhb1wI7PYpNVb5jJAnVn9UfZSc6Jq/hHByxSrBb2uIm2yeONT' +
        'FHHcfX3boneL8lEolOpoh/5FVWX9Wmsj/8MMene7qfpPDKEAqSe6n9zVqxFMoGER' +
        '1pkxy/9sl1G+uYLX9QIDAQAB'

    static signature(){
        var date=new Date();
        var dateStr=date.getTime();
        console.log("时间"+dateStr);
        var randomStr='qq';
        var token=SHA256('timestamp='+dateStr+'key='+randomStr+'mzSx42jMB6sXrH6P6EcZDgZr');
        var map={
            timestamp:dateStr,
            key:randomStr,
            token:token,
        };
        return map;
    }
    static login(verificationCode,userName,passWord,codeKey){
        var encrypt=new JSEncrypt();
        encrypt.setPublicKey(NetUtil.PUBLIC_KEY);
        var enData=new Object();
        for(var key in passWord)
            enData[key]=encrypt.encrypt(passWord[key]);
        var map=NetUtil.signature();
        return(
            NetUtil.post(NetUtil.HOST_URL+NetUtil.LOGIN_SUBMIT_URL,
                {'username':userName,
                    'password':enData,
                    'code':verificationCode,
                    'codeKey':codeKey,
                    'ts':map.timestamp,
                    'key':map.key,
                    'token':map.token})
        )
    }
    static getVerificationCode()
    {
        var map=NetUtil.signature();

        return NetUtil.get(NetUtil.HOST_URL+NetUtil.LOGIN_CODE_URL,null,{'ts':map.timestamp,'key':map.key,'token':map.token});

    }
    static get(url, params, headers){
        if (params) {

            let paramsArray = [];

            // 获取 params 内所有的 key
            let paramsKeyArray = Object.keys(params);
            // 通过 forEach 方法拿到数组中每个元素,将元素与参数的值进行拼接处理,并且放入 paramsArray 中
            paramsKeyArray.forEach(key => paramsArray.push(key + '=' + params[key]));

            // 网址拼接
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&');
            }else {
                url += paramsArray.join('&');
            }
        }

        return new Promise(function (resolve, reject) {
            fetch(url, {
                method:'GET',
                headers:headers
            })
            .then((response) => response.json())
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject({status:-1})
            })
            .done();
        })
    }

    static post(url, params, headers)
    {
        if (params) {
        // 初始化FormData
            var formData = new FormData();

            // 获取 params 内所有的 key
            let paramsKeyArray = Object.keys(params);
            // 通过 forEach 方法拿到数组中每个元素,将元素与参数的值进行拼接处理,并且放入 paramsArray 中
            paramsKeyArray.forEach(key => formData.append(key, params[key]));
        }

        return new Promise(function (resolve, reject) {
            fetch(url, {
                method:'POST',
                headers:headers,
                body:formData,
            })
            .then((response) => response.json())
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject({status:-1})
            })
            .done();
        })
    }
}
