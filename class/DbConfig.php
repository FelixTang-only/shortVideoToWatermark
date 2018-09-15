<?php
require 'Db.php';
require __DIR__ . '/../config/dbconfig.php';
Db::config( 'driver',   'mysql' );
Db::config( 'host',     DB_HOST);  //数据库host
Db::config( 'database', DB_NAME);   //数据库名称
Db::config( 'user',     DB_USER);  //数据库用户
Db::config( 'password', DB_PWD);  //数据库密码
Db::config( 'port',     DB_PORT);  //数据库端口


//https://github.com/adriengibrat/Simple-Database-PHP-Class
