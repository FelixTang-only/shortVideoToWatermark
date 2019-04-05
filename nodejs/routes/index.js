const express = require('express');
//const redis = require("redis");
const router = express.Router();
//var client = redis.createClient();

/* GET home page. */
router.get('/', (req, res) => {
  res.send('here is home!');
  //写入JavaScript(JSON)对象
/*  client.hmset('sessionid', {
    username: 'kris',
    password: 'password'
  }, function (err) {
    console.log(err)
  })

  //读取JavaScript(JSON)对象
  client.hgetall('sessionid', function (err, object) {
    console.log(object)
  })

  //删除
  client.hdl('sessionid'); */
  res.end();
});

module.exports = router;
