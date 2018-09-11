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

if (empty($_SESSION['user']['vip_expire_time']) && $_SESSION['user']['experience_used'] >= 1) {
    $result['retDesc'] = "免费体验次数已用尽，请激活VIP";
    exit(json_encode($result));
}

if (!empty($_SESSION['user']['vip_expire_time']) && time() > $_SESSION['user']['vip_expire_time']) {
    $result['retDesc'] = "VIP已过期，请激活VIP";
    exit(json_encode($result));
}

if (empty($_POST['link'])) {
    $result['retDesc'] = "缺少参数";
    exit(json_encode($result));
}

//判断是否已配置接口密钥
$config = ConfigData::getConfigData();
if (empty($config['iiiLab_client']) || empty($config['iiiLab_clientSecretKey'])) {
    $result['retDesc'] = "缺少配置信息:解析接口密钥，请联系站长";
    exit(json_encode($result));
}

//调iiiLab API请求
$iiiLabVideoDownloadURL = "http://service.iiilab.com/video/download";  //iiiLab视频解析接口地址
$client = $config['iiiLab_client'];   //iiiLab分配的客户ID
$clientSecretKey = $config['iiiLab_clientSecretKey'];  //iiiLab分配的客户密钥

//参数
$link = trim($_POST['link']);
$timestamp = time() * 1000;
$sign = md5($link . $timestamp . $clientSecretKey);

$params = array(
        "link" => $link,
        "timestamp" => $timestamp,
        "sign" => $sign,
        "client" => $client
    );

$options = array(
        "http" => array(
            'method' => 'POST',
            'header'  => 'Content-type: application/x-www-form-urlencoded',
            'content' => http_build_query($params)
        )
    );

$result = file_get_contents($iiiLabVideoDownloadURL, false, stream_context_create($options));

//如果是体验 计数
if (empty($_SESSION['user']['vip_expire_time'])) {
    $_SESSION['user']['experience_used'] = $_SESSION['user']['experience_used'] + 1;
    $db = Db::instance();
    $db->update( 'video_user', 'experience_used', $_SESSION['user']['experience_used'], $_SESSION['user']['id'] );
}
exit($result);
