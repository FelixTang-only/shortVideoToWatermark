var express = require('express');
var router = express.Router();

var OAuth = require('wechat-oauth');
var client = new OAuth('wx8cd9a9dc1a443fa1', '78dc03e8e9929d05f574d5a15aa311a6');

/* GET users listing. */
router.get('/', function (req, res, next) {
    var domain = "http://v.crazy-dog.cn"
    var auth_callback_url = domain + "/oauth/callback"
    var url = client.getAuthorizeURL(auth_callback_url, '', 'snsapi_userinfo');
   // console.log(url);
    // 重定向请求到微信服务器
    /* const a = url.split('.cn')[0];
    const b = ':3000'+url.split('.cn')[1];
    const c = a+b;
    console.log(c);*/
    // 重定向请求到微信服务器
    res.redirect(url);
});

router.get('/callback', function (req, res, next) {
    var code = req.query.code;
    client.getAccessToken(code, function (err, result) {
        console.log(result)
        var accessToken = result.data.access_token;
        var openid = result.data.openid;

        client.getUser(openid, function (err, result) {
            var userInfo = result;
            // save or other opration
            res.json(userInfo)
        });
    });
});

module.exports = router;
