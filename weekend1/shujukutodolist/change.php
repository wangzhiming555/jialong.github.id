<?php
header("content-type:text/html;charset=utf8");
$id=$_GET['id'];
$db=new mysqli("localhost","root","","wuif1708");
$sql="update todolist set flag = 'true' where id = $id";
$result=$db->query($sql);
$row=$db->affected_rows;
if($result){
    echo $row;
}
else{
    echo "修改失败";
}
?>