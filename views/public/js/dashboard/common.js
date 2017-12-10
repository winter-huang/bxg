// NProgress.start();

// NProgress.done();

// $('.navs ul').prev('a').on('click', function () {
// 	$(this).next().slideToggle();
// });

//这是一个公共的js文件，是每个页面都会引入的一个文件，因此如果需要对所有的文件做一个公共的设置或是处理的话，可以将代码写在此处

define(['jquery', 'cookie', 'template', 'nprogress'], function ($, ck, template,NProgress) {
    if (!$.cookie('PHPSESSID') && location.pathname != '/login') { //判断的是一个没有登陆的情况
        // 用$.cookie('PHPSESSID')来获取当前域名 下面有没有服务器设置过来的sessionID,如果有的话，就会获取到，如果没有获取的就是空
        //登陆页面不需要判断有无sessinID,
        window.location.href = '/login';
    }

    // 因为每个页面都会引入aside文件，而且也会引入common.js公共的js文件，因此在这里写js代码
    //将登陆页面排除掉，因为登陆页面没有头像和用户名
    if (location.pathname != '/login' && location.pathname != '/dashboard/login' && location.pathname != '/views/dashboard/login') {  // 除主页面之外，其它的页面都需要渲染头像和用户名

        // var result = JSON.parse($.cookie('userInfo'));
        // console.log(typeof result)
        // var htmlStr =  template('tpl_asdide',result);
        //
        var htmlStr = template('tpl_aside', JSON.parse($.cookie('userInfo')));

        $('.aside .profile').html(htmlStr);
    }

    //退出功能
    $("#logout").on('click', function () {
        $.ajax({
            url: '/api/logout',
            type: 'post',
            success: function (info) {
                if (info.code == 200) {
                    window.location.href = '/login';
                }
            }
        })
    })


    //侧边栏的交互功能
    //我们应该是给具有下拉菜单功能的a标签注册事件，不是给所有的a标签注册事件

    $('.navs a+ul').prev().on('click', function () {
        // alert(123);
        $(this).next().slideToggle(); //让侧边框有一个下拉的动画特效
    });

    //加载时的进度条
    NProgress.start();
    NProgress.done();

    // 需要给文档注册一个全局的ajax事件，这样在开始的时候，就会出现一个进度条，在真正结束的时候，就会结束
    $(document).ajaxStart(function(){
        NProgress.start();
    });
    $(document).ajaxStop(function(){
        NProgress.done();
    });

});
	


