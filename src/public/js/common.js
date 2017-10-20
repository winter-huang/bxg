define(['jquery', 'cookie','template'], function ($,cookie,template) {
    //cookie 没有登录信息的情况下跳转到login登录页面
    if (!$.cookie('PHPSESSID') && location.pathname != '/login') {
        window.location.href = '/login';
    }

    //cookie 有登录信息的情况下直接跳转到index页面
    // if ($.cookie('PHPSESSID') && location.pathname == '/login') {
    //     window.location.href = '/index';
    // }

    // 除主页面之外，其它的页面都需要渲染头像和用户名
    if ($.cookie('userInfo') && location.pathname != '/login' && location.pathname != '/dashboard/login' && location.pathname != '/view/dashboard/login') {
        var result = JSON.parse($.cookie('userInfo'));
        var asideHtml = template('aside_tpl', result);
        $('.aside .profile').html(asideHtml);
    }

});

