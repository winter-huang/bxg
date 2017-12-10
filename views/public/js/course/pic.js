/**
 * Created by hyd on 2017/10/18.
 */
define(['jquery', 'template', 'utils','jcrop','uploadify'], function ($, template, utils,Jcrop,uploadify) {
    var id = utils.queryString().cs_id;
    var jcrop_obj;
    $.ajax({
        url: '/api/course/picture',
        type: 'get',
        data: {cs_id: id},
        success: function (info) {
            if (info.code == 200) {
                console.log(info);
                var htmlStr = template('cs_pic_tpl',info.result);
                $('.course-add').html(htmlStr);

                $('#upload').uploadify({
                    swf:'/views/public/assets/uploadify/uploadify.swf',
                    uploader:'/api/uploader/cover',
                    fileObjName:'cs_cover_original',
                    formData:{cs_id:id},
                    width:120,
                    height:'auto',
                    'buttonText':'请选择图片上传',
                    'itemTemplate':'<span></span>',
                    buttonClass:'btn btn-success btn-sm',
                    onUploadSuccess:function (file,data,response){
                        console.log(data);
                        $('.preview img').attr('src',JSON.parse(data).result.path);
                        window.location.href = '/course/pic?cs_id='+id;
                        $('#btnCrop').prop('disabled',false);
                    }

                });
                $('#btnCrop').on('click',function (){
                    if(!$(this).hasClass('btnCrop')){
                        $(this).addClass('btnCrop').html('保存图片');
                        $('.preview img').Jcrop({
                            setSelect:[20,30,200,200],
                            aspectRatio:2
                        },function (){
                            jcrop_obj = this;
                            this.initComponent('Thumbnailer',{width:260,height:130});
                            $('.thumb').append($('.jcrop-thumb'));
                        });
                    }else {
                        var result = jcrop_obj.getSelection();
                        $.ajax({
                            url:'/api/course/update/picture',
                            type:'post',
                            data:{
                                cs_id:id,
                                x:result.x,
                                y:result.y,
                                w:result.w,
                                h:result.h
                            },
                            success:function (info){
                                if(info.code == 200){
                                    // console.log(info);
                                    window.location.href = '/course/lesson?cs_id='+info.result.cs_id;
                                }

                            }
                        })
                    }

                });

            }

        }
    })
});