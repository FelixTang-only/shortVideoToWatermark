<?php
include_once "page_common.php";

$typeArr = array(
    1 => '15次',
    2 => '40次',
    3 => '180次',
    4 => '500次',
    5 => '2000次',
);

$statusArr = array(
    1 => '未兑换',
    2 => '已兑换'
);

?>
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="utf-8">
    <title>激活码管理</title>
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
            <a class="navbar-brand" href="/">激活码管理</a>
        </div>

    <div class="navbar-collapse collapse" role="navigation">
        <ul class="nav navbar-nav navbar-right">
            <li><a href="/">首页</a></li>
            <?php
             if (empty($_SESSION['user']['phone'])) {
            ?>
                 <li><a href="javascript:$('#loginModal').modal('show');">登录/注册</a></li>
             <?php } else { ?>
            	 <li><a href="/admin-ds.php">后台管理</a></li>
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
                <?php
                    //如果不是管理员
                    if (empty($_SESSION['user']['user_type']) || $_SESSION['user']['user_type'] != 3) {
                ?>
                   <h4 style="text-align: center;">请以管理员账号<a href="javascript:$('#loginModal').modal('show');">登录</a></h4>

                <?php } else { ?>

                        <h4>批量生成激活码</h4>

                        <div class="form-inline">
                            <div class="form-group">
                                <label for="">类型</label>
                                <select v-model.trim="activationCode.type" class="form-control">
                                    <?php foreach ($typeArr as $k => $v) { ?>
                                    <option value="<?php echo $k; ?>"><?php echo $v; ?></option>
                                    <?php } ?>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="">数目</label>
                                <input v-model.trim="activationCode.num" type="number" class="form-control" value="1">
                            </div>
                            <p v-if="activationCode.errorTip" style="color: red;font-size: 14px;">{{activationCode.errorTip}}</p>
                            <button type="button" class="btn btn-default" @click="submitActivationCodeForm()">生成</button>
                        </div>
                        <!-- <h4>兑换情况查询</h4>

                        <div class="form-inline">
                            <div class="form-group">
                                <label for="">类型</label>
                                <select v-model.trim="activationSearchCode.type" class="form-control">
                                    <?php foreach ($typeArr as $k => $v) { ?>
                                    <option value="<?php echo $k; ?>"><?php echo $v; ?></option>
                                    <?php } ?>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="">兑换状态</label>
                                <input v-model.trim="activationSearchCode.status" type="text" class="form-control" value="未兑换">
                            </div>
                            <p v-if="activationSearchCode.errorTip" style="color: red;font-size: 14px;">{{activationSearchCode.errorTip}}</p>
                            <button type="button" class="btn btn-default" @click="submitactivationSearchCodeForm()">搜索</button>
                        </div> -->

                            <?php
                            //列表查询
                            $db = Db::instance();
                            $pageSize = 20;

                            $total = $db->raw('SELECT count(1) as total from video_activation_code')->fetch(false);
                            $totalPage = ceil($total['total'] / $pageSize);
                            if ($totalPage == 0) {
                                $totalPage = 1;
                            }


                            $currentPage = 1;
                            if (!empty($_GET['page']) && is_numeric($_GET['page'])) {
                                if ($_GET['page'] < 1) {
                                    $currentPage = 1;
                                }else if ($_GET['page'] > $totalPage) {
                                    $currentPage = $totalPage;
                                }else {
                                    $currentPage = intval($_GET['page']);
                                }
                            }

                            $offset = $pageSize * ($currentPage - 1);
                            $result = $db->raw('SELECT c.activation_code, c.type, c.status, c.exchange_time, c.add_time, u.phone 
from video_activation_code c
LEFT JOIN video_user u on c.user_id = u.id
ORDER BY c.id DESC 
LIMIT '. $offset .','. $pageSize)->all(false);
                            ?>


                        <h4 style="margin-top:30px;">激活码列表<small>（共<?php echo $total['total'];?>条记录）</small></h4>


                        <table class="table table-bordered">
                            <thead>
                            <tr>
                                <th>激活码</th>
                                <th>类型</th>
                                <th>创建时间</th>
                                <th>状态</th>
                                <th>激活时间</th>
                                <th>激活用户</th>
                            </tr>
                            </thead>
                            <tbody>

                            <?php foreach ($result as $item) { ?>
                            <tr>
                                <td><?php echo $item['activation_code'];?></td>
                                <td><?php echo $typeArr[$item['type']];?></td>
                                <td><?php echo dateFormat($item['add_time']);?></td>
                                <td><?php echo $statusArr[$item['status']];?></td>
                                <td><?php echo dateFormat($item['exchange_time']);?></td>
                                <td><?php echo $item['phone'];?></td>
                            </tr>
                            <?php } ?>


                            </tbody>
                        </table>




                        <?php if ($totalPage > 1) { ?>
                            <nav aria-label="Page navigation" style="float: right;">
                                <ul class="pagination">
                                    <?php if ($currentPage != 1) { ?>
                                        <li>
                                            <a href="activation_code.php?page=<?php echo $currentPage-1; ?>" aria-label="Previous">
                                                <span aria-hidden="true">上一页</span>
                                            </a>
                                        </li>
                                    <?php } ?>
                                    <?php if ($currentPage != $totalPage) { ?>
                                        <li>
                                            <a href="activation_code.php?page=<?php echo $currentPage+1; ?>" aria-label="Next">
                                                <span aria-hidden="true">下一页</span>
                                            </a>
                                        </li>
                                    <?php } ?>
                                </ul>
                            </nav>
                        <?php } ?>

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
                            <label for="phone" class="control-label">账号:</label>
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


    <div class="modal fade" id="userModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="exampleModalLabel">用户信息</h4>
                </div>

                <div class="modal-body">
                    <h5>账号：<?php echo $_SESSION['user']['phone']; ?></h5>
                    <!-- <h5>VIP到期时间：<?php if(empty($_SESSION['user']['vip_expire_time'])) { echo "未激活"; } else { echo  dateFormat($_SESSION['user']['vip_expire_time']); } ?></h5> -->
                    <h5>VIP剩余使用次数：<?php if(empty($_SESSION['user']['number_of_use'])) { echo "未激活"; } else { echo  $_SESSION['user']['number_of_use']; } ?></h5>
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
<script src="static/js/site.js?v6"></script>
</body>
</html>
