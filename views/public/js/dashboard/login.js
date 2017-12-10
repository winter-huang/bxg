define(['jquery','cookie'],function($,){
		$('#formLogin').on('click',function(){
        // alert(123);
        // 提交给服务器的表单一定要有name属性，否则无法提交给后台进行处理
        // 在jQuery的事件当中，this指代当前的DOM对象,如果想要用到jQuery的方法的话，得需要将DOM对象转换成jQuery对象
        //  $(this) 
        // $('.btn').get(0)   $('.btn')[0]  将jQuery对象转换成DOM对象
        // console.log($(this).serializeArray());
        var data = $(this).serializeArray(); //将表单中的数据进行序列化成对象 
        $.ajax({
            // url:'http://api.botue.com/login',
            url:'/api/login',
            data: data,
            type:'post',
            success:function(info){
                // alert('登陆成功');
                if(info.code == 200){
                   
                    // console.log(typeof info);
                    //借助于cookie进行传值，但是cookie里面存储的是string类型,因此需要将info.result这个对象转换成字符串
                    $.cookie('userInfo',JSON.stringify(info.result));
                    window.location.href = '/index';
                }
            },
            error:function(){
                alert('登陆失败');
            }
        })

        return false;// 阻止浏览器的默认行为

        // 不同源就是跨域   同源策略是基于浏览器的一个安全方面的一个考虑
        // 协议   域名   端口   这三个如果都相同 就是同源，如果不相同就是跨域 
        // 解决跨域的方式：  jsonp        只能实现get的跨域 

        // 要用反向代理
    })
})