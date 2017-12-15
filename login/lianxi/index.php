<?php
header("content-type:text/html;charset=utf8");
session_start();
if(!$_SESSION['user']){
    $tishi='请先登录';
    $url='login.html';
    exit;
}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
欢迎<?php echo $_SESSION['user'] ?>登陆成功;<a href="fanhui.php">返回</a>
</body>
</html>