<?php
require 'Db.php';
Db::config( 'driver',   'mysql' );
Db::config( 'host',     '172.17.27.76'  );  //数据库host
Db::config( 'database', 'iiilab' );   //数据库名称
Db::config( 'user',     'iiilabremote');  //数据库用户
Db::config( 'password', 'sqlmylabiii'  );  //数据库密码

//https://github.com/adriengibrat/Simple-Database-PHP-Class
