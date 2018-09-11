<?php
include_once "page_common.php";

//自动登录
if(!isset($_SESSION['user']) && isset($_COOKIE["video_user"])) {
    $_SESSION['user'] = base64_decode($_COOKIE['video_user']);
}

require './config/ConfigData.php';
$config = ConfigData::getConfigData();
$adData = ConfigData::getAdData();
?>
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="utf-8">
    <title>后台管理</title>
    <?php include_once "meta.php"; ?>
</head>
<body>

<div class="navbar navbar-default navbar-fixed-top">
    <div class="container">
        <div class="navbar-header"">
	   <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            </button>
            <span class="logo-img"></span>
            <a class="navbar-brand" href="/">后台管理</a>
        </div>

        <ul class="nav navbar-nav navbar-right">
            <li><a href="/">首页</a></li>
            <?php
             if (empty($_SESSION['user'])) {
            ?>
                 <li><a href="javascript:$('#loginModal').modal('show');">登录/注册</a></li>
             <?php } else { ?>
                 <li><a href="/activation_code.php">激活码管理</a></li>
                 <li><a href="javascript:$('#pwModal').modal('show');">修改密码</a></li>
                 <li><a href="/logout.php">退出</a></li>
            <?php } ?>
        </ul>
    </div>
</div>
<div class="container" id="app" style="margin-top: 70px;">
    <div class="row">
        <div class="col-md-12">

            <div style="margin-bottom: 20px;">
                <?php
                    //如果不是管理员
                    if (empty($_SESSION['user']['user_type']) || $_SESSION['user']['user_type'] != 3) {
                ?>
                   <h4 style="text-align: center;">请以管理员账号<a href="javascript:$('#loginModal').modal('show');">登录</a></h4>

                <?php } else { ?>

                        <h4>广告管理 <button type="button" class="btn btn-info" @click="adForm.data.push(JSON.parse(JSON.stringify(adRow)))">新增</button></h4>


                        <div class="form-inline">

                            <div v-for="(item, index) in adForm.data" :key="index" style="margin:10px 0;">
                                <div class="form-group">
                                    <label for="">文案</label>
                                    <input v-model.trim="item.text" type="text" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="">链接</label>
                                    <input v-model.trim="item.link" type="text" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="">文字颜色</label>
                                    <select class="form-control" v-model.trim="item.fontColor">
                                        <option value="#fff">白色</option>
                                        <option value="#de1a12">红色</option>
                                        <option value="#337ab7">蓝色</option>
                                        <option value="#000">黑色</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="">背景色</label>
                                    <select class="form-control" v-model.trim="item.backgroundColor">
                                        <option value="">无</option>
                                        <option value="#fff">白色</option>
                                        <option value="#de1a12">红色</option>
                                        <option value="#337ab7">蓝色</option>
                                        <option value="#000">黑色</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="">是否加粗</label>
                                    <select class="form-control" v-model.trim="item.bold">
                                        <option value="no">不加粗</option>
                                        <option value="yes">加粗</option>
                                    </select>
                                </div>
                                <button type="button" class="btn btn-danger" @click="adForm.data.splice(index, 1)">删除</button>
                            </div>

                            <div>
                                <button type="button" class="btn btn-default" @click="submitAdForm()">保存广告配置</button>
                                <span v-if="adForm.errorTip" style="color: red;font-size: 14px;">{{adForm.errorTip}}</span>
                            </div>
                        </div>


                        <hr/>


                        <h4>解析接口密钥管理</h4>

                        <div class="form-inline">
                            <div class="form-group">
                                <label for="">客户ID</label>
                                <input v-model.trim="activationCode.client" type="text" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="">密钥</label>
                                <input v-model.trim="activationCode.clientSecretKey" type="text" class="form-control">
                            </div>
                            <button type="button" class="btn btn-default" @click="submitActivationCodeForm()">保存密钥配置</button>
                            <span v-if="activationCode.errorTip" style="color: red;font-size: 14px;">{{activationCode.errorTip}}</span>
                        </div>

                        <hr/>


                        <h4>站点模式配置</h4>

                        <div class="form-inline">
                            <div class="form-group">
                                <label for="">网站当前模式：{{chargeTypeForm.chargeTypeText}}</label>
                                <p><small>
                                免费模式：任务人都可以免费无限制使用
                                <br>收费模式：用户注册登录后有1次免费试用机会，超出后需购买激活码激活成为会员
                                </small></p>
                            </div>
                            <button type="button" class="btn btn-default" @click="submitChargeTypeForm()">{{chargeTypeForm.btnText}}</button>
                            <span v-if="chargeTypeForm.errorTip" style="color: red;font-size: 14px;">{{chargeTypeForm.errorTip}}</span>
                        </div>


                <?php } ?>
            </div>
        </div>
    </div>



    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="exampleModalLabel">{{loginModal.title}}</h4>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="phone" class="control-label">手机号:</label>
                            <input type="text" class="form-control" id="phone" v-model.trim="loginModal.phone">
                        </div>
                        <div class="form-group">
                            <label for="password" class="control-label">密码:</label>
                            <input type="password" class="form-control" id="password" v-model.trim="loginModal.pwd">
                        </div>
                        <div class="form-group" v-if="loginModal.isReg">
                            <label for="password" class="control-label">确认密码:</label>
                            <input type="password" class="form-control" id="password2" v-model.trim="loginModal.pwd2">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <p v-if="loginModal.errorTip" style="color: red;font-size: 14px;">{{loginModal.errorTip}}</p>
                    <button type="button" class="btn btn-info pull-left" @click="switchLoginModal()">{{loginModal.switchBtn}}</button>
                    <button type="button" class="btn" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-success" @click="submitLoginModal()">确认提交</button>
                </div>
            </div>
        </div>
    </div>


    <div class="modal fade" id="pwModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="exampleModalLabel">修改密码</h4>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="old_pwd" class="control-label">原密码:</label>
                            <input type="password" class="form-control" id="old_pwd" v-model.trim="pwModal.old_pwd">
                        </div>
                        <div class="form-group">
                            <label for="new_pw" class="control-label">新密码:</label>
                            <input type="password" class="form-control" id="new_pw" v-model.trim="pwModal.new_pw">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <p v-if="pwModal.errorTip" style="color: red;font-size: 14px;">{{pwModal.errorTip}}</p>
                    <button type="button" class="btn" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-success" @click="submitPwModal()">确认提交</button>
                </div>
            </div>
        </div>
    </div>


