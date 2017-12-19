<?php
header("content-type:text/html;charset=utf8");
$user=$_GET['user'];
$pass=$_GET['pass'];
$db=new mysqli("localhost","root","","wuif1708");
$sql="select * from sign_up where name='$user'";
$result=$db->query($sql);
$row=$result->fetch_assoc();
if($row['name']){
    if($row['pass']==$pass){
        echo 1;
    }
    else{
        echo 2;
    }
}
else{
    echo 3;
}
?>