安装所需环境：Linux + PHP + Mysql


1：上传此文件夹全部文件到您网站的根目录

2：设置目录属性： ./config 目录需要可读写权限  Linux机器执行命令：chmod -R 777 config/

3: 访问install.php 即：http://您的网站/config/install.php  进行安装


安装过程中，需要填写数据库信息、iiiLab视频解析接口密钥信息；
站点默认以免费模式运行，安装结束后，可登录后台管理界面切换运行模式。

站点运行模式分两种：
免费模式：任务人都可以免费无限制使用（无需登录），此模式下首页不显示[激活VIP]功能
收费模式：用户注册登录后有1次免费试用机会，超出后需购买激活码激活成为会员


管理员账号：13812345678  密码：123456

如果部署的网站域名是 abc.com  且网站部署在根目录

解析页面地址：   http://abc.com/
后台管理地址：   http://abc.com/admin-ms.php
管理员激活码管理地址:    http://abc.com/activation_code.php


在iiiLab充值付费解析接口，iiiLab会分配一个客户ID和密钥：http://www.iiilab.com/article/60
在 http://abc.com/admin-ms.php 配置iiiLab分配的客户ID和密钥
