<?php
//登录和注册
session_start();
require '../class/DbConfig.php';

/**
 * 先判断SESSION
 * $_SESSION['video_user]
 * $_SESSION['vip_expire_time]
 * $_SESSION['experience_used]
 */

$result = array (
    "retDesc" => "",
    "succ" => false
);

if (empty($_POST['phone']) || empty($_POST['pwd']) || empty($_POST['isReg'])) {
    $result['retDesc'] = "缺少参数";
    exit(json_encode($result));
}

// if (!is_numeric($_POST['phone'])) {
//     $result['retDesc'] = "账号格式错误";
//     exit(json_encode($result));
// }

//注册
$db = Db::instance();
//数据库查询
$ret = $db->select('video_user', '*', array (
        'phone' => $_POST['phone'],
    ))->fetch(false);


if ($_POST['isReg'] != "false") {
    if ($ret) {
        $result['retDesc'] = "账号已存在";
        exit(json_encode($result));
    }

    $db->create('video_user', array (
            'phone' =>  $_POST['phone'],
            'password' => md5($_POST['pwd']),
            'user_type' => 1,
            'experience_used' => 0,
            'add_time' => time()
        )
    );

    $ret = $db->select('video_user', '*', array (
        'phone' => $_POST['phone'],
    ))->fetch(false);
}else {
    if (!$ret) {
        $result['retDesc'] = "账号不存在";
        exit(json_encode($result));
    }

    if ($ret['password'] != md5($_POST['pwd'])) {
        $result['retDesc'] = "密码错误";
        exit(json_encode($result));
    }

    //强制下线其他端
    if ($ret['user_type'] == 1) {
        if (!empty($ret['last_login_session_id'])) {
            // 1. commit session if it's started.
            if (session_id()) {
                session_commit();
            }

            // 2. store current session id
            session_start();
            $current_session_id = session_id();
            session_commit();

            // 3. hijack then destroy session specified.
            session_id($ret['last_login_session_id']);
            session_start();
            session_destroy();
            session_commit();

            // 4. restore current session id. If don't restore it, your current session will refer to the session you just destroyed!
            session_id($current_session_id);
            session_start();
            session_commit();
        }

        //更新数据库last_login_session_id
        $db->raw( "UPDATE video_user set last_login_session_id = '".session_id()."' where phone = '".$_POST['phone']."'");
    }
}

//写Session
$_SESSION['user'] = $ret;

if (isset($_POST['img'])) {
    $_SESSION['user']['headimg'] = $_POST['img'];
}
exit(json_encode($_SESSION['user']));

//写Cookie
setcookie("video_user", base64_encode($ret['phone']), time()+60*60*24*30, "/");

$result['succ'] = true;
exit(json_encode($result));