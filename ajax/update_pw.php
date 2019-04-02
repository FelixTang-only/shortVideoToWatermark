<?php
include_once("ajax_common.php");

$result = array (
    "retDesc" => "",
    "succ" => false
);

if (empty($_SESSION['user'])) {
    $result['retDesc'] = "请先登录";
    exit(json_encode($result));
}

if (empty($_POST['old_pwd']) || empty($_POST['new_pw'])) {
    $result['retDesc'] = "缺少参数";
    exit(json_encode($result));
}


//注册
$db = Db::instance();
//数据库查询
$ret = $db->select('video_user', '*', array (
        'phone' => $_SESSION['user']['phone'],
    ))->fetch(false);


//验证老密码
if ($ret['password'] != md5($_POST['old_pwd'])) {
    $result['retDesc'] = "原密码错误";
    exit(json_encode($result));
}

//更新
$db->raw( "UPDATE video_user set password = '".md5(trim($_POST['new_pw']))."' where phone = '".$_SESSION['user']['phone']."'");

$result['succ'] = true;
exit(json_encode($result));