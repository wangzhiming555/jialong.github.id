<?php
session_start();
  $user=$_GET['user'];
  $pass=$_GET['pass'];
  $url='login.html';
  $db=new mysqli('localhost','root','','wuif1708');
  $result="select * from user where name='$user'";
  $sql=$db->query($result);
  $aaa=$sql->fetch_assoc();
  if($aaa){
      if($aaa['pass']==$pass){
          echo '登陆成功';
          $tishi='登陆成功';
          $url='index.php';
          $_SESSION['user']=$user;
      }
      else{
          echo '密码错误';
          $tishi='密码错误';
      }
  }else{
      echo '账号不存在';
      $tishi='账号不存在';
  }
include_once 'tishi.html';
  exit;
  if($user=='admin'){
      if($pass=='123'){
          echo '登陆成功';
          $tishi='登陆成功';
          $url='index.php';
          $_SESSION['user']=$user;
      }
      else{
          echo '密码错误';
          $tishi='密码错误';
      }
  }else{
      echo '账号不存在';
      $tishi='账号不存在';
  }
include_once 'tishi.html';
?>