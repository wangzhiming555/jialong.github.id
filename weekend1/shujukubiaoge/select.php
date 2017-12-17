<?php
header("content-type:text/html;charset=utf8");
$db=new mysqli("localhost","root","","wuif1708");
$sql="select * from students";
$result=$db->query($sql);
$row=$result->fetch_all(MYSQLI_ASSOC);
$a=json_encode($row);
echo $a;
?>