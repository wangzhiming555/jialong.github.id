<?php
header("content-type:text/html;charset=utf8");
$id=$_GET['id'];
$cloum=$_GET['cloum'];
$res=$_GET['vas'];
$db=new mysqli("localhost","root","","wuif1708");
$sql="update students set $cloum='$res' where id=$id";
$result=$db->query($sql);
$row=$db->affected_rows;
if($result){
    echo $row;
}
else{
    echo "修改失败";
}
?>