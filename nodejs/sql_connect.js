/**
 * Created by huygo on 2018/6/1.
 */
const mysql = require('mysql');
module.exports = function select(name, sql) {
  const promise = new Promise(function (resolve, reject) {
    const connection = mysql.createConnection({
      host: 'localhost',
      port: '8889', //本地
      user: 'root',
      // password: 'wen.4879498',//线上
      password: 'root', //本地
      database: name
    });

    connection.connect();
    // connection.query("USE test");
    connection.query(sql, function (err, results, fields) {
      console.log(sql);
      if (err) {
        console.log("sql err");
        select('test', 'INSERT INTO log(run_sql,time) VALUES ("' + err + '", "' + new Date().toLocaleString() + '");')
        reject(err);
      } else {
        console.log("sql success");
        if (results.length > 0) {
          resolve(results);
        } else {
          resolve([]);
        }
      }
    });
    connection.end();
  });

  return promise;
};
