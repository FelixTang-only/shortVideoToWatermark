/*!
 * site.css
 * (c) 2015-2018 iiiLab.com
 */
function parseSuffix(url) {
    var parser = document.createElement('a');
    parser.href = url;
    return parser.pathname.split('.').pop();
}

function isMP4File(url) {
    var suffix = parseSuffix(url);
    return suffix.toUpperCase() === "MP4";
}

//https://stackoverflow.com/questions/19999388/check-if-user-is-using-ie-with-jquery
function detectIE() {
    var ua = window.navigator.userAgent;
    // IE 10 or older && IE 11
    if (ua.indexOf('MSIE ') > 0 || ua.indexOf('Trident/') > 0) {
        $("#app .row .col-md-12").prepend('<div style="text-align: center;" class="alert alert-danger" role="alert">发现您正在使用IE内核浏览器，建议使用WebKit内核浏览器访问本站获得最佳上网体验。<a target="_blank" href="http://www.jianshu.com/p/a70521aba2b3">详情>></a></div>');
    }
}

var app = new Vue({
    el: '#app',
    data: {
        link: '',
        linkFromInit: false,
        submitBtnClass: {
            disabled : false
        },
        errorTip: '',
        isMP4File: false,
        requestSuccess: false,
        showAllSupportLink: false,
        showClearBtn: false,
        requestResult: {
            video: '',
            text: '',
            cover: ''
        },
        loginModal:{
            isReg: false,
            title: "登录",
            switchBtn: "没有账号？去注册",
            errorTip: '',
            phone: '',
            pwd: '',
            pwd2: ''
        },
        activationModal:{
            code: '',
            errorTip: ''
        },
        activationCode:{
            num: '1',
            type: '1',
            errorTip: ''
        },
        activationSearchCode:{
            type: '1',
            status: '未兑换',
            errorTip: ''
        }
    },
    watch: {
        'link': function(newVal,oldVal) {
            if (newVal.length > 0) {
                this.showClearBtn = true;
                $(".input-group-lg .link-input").css('padding-right', '32px');
            }else {
                this.showClearBtn = false;
                $(".input-group-lg .link-input").css('padding-right', '16px');
            }
        }
    },
    created () {
        var isWeixin = function () { //判断是否是微信
            var ua = navigator.userAgent.toLowerCase();
            return ua.match(/MicroMessenger/i) == "micromessenger";
        };
        if (isWeixin()) {
           var nickname =  location.href.split('nickname=')[1];
           if (typeof sessionStorage.getItem('loginStatus') !== 'undefined'){
            if (!sessionStorage.getItem('loginStatus')) return;
            this.wxSubmitLoginModal(nickname);
           }
        }
    },
    methods: {
        submitactivationSearchCodeForm: function () {
            if (this.activationSearchCode.status == "" || this.activationSearchCode.type == "") {
                this.activationSearchCode.errorTip = "请输入参数";
                return;
            }

            this.activationSearchCode.errorTip = "处理中...";
            var vm = this;
            var status = '';
            vm.activationSearchCode.status === '已兑换' ? status = '2' : status = '1';
            $.ajax({
                type: 'POST',
                url: 'ajax/generate_activation.php',
                xhrFields:{withCredentials: true},
                crossDomain: true,
                data: {
                    "type": vm.activationSearchCode.type,
                    "status": status,
                    "state": "search"
                },
                dataType: 'json',
                success: function(data) {
                    if (data.succ) {
                        //成功 已登录 跳转
                        window.location.href = window.location.origin + "/activation_code.php";
                    }else {
                        vm.activationSearchCode.errorTip = data.retDesc;
                    }
                },
                error: function () {
                    vm.activationSearchCode.errorTip = "处理失败,请重试!";
                }
            });
        },
        submitActivationCodeForm: function () {
            if (this.activationCode.num == "" || this.activationCode.type == "") {
                this.activationCode.errorTip = "请输入参数";
                return;
            }

            this.activationCode.errorTip = "处理中...";
            var vm = this;
            $.ajax({
                type: 'POST',
                url: 'ajax/generate_activation.php',
                xhrFields:{withCredentials: true},
                crossDomain: true,
                data: {
                    "type": vm.activationCode.type,
                    "num": vm.activationCode.num,
                    "state": "commit"
                },
                dataType: 'json',
                success: function(data) {
                    if (data.succ) {
                        //成功 已登录 跳转
                        window.location.href = window.location.origin + "/activation_code.php";
                    }else {
                        vm.activationCode.errorTip = data.retDesc;
                    }
                },
                error: function () {
                    vm.activationCode.errorTip = "处理失败,请重试!";
                }
            });
        },
        //提交激活VIP
        submitActivationModal: function () {
            if (this.activationModal.code == "") {
                this.activationModal.errorTip = "请输入激活码";
                return;
            }

            if (this.activationModal.code.length != 16) {
                this.activationModal.errorTip = "激活码长度不正确";
                return;
            }

            this.activationModal.errorTip = "处理中...";
            var vm = this;
            $.ajax({
                type: 'POST',
                url: 'ajax/activation.php',
                xhrFields:{withCredentials: true},
                crossDomain: true,
                data: {"code": vm.activationModal.code},
                dataType: 'json',
                success: function(data) {
                    if (data.succ) {
                        //成功 已登录 跳转
                        window.location.reload();
                    }else {
                        vm.activationModal.errorTip = data.retDesc;
                    }
                },
                error: function () {
                    vm.activationModal.errorTip = "处理失败,请重试!";
                }
            });
        },
        switchLoginModal: function () {
            if (!this.loginModal.isReg) {
                this.loginModal.isReg = true;
                this.loginModal.title = "注册";
                this.loginModal.switchBtn = "已有账号？去登录"
            }else {
                this.loginModal.isReg = false;
                this.loginModal.title = "登录";
                this.loginModal.switchBtn = "没有账号？去注册"
            }
        },
        //提交注册或登录
        submitLoginModal: function () {
            if (this.loginModal.phone == "" || this.loginModal.pwd == "") {
                this.loginModal.errorTip = "请输入账号和密码";
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
        //微信公众号登陆
        wxSubmitLoginModal: function (name) {
            var vm = this;
            vm.backLogin(name, true);
        },
        backLogin: function (name, status) {
            this.loginModal.errorTip = "处理中...";
            var vm = this;
            $.ajax({
                type: 'POST',
                url: 'ajax/login.php',
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                data: {
                    "phone": name,
                    "pwd": name,
                    "isReg": status,
                },
                dataType: 'json',
                success: function (data) {
                    if (data.succ) {
                        //成功 已登录 跳转
                        sessionStorage.setItem('loginStatus', true);
                        window.location.reload();
                    } else {
                        if (data.retDesc == '账号已存在') {
                            vm.backLogin(name, false);
                        } else {
                        vm.loginModal.errorTip = data.retDesc;
                        }
                    }
                },
                error: function () {
                    vm.loginModal.errorTip = "处理失败,请重试!";
                }
            });
        },
        submit: function (event) {
            if (this.submitBtnClass.disabled) {
                return;
            }

            if (this.link == "") {
                this.errorTip = "请先将视频链接粘贴到上面的输入框";
                return;
            }

            var startIndex = this.link.lastIndexOf("http://");
            startIndex = (startIndex === -1) ? this.link.lastIndexOf("https://") : startIndex;
            if (startIndex === -1) {
                this.errorTip = "请输入正确的视频链接";
                return;
            }

            //去掉前面的中文
            this.link = this.link.substr(startIndex);

	        var endIndex = this.link.indexOf(" ");
            if (endIndex !== -1) {
                this.link = this.link.substring(0, endIndex);
            }

            var reg = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z]{2,5}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
            if (this.link.length < 16 || !reg.test(this.link)) {
                this.errorTip = "请输入正确的视频链接";
                return;
            }

            //清空并隐藏之前的错误提示
            this.errorTip = "";

            //如果是.mp4文件
            if (isMP4File(this.link)) {
                this.isMP4File = true;
                return;
            }

            //解析视频地址
            this.parseVideo();
        },
        parseVideo: function() {
            //服务端处理
            this.submitBtnClass.disabled = true;
            this.requestSuccess = false;
            var vm = this;
            $.ajax({
                type: 'POST',
                url: 'ajax/analyze.php',
                xhrFields:{withCredentials: true},
                crossDomain: true,
                data: {"link": vm.link},
                dataType: 'json',
                success: function(data) {
                    vm.submitBtnClass.disabled = false;
                    if (data.succ) {
                        vm.requestResult = data.data;
                        vm.requestSuccess = true;
                    }else {
                        vm.errorTip = data.retDesc;
                        if (typeof data.retErrorcode !== 'undefined') {
                            if (data.retErrorcode === 2) {
                                window.setTimeout(function() {
                                    $('#activationModal').modal('show');
                                }, 1000);
                            }
                        }
                    }
                },
                error: function () {
                    vm.submitBtnClass.disabled = false;
                    vm.errorTip = "处理失败,请重试!";
                }
            });
        },
        init: function() {
            detectIE();
        },
        clear: function() {
            this.requestSuccess = false;
            this.link = "";
        }
    }
});
app.init();
