<?php
header("content-type:text/html;charset=utf8");
$user=$_POST['user'];
$pass=$_POST['pass'];
$url='login.html';
if($user=='admin'){
    if($pass=='pass'){
        echo '登陆成功';
        $tishi='登陆成功';
        $url='index.php';
    }
    else{
        echo '密码错误';
        $tishi='密码错误';
    }
}else{
    echo '账号不存在';
    $tishi='账号不存在';
}
include_once 'huancun.html';