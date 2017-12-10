define(['jquery','form'],function($){

		// 获取页面中的内容，提交给服务器
		$('#btnCreate').on('click',function(){
			$('form').ajaxSubmit({
				url:'/api/course/create',
				type:'post',
				success:function(info){
					if(info.code==200){
						alert('添加课程成功...');
						window.location.href='/course/basic?cs_id='+info.result.cs_id;
					}
				}
			});
			return false;
		})
});