<?php
include_once("ajax_common.php");

if (empty($_POST['code'])) {
    $result['retDesc'] = "请输入激活码";
    exit(json_encode($result));
}

$code = trim($_POST['code']);
if (strlen($code) != 16) {
    $result['retDesc'] = "激活码长度错误";
    exit(json_encode($result));
}



//计算到期时间
$db = Db::instance();
//数据库查询
$ret = $db->select('video_activation_code', '*', array (
    'activation_code' => $code,
))->fetch(false);

if (!$ret) {
    $result['retDesc'] = "激活码不存在";
    exit(json_encode($result));
}

if ($ret['status'] != 1) {
    $result['retDesc'] = "激活码已被兑换";
    exit(json_encode($result));
}

//计算到时时间
$dayTime = 3600 * 24;
$userType = 1;
switch ($ret['type']) {
    case 1:
        $validTime = $dayTime;
        break;
    case 2:
        $validTime = 30 * $dayTime;
        break;
    case 3:
        $validTime = 365 * $dayTime;
        break;
    case 4:
        $validTime = 365 * $dayTime;
        $userType = 2;
        break;
    default:
        $validTime = $dayTime;
}

if ($_SESSION['user']['user_type'] != 3) {
    $_SESSION['user']['user_type'] = $userType;
}


if (!empty($_SESSION['user']['vip_expire_time']) && $_SESSION['user']['vip_expire_time'] > time()) {
    $_SESSION['user']['vip_expire_time'] = $_SESSION['user']['vip_expire_time'] + $validTime;
}else{
    $_SESSION['user']['vip_expire_time'] = time() + $validTime;
}

//更新用户信息
$db->raw( "UPDATE video_user set user_type = ".$_SESSION['user']['user_type'].", vip_expire_time = ".$_SESSION['user']['vip_expire_time']." 
where phone = '". $_SESSION['user']['phone']."'" );


//更新激活码信息
$db->raw( "UPDATE video_activation_code set status = 2, user_id = ".$_SESSION['user']['id'].", exchange_time = ".time()."
where activation_code = '".$code."'");


//成功返回
$result['succ'] = true;
exit(json_encode($result));