const express = require('express');
// const redis = require("redis");
const router = express.Router();
// const client = redis.createClient();

router.post('/newbonus', (req, res) => {
  res.json({
    "Data": [],
    "ErrorCode": 1,
    "ErrorMsg": "成功"
  });
  //读取JavaScript(JSON)对象
  // client.hgetall('sessionid', function (err, object) {
  //   console.log(object)
  // })
  res.end();
});

module.exports = router;
