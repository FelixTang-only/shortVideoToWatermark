<?php
session_start();

//清空Session和Cookie
session_destroy();
setcookie("video_user", "", time()-3600, "/");

Header("Location:/");
