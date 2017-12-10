/**
 * Created by hyd on 2017/10/19.
 */
define(['jquery','utils','template'],function ($,utils,template){
    var id = utils.queryString().cg_id;
    console.log(id);
    $.ajax({
        url:'/api/category/edit',
        type:'get',
        data:{cg_id:id},
        success:function (info){
            if(info.code == 200){
                console.log(info);
                var htmlStr = template('cg_add_tpl',info.result);
                $('.category-add').html(htmlStr);
            }

        }
    });

    $('.category-add').on('click','.btn-save',function (){

    });
});