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

// router.get("/login", (req, res) => {
//   const data = {};
//   if (req.session.flashMsg) {
//     data.flashMsg = req.session.flashMsg;
//     delete req.session.flashMsg;
//   }
//   data.loggedIn = req.session.loggedIn;
//   data.email = req.session.email;
//   console.log(data);
//   res.json(data);
// });

router.post("/login", (req, res) => {
  const data = {};
  let sql = "SELECT * FROM members_list WHERE email=? AND password=?";
  if (req.body.email && req.body.password) {
    db.query(
      sql,
      [req.body.email, req.body.password],
      (error, results, fields) => {
        if (results.length > 0) {
          // 有撈到資料
          req.session.loggedIn = true;
          req.session.email = req.body.email;
          req.session.success = true;
          req.session.flashMsg = "登入成功!";
          // 存東西在session中的方法
          req.session.first_name_zh = results[0].first_name_zh;
          console.log("success", req.session);
          console.log("results", results);
          res.json(req.session);
          //   res.redirect("/login"); //給老師看的時候把這個註解回來
          // res.redirect('/member_list')
        } else {
          req.session.flashMsg = "不正確的帳號或密碼!";
          console.log("wrong password", req.session);
          res.json(req.session);
        }
      }
    );
  } else {
    req.session.flashMsg = "請輸入電子信箱及密碼";
    res.json(req.session);
  }
});

// router.post("/login", (req, res) => {

//   db.query(
//     "SELECT * FROM members_list WHERE email = ?",
//     [req.body.email],
//     (error, results, fields) => {
//       if (error) throw error;
//       console.log(results);
//       if (results.length > 0) {
//         if (results[0].password === req.body.password) {
//           res.json(results);
//         } else {

//         }
//       }
//     }
//   );
// });

module.exports = router;
