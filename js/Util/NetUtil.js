import React,{Component} from 'react';
import SHA256 from 'crypto-js/sha256';

export default class NetUtil{
    static HOST_URL='https://my.xiyoumobile.com';
    static LOGIN_CODE_URL='/api/login/code';

    static signature(){
        var date=new Date();
        var dateStr=date.getTime();
        console.log("时间"+dateStr);
        var randomStr='asdqwe';
        var token=SHA256('timestamp='+dateStr+'key='+randomStr);
        var map={
            timestamp:dateStr,
            key:randomStr,
            token:token,
        };

        return map;
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
