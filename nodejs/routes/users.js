const express = require('express');
const URL = require('url');

const router = express.Router();
const select = require('../sql_connect.js');

/* GET users listing. */
router.get('/getData', (req, res) => {
  // res.send('respond with a resource');
  const params = URL.parse(req.url, true).query;
  if (params.id === '1') {
    select(`test`, 'SELECT * FROM user')
      .then((data) => {
        res.json({
          status: 1,
          data,
        });
        res.end();
      }).catch((err) => {

      });
  } else {
    res.send('nothing！');
  }
});
router.post('/delect', (req, res) => {
  if (req.body.user) {
    select(`test`,`DELETE FROM user WHERE name = "${req.body.user}"`)
      .then(() => {
        res.json({
          status: 1,
          msg: '删除成功',
        });
        res.end();
      }).catch(() => {});
  }
});
router.post('/update', (req, res) => {
  if (req.body.user) {
    select(`test`,`UPDATE user SET name = "${req.body.newUser}" WHERE name = "${req.body.user}"`)
      .then(() => {
        res.json({
          status: 1,
          msg: '修改成功',
        });
        res.end();
      }).catch(() => {});
  }
});
router.post('/', (req, res) => {
  const response = {
    status: 1,
    msg: '添加成功！',
  };
  if (req.body.id && req.body.user && req.body.password) {
    select(`test`,`INSERT INTO user(name,password,id) VALUES ("${req.body.user}", "${req.body.password}", "${req.body.id}");`)
      .then(() => {
        res.json(response);
        res.end();
      }).catch(() => {});
  } else {
    res.send('nothing！');
  }
});

module.exports = router;
