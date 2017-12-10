<?php 

	// include  '/views/dashboard/index.html';  //引入其它文件到当前的php文件内


	// include '/views/user/user_list.html';

	// 现在这个文件就相当于是一个入口 导航文件，加载哪个文件，在浏览器里面输入bxg.com就可以访问谁
	// 即使是html页面中有混合的php代码 ，仍然是可以被解析出来或是被执行的
	// 这就是设置路由导航的意义 


	// 无论我输入bxg.com   bxg.com/index.php  bxg.com/index.php/views/dashboard    bxg.com/index.php/views/dashboard/index.html
	// 都能够 访问的到主页面index.html

	//实现多种访问

	//	echo   输出简单的数据值  string    数字  
	// print_r   输出复杂数据类型的数据和简单的数据   数组   对象   
	// var_dump   输出复杂数据的详细信息

		//echo  $_SERVER ;//获取发送过来的一些服务器的信息

		// print_r($_SERVER)

		 //var_dump($_SERVER);  PATH_INFO 可以用来获取用户输入的URL中的index.php后面的一切信息
		
		// echo $_SERVER['PATH_INFO'];

		// include $_SERVER['PATH_INFO'] .'/'. 'index.html';  //http://bxg.com/index.php/views/dashboard/index.html  
			$path = '';
		 if(array_key_exists('PATH_INFO',$_SERVER))	{ // array_key_exits()是用来判断数组中是否包含某个属性

		 		$path  = $_SERVER['PATH_INFO'];//获取URL中index.php后面的内容  比如说是/views/dahboard
		 		// echo   $_SERVER['PATH_INFO'];

		 		// "abc".substr()
		 		$path = substr($path,1); // "views/dashboard/user/abc"      split

		 		// echo $path;

		 		// 要截取字符串，放到数组当中，判断用户输入的后缀有几个词语

		 		$arr = explode('/',$path);  // php中的切割字符串，把字符串切割成数组
		 		// print_r($arr);

		 		if(count($arr)==2){  //  index.php/dashboard/index
		 			$path = '/views/' . $path;
		 			// $path = '/views/' . $arr[0] . '/' . $arr[1];
		 		}else if(count($arr)==1){  //  index.php/index
		 			$path = '/views/dashboard/' . $path;   //  /views/dashboard/index
		 		}

		 }else {  //此时输入的是bxg.com/index.php
		 		$path = '/views/dashboard/index';
		 }

		 	//echo $path;
		 	include $path . '.html';

		 	/**
		 	 * bxg.com/index.php/views/dashboard/index
		 	 *
		 	 * bxg.com/index.php/dashboard/index
		 	 *
		 	 * bxg.com/index.php/index
		 	 *
		 	 * bxg.com/index.php
		 	 *
		 	 * bxg.com
		 	 *
		 	 * bxg.com/index
		 	 *
		 	 * bxg.com/dashboard/index
		 	 *
		 	 * bxg.com/views/dashboard/index
		 	 *
		 	 * 
		 	 * 
		 	 */

 ?>