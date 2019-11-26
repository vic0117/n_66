const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const bluebird = require("bluebird");
const jwt = require("jsonwebtoken");

const db = mysql.createConnection({
  // socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  host: "localhost",
  user: "root",
  password: "root",
  database: "n_66"
});

bluebird.promisifyAll(db);

router.post("/register", (req, res) => {
  let user = { loggedIn: false, msg: "" };
  // 沒輸入email或password時
  if (!req.body.email || !req.body.password) {
    user.msg = "資料不足";
    res.json(user);
  }

  const sql_r = "SELECT COUNT(*) AS cnt FROM`members_list` WHERE email = ?";
  db.queryAsync(sql_r, [req.body.email])
    .then(results => {
      if (results[0].cnt > 0) {
        // email already exist
        console.log("results", results);
        user.msg = "此電子信箱已被使用";
        res.json(user);
      }
      const sql_i =
        "INSERT INTO `members_list` (`email`, `password`) VALUES (?,?)";
      return db.queryAsync(sql_i, [req.body.email, req.body.password]);
    })
    .then(results => {
      // 註冊成功
      if (results.affectedRows === 1) {
        user.loggedIn = true;
        user.msg = "註冊成功";
        // res.json(user);
        const sql_r_1 = "SELECT * FROM`members_list` WHERE email = ?";
        return db.queryAsync(sql_r_1, [req.body.email]);
      } else {
        user.msg = "註冊失敗";
        res.json(user);
      }
    })
    .then(results => {
      // 註冊成功, 轉成jwt
      if (results.length > 0) {
        user.loggedIn = true;
        user.msg = "登入成功";
        user.u_id = results[0].u_id;
        user.email = results[0].email;
        jwt.sign({ user }, "secretKey", (err, token) => {
          res.json({
            token: token,
            loggedIn: true
          });
        });
      }
    })
    .catch(error => {
      console.log("sql error", error);
    });
});

module.exports = router;
