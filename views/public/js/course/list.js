/**
 * Created by hyd on 2017/10/19.
 */
define(['jquery','template'],function ($,template){
    $.ajax({
        url:'/api/course',
        type:'get',
        success:function (info){
            if(info.code == 200){
                //console.log(info);
                for(var i=0;i<info.result.length;i++){
                    info.result[i].student = Math.ceil(Math.random()*200+50);
                    info.result[i].view = Math.ceil(Math.random()*2000+500);
                    info.result[i].hour = Math.ceil(Math.random()*4+7);
                }
                var htmlStr = template('cs_list_tpl',info);
                $('.courses').html(htmlStr);
            }

        }
    })
});