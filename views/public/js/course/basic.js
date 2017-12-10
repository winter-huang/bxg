/**
 * Created by hyd on 2017/10/18.
 */
define(['jquery','template','utils','ckeditor','form'],function ($,template,utils,CKEDITOR,){
    //获取id
    var id = utils.queryString().cs_id;
    //console.log(id);
    $.ajax({
        url:'/api/course/basic',
        type:'get',
        data:{cs_id:id},
        success:function (info){
            if(info.code == 200){
                console.log(info);
                var htmlStr = template('cs_basic_tpl',info.result);
                $('.course-add').html(htmlStr);

                CKEDITOR.replace('cs_brief');
            }
        }
    });

    $('.course-add').on('click','.btn-save',function (){
        $('#cs_brief').val(CKEDITOR.instances.cs_brief.getData());
        $('form').ajaxSubmit({
            url:'/api/course/update/basic',
            type:'post',
            success:function (info){
                if(info.code == 200){
                    console.log(info);
                    alert('操作成功');
                    window.location.href = '/course/pic?cs_id=' + info.result.cs_id;
                }

            }
        });
        return false;
    });

});
