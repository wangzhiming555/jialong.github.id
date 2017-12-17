<?php
header("content-type:text/html;charset=utf8");
$id=$_GET['id'];
$db=new mysqli("localhost","root","","wuif1708");
$sql="delete from students where id=$id";
$result=$db->query($sql);
$row=$db->affected_rows;
if($result){
    echo $row;
}
else{
    echo "删除失败";
}
?>