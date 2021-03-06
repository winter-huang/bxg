/**
 * Created by hyd on 2017/10/20.
 */
require.config({
   paths:{
       jquery:'/node_modules/jquery/dist/jquery.min',
       bootstrap:'/node_modules/bootstrap/dist/js/bootstrap.min',
       template:'/node_modules/art-template/lib/template-web',
       form:'/node_modules/jquery-form/dist/jquery.form.min',
       echarts:'/node_modules/echarts/dist/echarts.min',
       cookie:'/node_modules/jquery.cookie/jquery.cookie',
       common:'/src/public/js/common'
   },
    shim:{
        bootstrap:{
            deps:['jquery']
        }
    }
});
require(['common']);