/**
 * Created by hyd on 2017/10/18.
 */
define(['jquery','utils','template','bootstrap','form'],function ($,utils,template){
    var id = utils.queryString().cs_id;
    $.ajax({
        url:'/api/course/lesson',
        type:'get',
        data:{cs_id:id},
        success:function (info){
            if(info.code == 200){
                //console.log(info);
                var htmlStr = template('cs_lesson_tpl',info.result);
                $('.course-add').html(htmlStr);
            }

        }
    });

    //点击添加
    $('.course-add').on('click','.btn-add',function (){
        var htmlStr = template('cs_lesson_modal',{
            title:'课程添加',
            btnText:'添加',
            actionUrl:'/api/course/chapter/add'
        });
        $('#lesson').html(htmlStr);
        $('#lesson').modal();
    });

    //点击编辑弹出模态框
    $('.course-add').on('click','.btn-edit',function (){
        var ct_id = $(this).parent().attr('data-id');
        $.ajax({
            url:'/api/course/chapter/edit',
            type:'get',
            data:{ct_id:ct_id},
            success:function (info){
                if(info.code == 200){
                    //console.log(info);
                    info.result.title = '课程编辑';
                    info.result.btnText = '保 存';
                    info.result.actionUrl = '/api/course/chapter/modify';
                    var htmlStr = template('cs_lesson_modal',info.result);
                    $('#lesson').html(htmlStr);
                    $('#lesson').modal();
                }
            }
        })
    });

    //点击保存
    $('#lesson').on('click','.btn-save',function (){
        var ct_is_free = +$('input[type=checkbox]').prop('checked');
        $('form').ajaxSubmit({
            //在form的action传送地址，这里就不需要url
            //url:'/api/course/chapter/modify',
            type:'post',
            data:{
                ct_cs_id:id,
                ct_is_free:ct_is_free
            },
            success:function (info){
                if(info.code == 200){
                    console.log(info);
                    $('#lesson').modal('hide');
                    alert('操作成功');
                    window.location.href = '/course/lesson?cs_id='+id;
                }
            }
        });
    });




});