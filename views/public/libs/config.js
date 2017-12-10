require.config({
	baseUrl:'/views/public',
	paths:{
		'jquery':'assets/jquery/jquery.min',   //不要加后缀
		'bootstrap':'assets/bootstrap/js/bootstrap.min',
		'echarts':'assets/echarts/echarts.min',
		'cookie':'assets/jquery-cookie/jquery.cookie',
		'template':'assets/artTemplate/template',
		'form':'assets/jquery-form/jquery.form',
		'datepicker':'assets/bootstrap-datepicker/js/bootstrap-datepicker.min',
		'datepickerzh':'assets/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
		 'uploadify':'assets/uploadify/jquery.uploadify.min',
		 'region':'assets/jquery-region/jquery.region',
		 'ckeditor':'assets/ckeditor/ckeditor',
		nprogress:'assets/nprogress/nprogress',
		utils:'libs/utils',
		jcrop:'assets/Jcrop/js/Jcrop.min',
		// 'common':'js/common'
		'common':'js/dashboard/common'  // 因为把common.js放入了dashboard文件夹下面，所以这个路径重新更新一下
	},
	shim:{
		'bootstrap':{   //dependence   依赖   bootstrap是不支持模块化的，所以需要设置一个依赖项,因为bootstrap是基于jQuery实现的，而jQuery是支持模块化的
			deps:['jquery']   //  如果不支持模块化的库文件或是插件，有依赖项的话，设置一个依赖荐
		},
		'datepickerzh':{
			deps:['jquery']
		},
		'uploadify':{
			deps:['jquery']
		},
		'ckeditor':{
			exports:'CKEDITOR'
		},
		jcrop:{
			deps:['jquery']
		}
	}
});


require(['common']);
// <script src="/views/public/assets/jquery/jquery.min.js"></script>
//     <script src="/views/public/assets/bootstrap/js/bootstrap.min.js"></script>
//     <script src="/views/public/assets/nprogress/nprogress.js"></script>
//     <script src="/views/public/assets/echarts/echarts.min.js"></script>
//     <script src='/views/public/assets/jquery-cookie/jquery.cookie.js'></script>
//     <script src='/views/public/assets/artTemplate/template.js'></script>
//     <script src="/views/public/js/common.js"></script>