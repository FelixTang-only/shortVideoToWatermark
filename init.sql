CREATE TABLE `video_user` (
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
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='用户信息表';


CREATE TABLE `video_activation_code` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `activation_code` char(16) NOT NULL COMMENT '激活码',
  `type` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1: 1天  2: 30天  3:单人365天 4：团队365天',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1: 未兑换  2：已兑换',
  `user_id` int(11) DEFAULT NULL COMMENT '兑换用户ID',
  `exchange_time` int(11) DEFAULT NULL COMMENT '兑换时间',
  `add_time` int(11) NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `activation_code` (`activation_code`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='激活码表';


INSERT INTO video_user (phone, password, user_type, experience_used, vip_expire_time, last_login_session_id, add_time) VALUES ('13812345678', 'e10adc3949ba59abbe56e057f20f883e', 3, 0, null, null, 1524759425);





