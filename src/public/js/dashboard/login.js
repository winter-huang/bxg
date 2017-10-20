/**
 * Created by hyd on 2017/10/20.
 */
define(['jquery','form','cookie'],function ($){
    $('.btn-lg').on('click',function (){
        $('form').ajaxSubmit({
            url:'/api/login',
            type:'post',
            success:function (info){
                if(info.code == 200){
                    //console.log(info);
                    alert('登录成功');
                    $.cookie('userInfo',JSON.stringify(info.result));
                    window.location.href = '/index';
                }
            },
            error:function (){
                alert('登录失败');
            }
        });
        return false;
    });
});