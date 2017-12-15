<?php
header("content-type:text/html;charset=utf8");
session_start();
$user=$_GET['user'];
$pass=$_GET['pass'];
$db=new mysqli("localhost","root","","wuif1708");
$sql="select * from user where name='$user'";
$result=$db->query($sql);
$a=$result->fetch_assoc();
if($a){
    if($a['pass']==$pass){
        $url='index.php';
        $tishi='登陆成功';
        $_SESSION['user']=$user;
    }
    else{
        $url='login.html';
        $tishi='密码错误';
    }
}else{
    $url='login.html';
    $tishi='账号不存在';
}
include_once 'tishi.html';
?>