<?php
header("content-type:text/html;charset=utf8");
$user=$_GET['user'];
$pass=$_GET['pass'];
$db=new mysqli("localhost","root","","wuif1708");
$sql="insert into sign_up (name,pass) values('$user','$pass')";
$sql1="select * from sign_up where name ='$user'";
if($sql1){
    echo "账号已存在";
    exit;
}
$result=$db->query($sql);
$row=$db->insert_id;
if($result){
    echo $row;
}
else{
    echo "注册失败";
}
?>