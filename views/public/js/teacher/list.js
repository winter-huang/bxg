define(['jquery','template','bootstrap'],function($,template,bt){
	
	//向服务器发送请求，获取数据，渲染模板
	$.ajax({
		url:'/api/teacher',
		type:'get',
		success:function(info){
			if(info.code == 200){
				var htmlStr = template('tc_list_tpl',info);
				$('#tc_list_tBody').html(htmlStr);
			}
		}
	})


	// 查看某一个单独的讲师信息
	// $(".check-info").on('click',function(){
	// 	  alert(123); 事件不支持给动态创建出来的元素注册,模板里面的内容就相当于是动态创建出来的元素，因此需要给父级元素注册事件，通过当前标签来触发，也就是通过委托的方式来实现事件的触发
	// })
	$("#tc_list_tBody").on('click','a.check-info',function(){
			// alert(123); // 验证成功
			// 根据id向服务器发送请求，获取数据，渲染到模态框上
			var id = $(this).parent().attr('data-id');//获取到存在父元素上的id
			$.ajax({
				url:'/api/teacher/view',
				type:'get',
				data:{tc_id:id},
				success:function(info){
					if(info.code == 200){
						//要把数据渲染到模态框上
						var htmlStr = template('tc_model_tpl',info.result);
						$("#teacherModal tbody").html(htmlStr);

						//调用模板函数，显示出模态框 
						$("#teacherModal").modal();
					}
				}
			})
	})


	//讲师的启用和注销
	$("#tc_list_tBody").on('click','a.btnHandle',function(){

			var id = $(this).parent().attr('data-id');
			var status = $(this).attr('data-status');
			var _this = $(this);//先将当前按钮对象存到一个变量当中
			$.ajax({
				url:'/api/teacher/handle',
				type:'post',
				data:{
					tc_id:id,
					tc_status:status
				},
				success:function(info){
					if(info.code == 200){
						if(info.result.tc_status ==1){ //返回的状态是1,说明要让当前的这个用户注销掉，显示的文字内容应该是启用
							_this.text('启 用');

						}else {
							_this.text('注 销');
						}
						//还要更新当前的状态码
						_this.attr('data-status',info.result.tc_status);
					}
				}
			})
	})
})