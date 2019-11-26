const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const bluebird = require("bluebird");
const jwt = require("jsonwebtoken");

const db = mysql.createConnection({
  // socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  host: "localhost",
  user: "root",
  password: "",
  database: "n_66"
});

bluebird.promisifyAll(db);

function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers["authorization"];
  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space
    const bearer = bearerHeader.split(" ");
    // Get Token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    //Forbidden
    res.json("forbidden");
  }
}

router.post("/members_change_password/:id?", verifyToken, (req, res) => {
  let data = { success: false, msg: { type: "danger", text: "" } };
  // jwt authentication
  jwt.verify(req.token, "secretKey", (err, authData) => {
    if (err) {
      data.msg.text = "權限不足";
      res.json(data);
    } else {
      console.log("req.body", req.body.password);

      //   沒輸入新舊password時;
      if (!req.body.password || !req.body.new_password) {
        data.msg.text = "資料不足";
        res.json(data);
      }

      const sql_r =
        "SELECT COUNT(*) AS cnt FROM members_list WHERE password=? AND u_id=?";
      db.queryAsync(sql_r, [req.body.password, req.params.id])
        .then(results => {
          if (results[0].cnt > 0) {
            console.log("results", results);
            const sql_c = `UPDATE members_list SET password=? WHERE u_id= ${req.params.id}`;
            return db.queryAsync(sql_c, [req.body.new_password]);
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
    }
  });
});

module.exports = router;