</div>


<script src="http://apps.bdimg.com/libs/jquery/2.0.0/jquery.min.js"></script>
<script src="http://apps.bdimg.com/libs/bootstrap/3.3.4/js/bootstrap.min.js"></script>
<script src="static/js/vue.min.js"></script>
<script>

    var adRow = {
        text: '',
        link: '',
        fontColor: '#337ab7',
        backgroundColor: '',
        bold: 'no'
    };

    var app = new Vue({
        el: '#app',
        data: {
	 loginModal:{
            isReg: false,
            title: "登录",
            switchBtn: "没有账号？去注册",
            errorTip: '',
            phone: '',
            pwd: '',
            pwd2: ''
        },
            pwModal:{
                old_pwd: '',
                new_pw: '',
                errorTip: ''
            },
            adForm:{
                data: JSON.parse('<?php echo addslashes($adData); ?>'),
                errorTip: ''
            },
            activationCode:{
                client: "<?php echo $config['iiiLab_client']; ?>",
                clientSecretKey: "<?php echo $config['iiiLab_clientSecretKey']; ?>",
                errorTip: ''
            },
		chargeTypeForm:{
		   chargeType: <?php echo $config['chargeType']; ?>,
		   expectChargeType: 1,
		   chargeTypeText: '',
		   btnText: '',
                   errorTip: ''
		}
        },
	watch: {
        	'chargeTypeForm.chargeType': function(newVal,oldVal) {
            		if (newVal === 0) {
                		this.chargeTypeForm.expectChargeType = 1;
                		this.chargeTypeForm.chargeTypeText = '免费模式';
                		this.chargeTypeForm.btnText = '切换为收费模式';
            		}else {
                		this.chargeTypeForm.expectChargeType = 0;
                		this.chargeTypeForm.chargeTypeText = '付费模式';
                		this.chargeTypeForm.btnText = '切换为免费模式';
          		}
        	}
    	},
        methods: {
            submitAdForm: function () {
                this.adForm.errorTip = "";
                //参数校验
                for (var i = 0; i < this.adForm.data.length; i++) {
                    var item = this.adForm.data[i];
                    if (item.text === '' || item.link === '' || item.fontColor === '') {
                        this.adForm.errorTip = "请输入广告文案和链接地址";
                        return;
                    }
                }

                this.adForm.errorTip = "处理中...";
                var vm = this;
                $.ajax({
                    type: 'POST',
                    url: 'ajax/update_ad_form.php',
                    xhrFields:{withCredentials: true},
                    crossDomain: true,
                    data: {"data": JSON.stringify(this.adForm.data)},
                    dataType: 'json',
                    success: function(data) {
                        if (data.succ) {
                            //成功
                            vm.adForm.errorTip = "保存成功";
                        }else {
                            vm.adForm.errorTip = data.retDesc;
                        }
                    },
                    error: function () {
                        vm.adForm.errorTip = "处理失败,请重试!";
                    }
                });
            },
            submitActivationCodeForm: function () {
                this.activationCode.errorTip = "处理中...";
                var vm = this;
                $.ajax({
                    type: 'POST',
                    url: 'ajax/update_client_info.php',
                    xhrFields:{withCredentials: true},
                    crossDomain: true,
                    data: {"client": vm.activationCode.client, "clientSecretKey": vm.activationCode.clientSecretKey},
                    dataType: 'json',
                    success: function(data) {
                        if (data.succ) {
                            //成功
                            vm.activationCode.errorTip = "保存成功";
                        }else {
                            vm.activationCode.errorTip = data.retDesc;
                        }
                    },
                    error: function () {
                        vm.activationCode.errorTip = "处理失败,请重试!";
                    }
                });
            },

	    submitChargeTypeForm: function () {
                this.chargeTypeForm.errorTip = "处理中...";
                var vm = this;
                $.ajax({
                    type: 'POST',
                    url: 'ajax/update_charge_type.php',
                    xhrFields:{withCredentials: true},
                    crossDomain: true,
                    data: {"chargeType": vm.chargeTypeForm.expectChargeType},
                    dataType: 'json',
                    success: function(data) {
                        if (data.succ) {
                            //成功
                            vm.chargeTypeForm.chargeType = vm.chargeTypeForm.expectChargeType;
                            vm.chargeTypeForm.errorTip = "";
                        }else {
                            vm.chargeTypeForm.errorTip = data.retDesc;
                        }
                    },
                    error: function () {
                        vm.chargeTypeForm.errorTip = "处理失败,请重试!";
                    }
                });
            },

            //提交注册或登录
	    submitLoginModal: function () {
            if (this.loginModal.phone == "" || this.loginModal.pwd == "") {
                this.loginModal.errorTip = "请输入手机号和密码";
                return;
            }

            if (this.loginModal.isReg &&  (this.loginModal.pwd2 == "" || this.loginModal.pwd2 != this.loginModal.pwd)) {
                this.loginModal.errorTip = "两次输入的密码不一致";
                return;
            }

            this.loginModal.errorTip = "处理中...";
            var vm = this;
            $.ajax({
                type: 'POST',
                url: 'ajax/login.php',
                xhrFields:{withCredentials: true},
                crossDomain: true,
                data: {"phone": vm.loginModal.phone, "pwd": vm.loginModal.pwd, "isReg": vm.loginModal.isReg},
                dataType: 'json',
                success: function(data) {
                    if (data.succ) {
                        //成功 已登录 跳转
                        window.location.reload();
                    }else {
                        vm.loginModal.errorTip = data.retDesc;
                    }
                },
                error: function () {
                    vm.loginModal.errorTip = "处理失败,请重试!";
                }
            });
        },
            submitPwModal: function () {
                if (this.pwModal.old_pwd === "" || this.pwModal.new_pw === "") {
                    this.pwModal.errorTip = "请输入参数";
                    return;
                }

                this.pwModal.errorTip = "处理中...";
                var vm = this;
                $.ajax({
                    type: 'POST',
                    url: 'ajax/update_pw.php',
                    xhrFields:{withCredentials: true},
                    crossDomain: true,
                    data: {"old_pwd": vm.pwModal.old_pwd, "new_pw": vm.pwModal.new_pw},
                    dataType: 'json',
                    success: function(data) {
                        if (data.succ) {
                            vm.pwModal.errorTip = '更新成功';
                            vm.pwModal.new_pw = '';
                            vm.pwModal.old_pwd = '';
                            setTimeout("$('#pwModal').modal('hide')", 1500);
                        }else {
                            vm.pwModal.errorTip = data.retDesc;
                        }
                    },
                    error: function () {
                        vm.pwModal.errorTip = "处理失败,请重试!";
                    }
                });
            }
        }
    });
</script>
</body>
</html>
