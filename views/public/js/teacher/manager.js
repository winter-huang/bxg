define(['jquery','template','utils','datepicker','datepickerzh','form'],function($,template,utils,datepicker){

	//获取id
	var tc_id = utils.queryString().tc_id

		if(tc_id){  //这是编辑的操作
				//这是编辑讲师的信息，发送ajax请求，获取数据，渲染在当前页面上
				$.ajax({
					url:'/api/teacher/edit',
					type:'get',
					data:{tc_id:tc_id},
					success:function(info){
						info.result.title = '讲师编辑';
						info.result.btnText = '更 新';
						var htmlStr = template('tc_edit_tpl',info.result);
						$(".teacher").html(htmlStr);

						//调用 日期插件
						$('input[name=tc_join_date]').datepicker({
							format:'yyyy-mm-dd',
							startDate:'-200d' ,
							language:'zh-CN'
						});
					}
				})

				//更新数据
				ajaxSubmit('/api/teacher/update');
			
		

		/**
		 * 1. 是要用到一个表单插件将表单里面的数据提交给服务器
		 * 2. 提交给服务器的数据有五个，尤其是要注意那个tc_id,要添加一个隐藏域先存起来
		 * 3. 使用ajaxSubmit方法进行提交，此方法的好处是自动获取表单中带有name属性的表单值
		 * 4. 成功之后跳转到列表页面
		 */


		}else { //这是讲师添加的操作
			var obj = {
				title:'讲师添加',
					btnText:'添 加',
					tc_gender:1
			};
				var htmlStr = template('tc_edit_tpl',obj);
				$(".teacher").html(htmlStr);
					//调用 日期插件
						$('input[name=tc_join_date]').datepicker({
							format:'yyyy-mm-dd',
							startDate:'-200d' ,
							language:'zh-CN'
						});
					

				ajaxSubmit('/api/teacher/add');

				// //获取表单中的,提交给服务器
				// $('.teacher').on('click','.btnSave',function(){
				// 		$('form').ajaxSubmit({
				// 			  url:'/api/teacher/add',
				// 			  type:'post',
				// 			  success:function(info){
				// 			  	if(info.code == 200) {
				// 			  		alert('添加成功...');
				// 			  		window.location.href= '/teacher/list';
				// 			  	}
				// 			  }
				// 		})
				// 		return false;
				// })
		}

		/**
		 * 1. 因为当前的模块有两个功能，一个是编辑，一个是添加，所以需要判断
		 *
		 * 2. 在进行添加的时候,由于之前编辑操作将manager.html中的页面布局放在模板里面了，因此在进行添加操作的时候，也需要渲染模板
		 *
		 * 3. 在进行提交的时候，添加操作是不需要id的，因此要将隐藏域给判断一下
		 *
		 * 4. 提交的操作除了url不一样之外，其它几乎一模一样，需要提取成函数
		 */
		
		 //封装了一个利用表单插件提交数据的函数
		function ajaxSubmit(url){
					//当前编辑资料的更新操作
				$('.teacher').on('click','.btnSave',function(){
					// form表单插件，会自动的收集表单当中带有name属性的表单值,生成统一的数据发送给服务器，就是不需要我们自己去挨个的获取表单数据了
					$('form').ajaxSubmit({
						url:url,
						type:'post',
						success:function(){
								alert('操作成功...');
								window.location.href = '/teacher/list';
						}
					})
					return false; // 阻止浏览器的默认刷新行为
			})
		}
})