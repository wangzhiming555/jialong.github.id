<?php
header("content-type:text/html;charset=utf8");
$db=new mysqli("localhost","root","","wuif1708");
$sql="insert into students(num,name,age,tel) values('','','','')";
$result=$db->query($sql);
$id=$db->insert_id;
if($id){
    echo $result;
}
else{
    echo "添加失败";
}
?>