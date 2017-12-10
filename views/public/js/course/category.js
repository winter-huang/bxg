/**
 * Created by hyd on 2017/10/19.
 */
define(['jquery','template'],function ($,template){
    $.ajax({
        url:'/api/category',
        type:'get',
        success:function (info){
            if(info.code == 200){
                var htmlStr = template('cg_list_tpl',info);
                $('.panel-default').html(htmlStr);
            }

        }
    });

    // $('.panel-default').on('click','.btn-info',function (){
    //     var id = $(this).parent().attr('data-id');
    //     $.ajax({
    //         url:'/api/category/edit',
    //         type:'get',
    //         data:{cg_id:id},
    //         success:function (info){
    //             if(info.code == 200){
    //                 console.log(info);
    //                 window.location.href = '/course/category_add';
    //                 var htmlStr = template('cg_add_tpl');
    //                 $('.category-add').html(htmlStr);
    //             }
    //
    //         }
    //     })
    // });

});