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

if (!isset($_POST['client']) || !isset($_POST['clientSecretKey'])) {
    $result['retDesc'] = "缺少参数";
    exit(json_encode($result));
}


//更新
$config = ConfigData::getConfigData();
$config['iiiLab_client'] = trim($_POST['client']);
$config['iiiLab_clientSecretKey'] = trim($_POST['clientSecretKey']);
$ret = ConfigData::updateConfigData($config);

if ($ret) {
        $result['succ'] = true;
        exit(json_encode($result));
}else{
        $result['retDesc'] = "操作失败";
        exit(json_encode($result));
}