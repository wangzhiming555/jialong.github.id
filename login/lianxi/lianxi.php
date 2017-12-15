<?php
//可变变量
$a1=1;
$$a1=2;
var_dump($a1);
var_dump(1);
//可变函数
function fun(){
    var_dump('fun');
}
$fun='fun';
$fun();
//终止代码
//exit;
//变量的引用
$a2='a2';
$a3=$a2;
$a2=5;
var_dump($a2);
var_dump($a3);
$a4=4;
$a5=&$a4;
$a4=5;
var_dump($a4);
var_dump($a5);
//全局变量只能在全局中起作用，局部只能在局部起作用
$str='aaa';
function fun1(){
    $str='bbb';
    var_dump($str);
}
fun1();
var_dump($str);
//全局变量在局部变量中的引用
//1.通过引用全局变量的索引
$str1='ccc';
function fun2(&$str1){
    $str1='ddd';
    var_dump($str1);
}
fun2($str1);
var_dump($str1);
//2.通过指明全局变量
$str2='eee';
function fun3(){
    global $str2;
    $str2='fff';
    var_dump($str2);
}
fun3();
var_dump($str2);
//判断函数是否存在
echo function_exists('fun3');
//代码的复用，引入文件
include_once "lianxi.html";
//获取数组的长度
$arr1=array(1,2,3);
var_dump($_REQUEST);
//索引数组
$arr2=array(1,2,3,4,5);
var_dump($arr2);
//关联数组
$arr3=array(
    'id'=>'1',
    'name'=>'lisi',
    'age'=>26
);
var_dump($arr3);
//获取数组的长度
var_dump(count($arr3));
//专门输出数组
print_r($arr1);
//数组转换为字符串
echo json_encode($arr1);

?>