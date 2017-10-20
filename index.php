<?php
  header("Content-type:text/html;charset=utf-8");
  //设置路由导航
  //include '/src/dashboard/index.html';
  //echo $_SERVER['PATH_INFO'];
  //var_dump($_SERVER);
  $path = '';
  if(array_key_exists('PATH_INFO',$_SERVER)){
    $path = $_SERVER['PATH_INFO'];
    $path = substr($path,1);
    $pathArr = explode('/',$path);
    if(count($pathArr) == 2){
        $path = '/src/' . $path;
    }else if(count($pathArr) == 1){
        $path = '/src/dashboard/' . $path;
    }
  }else{
    $path = '/src/dashboard/index';
  }
    include $path . '.html';


?>