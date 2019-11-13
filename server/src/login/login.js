const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const jwt = require("jsonwebtoken");
// const bluebird = require("bluebird");

const db = mysql.createConnection({
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  host: "localhost",
  user: "root",
  password: "root",
  database: "n_66"
});

router.post("/login", (req, res) => {
  const user = { loggedIn: false };
  console.log(req.body);
  let sql = "SELECT * FROM members_list WHERE email=? AND password=?";
  if (req.body.email && req.body.password) {
    db.query(
      sql,
      [req.body.email, req.body.password],
      (error, results, fields) => {
        if (results.length > 0) {
          // 有撈到資料
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
        } else {
          user.msg = "不正確的帳號或密碼!";
          //   jwt.sign({ user }, "secreteKey", (err, token) => {
          //     res.json({
          //       token
          //     });
          //   });
          res.json(user);
          console.log(user);
        }
      }
    );
  } else {
    user.msg = "請輸入電子信箱及密碼";
    // jwt.sign({ user }, "secreteKey", (err, token) => {
    //   res.json({
    //     token
    //   });
    // });
    res.json(user);
  }
});

// router.post("/login", (req, res) => {
//   let sql = "SELECT * FROM members_list WHERE email=? AND password=?";
//   if (req.body.email && req.body.password) {
//     db.query(
//       sql,
//       [req.body.email, req.body.password],
//       (error, results, fields) => {
//         if (results.length > 0) {
//           // 有撈到資料
//           req.session.loggedIn = true;
//           req.session.u_id = results[0].u_id;
//           req.session.email = req.body.email;
//           req.session.msg = "登入成功!";
//           // 存東西在session中的方法
//           //   req.session.first_name_zh = results[0].first_name_zh;
//           console.log("success", req.session);
//           console.log("results", results);
//           res.json(req.session);
//         } else {
//           req.session.msg = "不正確的帳號或密碼!";
//           console.log("wrong password", req.session);
//           res.json(req.session);
//         }
//       }
//     );
//   } else {
//     req.session.msg = "請輸入電子信箱及密碼";
//     res.json(req.session);
//   }
// });

module.exports = router;
