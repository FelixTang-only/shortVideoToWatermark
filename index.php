<?php
include_once "page_common.php";
require './config/ConfigData.php';
$config = ConfigData::getConfigData();
$adData = json_decode(ConfigData::getAdData(), true);
?>
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="utf-8">
    <title>全网视频解析下载</title>
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
            <a class="navbar-brand" href="/">全网视频解析下载</a>
        </div>
        <div class="navbar-collapse collapse" role="navigation">
            <ul class="nav navbar-nav navbar-right">
                <?php if ($config['chargeType'] == 1) { ?>
                    <li><a href="javascript:$('#activationModal').modal('show');">激活VIP</a></li>
                <?php } ?>
                <?php
                 if (empty($_SESSION['user']['phone'])) {
                ?>
                     <li><a href="javascript:$('#loginModal').modal('show');">登录/注册</a></li>
                 <?php } else { ?>
                     <li><a href="javascript:$('#userModal').modal('show');"><?php echo addAsterisk($_SESSION['user']['phone']); ?></a></li>
                <?php } ?>
            </ul>
        </div>
    </div>
</div>

<div class="container" id="app" style="margin-top: 70px;">
    <div class="row">
        <div class="col-md-12">

            <div style="margin-bottom: 20px;">
                <p>关于本站:</p>
                <ol>
                    <li>支持解析<b>快手</b>、<b>抖音</b>、<b>火山</b>、<b>今日头条</b>、<b>西瓜视频</b>、<b>微博</b>、<b>秒拍</b>、<b>小咖秀</b>、<b>晃咖</b>、<b>微视</b>、<b>美拍</b>、<b>网易云音乐</b>、<b>muse(musical.ly)</b>、<b>Flipagram</b>、<b>陌陌</b>、<b>映客</b>、<b>小影</b>、<b>阳光宽频</b>等平台的视频</li>
                    <li>解析出来的部分网站视频没有水印</li>
                </ol>

                <p>使用方法:</p>
                <ol>
                    <li>打开视频APP，点开某个视频，点击分享按钮，在分享弹框中点击复制链接或通过分享到微信QQ等获取分享链接</li>
                    <li>将刚才复制的链接粘贴到下面的输入框</li>
                </ol>
            </div>

            <div class="input-group input-group-lg" style="margin-bottom: 10px;">
                <input v-model.trim="link" @keyup.enter="submit" type="text" class="form-control link-input" placeholder="请将APP里复制的视频链接粘贴到这里">
                  <div class="input-group-btn">
                      <div v-cloak v-if="showClearBtn" @click="clear()" class="btn-clear"></div>
                      <button class="btn btn-default" :class="submitBtnClass" type="button" @click="submit()">解析视频</button>
                  </div>
            </div>

            <div v-cloak v-if="errorTip" style="text-align: center;" class="alert alert-danger" role="alert">{{errorTip}}</div>

            <div v-cloak v-if="submitBtnClass.disabled" style="text-align: center;"><img src="static/img/loading.gif" style="width: 50px;height: 50px;"></div>

            <div v-cloak v-if="isMP4File">
                <div class="thumbnail">
                    <div class="caption" style="padding:5px 0 0;">
                        <p style="text-align: center;">您输入的链接是个视频文件, 请直接点击下载.</p>
                        <p style="text-align: center;">
                            <a target="_blank" rel="noreferrer" :href="link" class="btn btn-success" download="video_iiilab.mp4">下载</a>
                            <a href="javascript:void(0);" @click="clear()" class="btn btn-danger" style="margin:0 2px 4px;">清空</a>
                        </p>
                    </div>
                </div>
            </div>

            <div v-cloak v-if="requestSuccess">
                <div class="thumbnail">
                    <div class="caption" style="padding:5px 0 0;">
                        <p style="text-align: center;">
                            <a v-if="requestResult.video" target="_blank" rel="noreferrer" :href="requestResult.video" class="btn btn-success" download="video_iiilab.mp4">下载视频</a>
                            <a target="_blank" rel="noreferrer" :href="requestResult.cover" class="btn btn-info" download="video_iiilab.jpg">视频封面</a>
                        </p>
                        <p style="text-align: center;">
                            <a href="javascript:void(0);" @click="clear()" class="btn btn-danger">清空</a>
                        </p>
                    </div>
                </div>
            </div>

	  <?php if (!empty($adData)) { ?>
                <div style="margin-top: 20px;">
                    <p style="text-align:center;margin-bottom:5px;">

                        <?php
                            function adText($key, $val) {
                                $str = '';
                                if ($key > 0) {
                                    $str .= '&nbsp;';
                                }
                                $str .= '<a href="' . $val['link'] . '" target="_blank"  style="color:' . $val['fontColor'] . ';';
                                if (!empty($val['backgroundColor'])) {
                                    $str .= 'background-color:' . $val['backgroundColor'] . ';';
                                }
                                $str .= 'text-decoration:underline;">';
                                if ($val['bold'] == 'yes') {
                                    $str .= '<b>';
                                }
                                $str .= $val['text'];
                                if ($val['bold'] == 'yes') {
                                    $str .= '</b>';
                                }
                                $str .= '</a>';
                                return $str;
                            }

                        foreach($adData as $key => $val) {
                            echo adText($key, $val);
                        } ?>
                        <span style="background-color:#fff;border-radius:3px;color:#337ab7;display:inline-block;font-size:11px;border:1px solid #337ab7;padding:1px 3px 0 2px;line-height:11px;vertical-align:text-bottom;">广告</span>
                    </p>
                </div>
            <?php } ?>

            <div style="margin-top: 20px;">
                <p>常见疑问:</p>
                <ol style="word-break: break-all;">
                    <li>Android手机上可以用吗？</li>
                    <p class="alert alert-info">可以的，Android手机在常用的Chrome、UC、360、QQ等浏览器上都可以很方便的使用本站。</p>
                    <li>iOS设备（iPhone、iPad、iPod）上点击下载视频按钮后，跳转到视频页面，并没有直接下载，怎么办？</li>
                    <p class="alert alert-info">因Safari及微信内置浏览器均不支持下载文件，所以保存视频需要借助第三方App来完成下载，建议iOS用户在App Store下载免费的Documents 6，然后在Documents的内置浏览器中使用本站，可以完美下载视频，并且Documents支持将下载的视频移到手机相册。参考: <a href="http://www.jianshu.com/p/76191cf99db9" target="_blank" onclick="ga('send', 'event', 'outlink', 'iPhone-Documents')">iPhone上利用Documents下载和管理视频教程</a></p>
                    <li>我在电脑上用的是IE浏览器，点下载视频按钮后，出现跟上面那用iPad的哥们一样的情况，跳转到视频页面，如何下载到本地呢？</li>
                    <p class="alert alert-info">电脑上少数浏览器不支持直接下载，但可以在下载视频按钮上点击右键，然后选择"目标另存为"或"链接存储为"来下载视频；或者到跳转后的视频页面，在视频画面上点击右键，然后选择"视频另存为"来下载视频。当然，我们更推荐在电脑上使用如谷歌Chrome浏览器、360浏览器极速模式、QQ浏览器极速模式等现代浏览器来获得最佳上网体验。</p>
                </ol>
            </div>

            <div style="text-align: center;margin-top: 20px;">
                <p style="font-size: 13px;color: #999;">视频归相关网站及作者所有，本站不存储任何视频及图片。</p>
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
                            <input type="password" class="form-control" id="password" v-model.trim="loginModal.pwd2">
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



    <div class="modal fade" id="activationModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="exampleModalLabel">激活VIP</h4>
                </div>

                <div class="modal-body">
                    <label>激活码购买</label>
                    <ul>
                        <li>客服QQ：162385</li>
                        <li>天卡  <a href="http://www.baidu.com" target="_blank">点击购买</a></li>
                        <li>50元/月 包月价</li>
                        <li>500元/年 单人包年价</li>
                        <li>2000元/年 团队包年价（支持多人登陆）</li>
                    </ul>

                    <form>
                        <div class="form-group">
                            <label for="code" class="control-label">激活码:</label>
                            <input type="text" class="form-control" id="code" v-model.trim="activationModal.code">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <p v-if="activationModal.errorTip" style="color: red;font-size: 14px;">{{activationModal.errorTip}}</p>
                    <button type="button" class="btn" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-success" @click="submitActivationModal()">确认激活</button>
                </div>


            </div>
        </div>
    </div>





    <div class="modal fade" id="userModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="exampleModalLabel">用户信息</h4>
                </div>

                <div class="modal-body">
                    <h5>手机号：<?php echo $_SESSION['user']['phone']; ?></h5>
                    <h5>VIP到期时间：<?php if(empty($_SESSION['user']['vip_expire_time'])) { echo "未激活"; } else { echo dateFormat($_SESSION['user']['vip_expire_time']); } ?></h5>
                    <h5>用户类型：<?php echo $userType[$_SESSION['user']['user_type']]; ?></h5>
                </div>
                <div class="modal-footer">
                    <a href="logout.php" type="button" class="btn btn-danger" >退出</a>
                    <button type="button" class="btn btn-info" data-dismiss="modal">关闭</button>
                </div>
            </div>
        </div>
    </div>



</div>




<script src="http://apps.bdimg.com/libs/jquery/2.0.0/jquery.min.js"></script>
<script src="http://apps.bdimg.com/libs/bootstrap/3.3.4/js/bootstrap.min.js"></script>
<script src="static/js/vue.min.js"></script>
<script src="static/js/site.js?v5"></script>
</body>
</html>
