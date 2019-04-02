<?php
include_once("ajax_common.php");

if (empty($_SESSION['user']['user_type']) || $_SESSION['user']['user_type'] != 3) {
    $result['retDesc'] = "请以管理员账号登录";
    exit(json_encode($result));
}

if (!empty($_POST['state']) && $_POST['state'] === 'commit') {
    if (empty($_POST['num']) || empty($_POST['type'])) {
        $result['retDesc'] = "缺少参数";
        exit(json_encode($result));
    }

    if (!is_numeric($_POST['num']) || !is_numeric($_POST['type'])) {
        $result['retDesc'] = "参数非法";
        exit(json_encode($result));
    }

    $db = Db::instance();
    $type = intval($_POST['type']);
    for($i = 0; $i < $_POST['num']; $i++) {
        //生成激活码
        $db->create('video_activation_code', array (
                'activation_code' => substr(md5(time() . $i . rand(100,999)), 8, 16),
                'type' => $type,
                'status' => 1,
                'add_time' => time()
            )
        );
    }

    //成功返回
    $result['succ'] = true;
    exit(json_encode($result));
} else if (!empty($_POST['state']) && $_POST['state'] === 'search') {
    if (empty($_POST['status']) || empty($_POST['type'])) {
        $result['retDesc'] = "缺少参数";
        exit(json_encode($result));
    }

    if (!is_numeric($_POST['status']) || !is_numeric($_POST['type'])) {
        $result['retDesc'] = "参数非法";
        exit(json_encode($result));
    }

    $db = Db::instance();
    $type = intval($_POST['type']);
    //生成激活码
    $ret = $db->select('video_activation_code', '*', array (
        'type' => $type,
        'status' => $_POST['status'],
    ))->fetch(false);

    //成功返回
    // $result['succ'] = true;

    exit(json_encode($ret));
}



