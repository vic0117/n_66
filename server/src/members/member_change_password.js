const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const bluebird = require("bluebird");

const db = mysql.createConnection({
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  host: "localhost",
  user: "root",
  password: "root",
  database: "n_66"
});

bluebird.promisifyAll(db);

router.post("/members_change_password/:id?", (req, res) => {
  console.log("req.body", req.body.password);
  let data = { success: false, msg: { type: "danger", text: "" } };

  //   沒輸入新舊password時;
  if (!req.body.password || !req.body.new_password) {
    data.msg.text = "資料不足";
    res.json(data);
  }

  const sql_r = `SELECT COUNT(*) AS cnt FROM members_list WHERE password=${req.body.password} AND u_id= ${req.params.id}`;
  db.queryAsync(sql_r)
    .then(results => {
      if (results[0].cnt > 0) {
        console.log("results", results);
        const sql_c = `UPDATE members_list SET password=? WHERE u_id= ${req.params.id}`;
        return db.queryAsync(sql_c, [req.body.new_password]);
        // res.json("成功找到密碼");
      }
      data.success = false;
      data.msg.text = "密碼錯誤";
      res.json(data);
    })
    .then(results => {
      if (results.changedRows === 1) {
        data.success = true;
        data.msg.text = "修改成功";
        res.json(data);
      } else {
        data.success = false;
        data.msg.text = "修改失敗";
        res.json(data);
      }
    });
});

module.exports = router;
