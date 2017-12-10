define(['jquery','template','uploadify','datepicker','datepickerzh','region','ckeditor','form'],function($,template,uploadify,datepicker,ckzh,region,CKEDITOR){

	//跳转到当前页面之后，要执行代码,向服务器发送请求，获取数据，渲染页面
	$.ajax({
		url:'/api/teacher/profile',
		type:'get',
		success:function(info){
			if(info.code == 200){
				var htmlStr = template('tc_settings_tpl',info.result);
				$('.settings').html(htmlStr);

				//1.图片上传插件的使用
				$('#upfile').uploadify({
					'swf':'/views/public/assets/uploadify/uploadify.swf',
					'uploader':'/api/uploader/avatar',
					'width':120, //设置插件的宽度
					'height':120, // 设置插件的高度
					'buttonText':'',  //设置插件的文字内容
					'fileObjName':'tc_avatar', // 提交给服务器的属性名称
					'itemTemplate':'<span></span>',//不想看到上传成功之后显示状态
					onUploadSuccess:function(file,data,response){
							// console.log(file,data,response);
							// 渲染头像
							// var res = JSON.parse(data);
							// console.log(res)
							// $('.preview img').attr('src',res.result.path);
							//图片上传成功之后，根据服务器返回来的图片路径，渲染在当前前的页面上
							$('.preview img').attr('src',JSON.parse(data).result.path);
					}
				});

				//2.日期插件的使用
				$('input[name=tc_join_date],input[name=tc_birthday]').datepicker({
					format:'yyyy-mm-dd',
					language:'zh-CN'
				});

				//3.三级联动插件的使用
				$('#region').region({
						url:'/views/public/assets/jquery-region/region.json'//一定要把此文件引入进来，这样在调用 region方法的时候，才能够根据服务器返回来的数据，来确定省市区的显示

						/**
						 * 1. 在配置文件里面引入信息，此插件是支持模块化的
						 * 2. 在使用此插件的模块里面，进行调用，还要添加一个url的json文件，是要根据文件渲染对应的名称 ，注意文件名称  
						 * 3. 在静态页面的模板当中，添加对应的id,id的值都是缩写的,例如 p c d ,还要添加一个自定义的属性id，来接收返回来的数据
						 * 
						 */
				});

				//4. 富文本编辑器的使用
				CKEDITOR.replace('tc_introduce');
			}
		}
	})


	//要给按钮注册事件，进行更新
	// form表单获取页面中的所有的数据，提交给服务器，进行更新
	$('.settings').on('click','.btnSave',function(){
				//获取富文本编辑器里面的数据，更新一下富文本编辑器
			$("#tc_introduce").val(CKEDITOR.instances.tc_introduce.getData());
			$('form').ajaxSubmit({
					url:'/api/teacher/modify',
					type:'post',
					success:function(info){
						if(info.code == 200){
							alert('更新成功...');
							window.location.href='/settings';
						}
					}
			})
			return false;

			/**
			 * 1. 表单当中，所有需要提交给服务器的数据，都需要添加name属性
			 * 2. 在提交的数据当中，还要有tc_id，在表单当中要添加一个隐藏域
			 * 3. 富文本编辑器，在提交数据的时候，一定要加一行代码，更新一下获取到的值
			 */
	})
})