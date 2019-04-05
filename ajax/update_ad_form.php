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

if (!isset($_POST['data'])) {
    $result['retDesc'] = "缺少参数";
    exit(json_encode($result));
}


//更新
ConfigData::updateAdData($_POST['data']);

$result['succ'] = true;
exit(json_encode($result));