<?php
require '../config/ConfigData.php';

function getErrno($errno)
{
    if ($errno == 1044) {
        return '用户无权访问';
    }
    return $errno;
}

function showError($db)
{
    if ($db->error) {
        exit("错误代码：<font color='red'>" . getErrno($db->errno) . "</font>；<br /> 错误信息：<font color='red'>{$db->error}</font>");
    }
}

$dbconfig_file = 'dbconfig.php';
$dbtpl_file = 'dbtpl.php';

if (isset($_GET['init'])) { //初始检测 基本检测
    if (file_exists('install.lock')) {
        exit('已经安装 如果需要重新安装 请删除install.lock文件');
    }

    if (!is_writable(__DIR__) || !is_writable($dbconfig_file)) {
        exit('config文件夹没有写入权限，请先给config文件夹设置可读写权限<br>Linux机器执行命令：chmod -R 755 config/');
    }

    if (!function_exists("mysqli_connect")) {
        exit('mysqli没有启用,请找到php.ini 去掉mysqli前面的注释并重启web服务。<br>启用方法：删除extension=php_mysqli.dll前面的 ;');
    }

    ConfigData::getConfigData();

    exit('ok');
}


if (isset($_POST['install'])) { //安装

    //密钥配置
    $config = ConfigData::getConfigData();
    $config['iiiLab_client'] = trim($_POST['clientId']);
    $config['iiiLab_clientSecretKey'] = trim($_POST['clientSecretKey']);
    ConfigData::updateConfigData($config);


    if (file_exists($dbtpl_file)) {
        $fp = fopen($dbtpl_file, "r");
        $modeStr = fread($fp, filesize($dbtpl_file));//读取配置模板内容
    } else {
        exit('dbtpl.php文件不存在 该文件为系统模板请重新下载');
    }

    $databaseHost = $_POST['databaseHost'];
    $databasePort = $_POST['databasePort'];
    $database = $_POST['database'];
    $databaseUser = $_POST['databaseUser'];
    $databasePassword = $_POST['databasePassword'];
  
    $_mysqli = @new mysqli($databaseHost, $databaseUser, $databasePassword, '', $databasePort);
    if (mysqli_connect_errno()) {
        exit('数据库连接错误！错误代码：' . mysqli_connect_error());
    }

    $_mysqli->autocommit(true); //不使用事物
    $_mysqli->query("CREATE DATABASE IF NOT EXISTS `{$database}`;");
    showError($_mysqli);
    $_mysqli->query("use `{$database}`");
    showError($_mysqli);
    $_mysqli->set_charset('utf8');

    $rs = $_mysqli->query("CREATE TABLE IF NOT EXISTS `video_user` (
      `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增id',
      `phone` varchar(16) NOT NULL COMMENT '手机号',
      `password` char(32) NOT NULL COMMENT '密码',
      `user_type` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1:单人用户 2:团队用户 3:管理员',
      `experience_used` int(11) NOT NULL DEFAULT '0' COMMENT '已使用的免费体验次数',
      `vip_expire_time` int(11) DEFAULT NULL COMMENT '会员过期时间,如果为空则从未充值',
      `last_login_session_id` varchar(100) DEFAULT NULL COMMENT '上次登录的sessionId(只针对单人用户)',
      `add_time` int(11) NOT NULL COMMENT '添加时间',
      PRIMARY KEY (`id`),
      UNIQUE KEY `phone` (`phone`)
    ) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='用户信息表';");

    showError($_mysqli);

    $rs = $_mysqli->query("CREATE TABLE IF NOT EXISTS `video_activation_code` (
      `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增id',
      `activation_code` char(16) NOT NULL COMMENT '激活码',
      `type` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1: 1天  2: 30天  3:单人365天 4：团队365天',
      `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1: 未兑换  2：已兑换',
      `user_id` int(11) DEFAULT NULL COMMENT '兑换用户ID',
      `exchange_time` int(11) DEFAULT NULL COMMENT '兑换时间',
      `add_time` int(11) NOT NULL COMMENT '添加时间',
      PRIMARY KEY (`id`),
      UNIQUE KEY `activation_code` (`activation_code`)
    ) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='激活码表';");

    showError($_mysqli);

    $rs = $_mysqli->query("INSERT INTO video_user (phone, password, user_type, experience_used, vip_expire_time, last_login_session_id, add_time) 
    VALUES ('13812345678', 'e10adc3949ba59abbe56e057f20f883e', 3, 0, null, null, 1524759425);");

    $data = array("数据库IP地址" => $databaseHost, "MYSQL端口" => $databasePort, "MYSQL数据库" => $database, "MYSQL用户名" => $databaseUser, "MYSQL密码" => $databasePassword);
   

    function get_value($key)
    {
        global $data;
        return "'" . $data[$key] . "'";
    }

      function mat($matches){return get_value($matches[1]);}

      if(function_exists('preg_replace_callback')){
          $configString = preg_replace_callback(
                '/\"([^\"]*)\"/', mat
                , $modeStr);
      }else{
          $configString = preg_replace(
          '/\"([^\"]*)\"/es',
          "get_value('\\1')",
          $modeStr
          );
      }


    if ($configString == '') {
        exit("安装失败 您可以通过手动修改dbconfig.php文件配置数据库信息");
    }

    $myfile = fopen($dbconfig_file, "w") or die("数据导入成功但配置文件写入失败 您可以删除数据库数据重装");
    fwrite($myfile, $configString);
    fclose($myfile);

    $myfile = fopen('install.lock', "w") or die('恭喜：已经安装成功但无权写入文件锁请删除该文件');
    fwrite($myfile, '删除该文件 才可重新安装');
    fclose($myfile);
    exit('ok');
}
?>
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="utf-8">
    <title>视频解析站点安装</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <link href="http://apps.bdimg.com/libs/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet">
    <link href="../static/css/site.css?v32" rel="stylesheet">
    <link rel="shortcut icon" href="../static/img/favicon.ico">
    <style type="text/css">
        .container .navbar-header .logo-img {
            width: 52px;
            height: 52px;
            margin-left: 15px;
            float: left;
            display: inline-block;
            background: url(../static/img/logo.png) no-repeat;
            background-size: contain;
            background: 0 0\9;
            filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='../static/img/logo.png', sizingMethod='scale');
        }
        @media (min-width: 768px) {
            .container .navbar-header .logo-img {margin-left: 0;}
        }
    </style>
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://cdn.staticfile.org/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://cdn.staticfile.org/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>

<div class="navbar navbar-default navbar-fixed-top">
    <div class="container">
        <div class="navbar-header"">
            <span class="logo-img"></span>
            <a class="navbar-brand" href="/">视频解析站点安装</a>
        </div>
    </div>
</div>
<div class="container" id="app" style="margin-top: 70px;">
    <div class="row">
        <div class="col-md-12">

            <div style="margin-bottom: 20px;">

                <div v-cloak v-if="isInit && showInstallForm">
                    <div class="form-group">
                        <label for="databaseHost">数据库主机</label>
                        <input type="text" v-model.trim="installForm.databaseHost" class="form-control" id="databaseHost" name="databaseHost" placeholder="请输入数据库主机" required="">
                        <p class="help-block">如果数据库与网站是同一台服务器，默认 localhost 即可</p>
                    </div>

                    <div class="form-group">
                        <label for="databasePort">数据库端口</label>
                        <input type="number" min="0" max="65535" v-model.trim="installForm.databasePort" class="form-control" id="databasePort" name="databasePort" placeholder="请输入数据库端口" required="">
                        <p class="help-block">如果没有修改过数据库端口，默认 3306 即可</p>
                    </div>

                    <div class="form-group">
                        <label for="database">数据库名</label>
                        <input type="text" v-model.trim="installForm.database" class="form-control" id="database" name="database" placeholder="请输入数据库名" required="">
                        <p class="help-block">如果数据库不存在，系统会以您指定的名称创建一个数据库</p>
                    </div>

                    <div class="form-group">
                        <label for="databaseUser">数据库用户名</label>
                        <input type="text" v-model.trim="installForm.databaseUser" class="form-control" id="databaseUser" name="databaseUser" placeholder="请输入数据库用户名" required="">
                    </div>

                    <div class="form-group">
                        <label for="databasePassword">数据库密码</label>
                        <input type="password" v-model.trim="installForm.databasePassword" class="form-control" id="databasePassword" name="databasePassword" placeholder="请输入数据库用户密码" required="">
                    </div>

                    <div class="form-group">
                        <label for="clientId">iiiLab视频解析接口客户ID</label>
                        <input type="text" v-model.trim="installForm.clientId" class="form-control" id="clientId" name="clientId" placeholder="请输入iiiLab视频解析接口clientId" required="">
                        <p class="help-block">如果还没有，<a href="http://www.iiilab.com/article/60" target="_blank">前往iiiLab获取视频解析接口客户ID和密钥</a><p>
                    </div>

                    <div class="form-group">
                        <label for="clientSecretKey">iiiLab视频解析接口密钥</label>
                        <input type="text" v-model.trim="installForm.clientSecretKey" class="form-control" id="clientSecretKey" name="clientSecretKey" placeholder="请输入iiiLab视频解析接口clientSecretKey" required="">
                    </div>

                    <button type="submit" class="btn btn-default" @click="submitInstallForm()">确认安装</button>
                    <span v-if="installForm.errorTip" style="color: red;font-size: 14px;">{{installForm.errorTip}}</span>
                </div>


                <div v-cloak v-if="isInit && !showInstallForm" style="text-align: center;">
                    <p style="color: red;font-size: 18px;">恭喜，安装成功！</p>
                    <p><a href="../" class="btn btn-default">前往首页</a></p>
                </div>

                <p v-if="!isInit && initTip" style="color: red;font-size: 18px;text-align: center;margin-top: 20px;" v-html="initTip"></p>

            </div>
        </div>
    </div>

</div>

<script src="http://apps.bdimg.com/libs/jquery/2.0.0/jquery.min.js"></script>
<script src="http://apps.bdimg.com/libs/bootstrap/3.3.4/js/bootstrap.min.js"></script>
<script src="../static/js/vue.min.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            installForm: {
                install: 'form',
                databaseHost:'localhost',
                databasePort:'3306',
                database:'video',
                databaseUser:'',
                databasePassword:'',
                errorTip: '',
                clientId: '',
                clientSecretKey: ''
            },
            showInstallForm: true,
            isInit: false,
            initTip: '正在初始化安装程序...'
        },
        methods: {
            submitInstallForm: function () {
                this.installForm.errorTip = "";

                //参数校验
                if (this.installForm.databaseHost === ''
                    || this.installForm.databasePort === ''
                    || this.installForm.database === ''
                    || this.installForm.databaseUser === ''
                    || this.installForm.databasePassword === ''
                    || this.installForm.clientId === ''
                    || this.installForm.clientSecretKey === '') {
                    this.installForm.errorTip = "缺少配置信息，所有项都为必填项";
                    return;
                }

                this.installForm.errorTip = "安装中...";
                var vm = this;
                $.ajax({
                    type: 'POST',
                    url: 'install.php',
                    data: vm.installForm,
                    dataType: 'text',
                    success: function(data) {
                        if (data === 'ok') {
                            vm.showInstallForm = false;
                        }else {
                            vm.installForm.errorTip = data;
                        }
                    },
                    error: function () {
                        vm.installForm.errorTip = "处理失败,请重试!";
                    }
                });
            },
            init: function () {
                var vm = this;
                $.ajax({
                    type: 'GET',
                    url: 'install.php?init=1',
                    dataType: 'text',
                    success: function(data) {
                        if (data === 'ok') {
                            vm.isInit = true;
                        }else {
                            vm.initTip = data;
                        }
                    },
                    error: function () {
                        vm.initTip = "初始化失败";
                    }
                });
            }
        }
    });
    app.init();
</script>
</body>
</html>