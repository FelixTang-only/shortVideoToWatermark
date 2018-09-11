<?php

class ConfigData
{

    private static $template = array(
        "iiiLab_client" => "",
        "iiiLab_clientSecretKey" => "",
        "chargeType" => 0
    );


    private static $empty_ad_data = "[]";


    /**
     * @param $data
     * @return bool 更新成功 true  更新失败 false
     */
    public static function updateConfigData($data) {
        //创建文件
        if (!file_put_contents(self::getIniFile(), serialize($data))) {
            return false;
        }
        return true;
    }

    public static function getConfigData()
    {
        if (!file_exists(self::getIniFile())) {
            //创建文件
            if (!file_put_contents(self::getIniFile(), serialize(self::$template))) {
                exit("<span style='color: red;font-size: x-large;'>Please confirm whether the config directory has read and write permissions, please contact the webmaster.</span>");
            }
        }

        return unserialize(file_get_contents(self::getIniFile()));
    }

    /**
     * @return string
     */
    public static function getIniFile()
    {
        return __DIR__ . "/config.ini";
    }



    public static function updateAdData($data)
    {
        //创建文件
        if (!file_put_contents(self::getAdFile(), $data)) {
            return false;
        }
        return true;
    }

    public static function getAdData()
    {
        //创建文件
        if (!file_exists(self::getAdFile())) {
            //创建文件
            if (!file_put_contents(self::getAdFile(), self::$empty_ad_data)) {
                exit("<span style='color: red;font-size: x-large;'>Please confirm whether the config directory has read and write permissions, please contact the webmaster.</span>");
            }
        }

        return file_get_contents(self::getAdFile());
    }

    /**
     * @return string
     */
    public static function getAdFile()
    {
        return __DIR__ . "/ad.ini";
    }
}
