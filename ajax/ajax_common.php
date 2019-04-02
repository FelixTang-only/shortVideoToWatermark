<?php
//只根据session校验 如果session不存在则提示登录（同时清除cookie）
session_start();
require '../class/DbConfig.php';
require '../config/ConfigData.php';



/**
 * 先判断SESSION
 * $_SESSION['video_user]
 * $_SESSION['vip_expire_time]
 * $_SESSION['experience_used]
 */

$result = array(
    "retCode" => 401,
    "retDesc" => "",
    "succ" => false
);

//未登录
if(!isset($_SESSION['user'])) {
    if (isset($_COOKIE['video_user'])) {
        setcookie("video_user", "", time()-3600,  "/");
    }
    $result['retDesc'] = "用户未登录，请先登录或注册";
    exit(json_encode($result));
}
