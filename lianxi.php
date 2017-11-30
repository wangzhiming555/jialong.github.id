<?php
header("content-type:text/html;charset=utf8");
$user=$_POST['user'];
$pass=$_POST['pass'];
if($user=='aaa'){
    if($pass=='123'){
        echo "登录成功";
    }else{
        echo "密码错误<a href='lianxi.html'>重新登录</a>";
    }
}else{
    echo "账号不存在<a href='lianxi.html'>重新登录</a>";
}
