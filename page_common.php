<?php
session_start();
require 'class/DbConfig.php';

//自动登录
if(!isset($_SESSION['user']) && isset($_COOKIE["video_user"])) {
   $phone = base64_decode($_COOKIE['video_user']);
   //数据库查询
   $db = Db::instance();
   $ret = $db->select('video_user', '*', array (
       'phone' => $phone,
   ))->fetch(false);
   if (!$ret) {
       setcookie("video_user", "", time()-3600,  "/");
   }else {
       $_SESSION['user'] = $ret;
   }
}


function addAsterisk($phone) {
    if (strlen($phone) > 10) {
        return substr($phone, 0, 3) . "****" . substr($phone, 7);
    }
    return $phone;
}

function dateFormat($time) {
    if (empty($time)) {
        return "";
    }else {
        return date('Y/m/d H:i:s', $time);
    }
}

$userType = array(
    1 => '个人',
    2 => '团队',
    3 => '管理员'
);