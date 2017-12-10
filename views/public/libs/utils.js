/**
 * Created by hyd on 2017/10/18.
 */
define([],function (){
    var obj = {
        queryString:function (){
            //获取url中的tc_id
            var search = location.search;// ?tc_id=43&name=%27aaa%27&age=20  获取的url中?后面的所有内容

            search = search.substr(1);//从字符串的第1个索引位置开始截取，如果没有第二个参数表示截取到最后

            var searchArr = search.split("&");

            //console.log(searchArr);

            var o ={};
            for(var i=0;i<searchArr.length;i++){
                var temp =	searchArr[i].split('=');
                // console.log(temp)
                o[temp[0]] = temp[1];
                // console.log(o)
                // {tc_id:143,}
                // {tc_id:143,name:'aaa'}
                // {tc_id:143,name:'aaa',age:20}
            }
            return o;
        }
    };
    return obj;
});