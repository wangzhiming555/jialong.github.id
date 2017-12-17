<?php
header("content-type:text/html;charset=utf8");
$vas=$_GET['vas'];
$db=new mysqli("localhost","root","","wuif1708");
$sql="insert into todolist(title,flag) values('$vas','false')";
$result=$db->query($sql);
$row= $db->affected_rows;
if($result){
    echo $row;
}
else{
    echo "添加失败";
}
?>