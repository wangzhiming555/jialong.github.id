<?php
header("content-type:text/html;charset=utf8");
$id=$_GET['id'];
$title=$_GET['title'];
$vas=$_GET['vas'];
$db=new mysqli("localhost","root","","wuif1708");
$sql="update todolist set $title = '$vas' where id = $id";
$result = $db -> query($sql);
$row = $db -> affected_rows;
if($result){
    echo $row;
}
else{
    echo "修改失败";
}
?>