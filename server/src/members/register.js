const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const db = mysql.createConnection({
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  host: "localhost",
  user: "root",
  password: "root",
  database: "n_66"
});

router.post("/register", function(req, res) {
  let data = { success: false, message: { text: "" } };
  data.body = req.body;
  // 沒輸入email或password時
  if (!req.body.email || !req.body.password) {
    data.message.text = "資料不足";
    res.json(data);
  }

  db.query(
    "SELECT COUNT(*) AS cnt FROM `members_list` WHERE email = ?",
    req.body.email,
    (error, results, fields) => {
      if (error) {
        throw error;
      } else {
        if (results[0].cnt > 0) {
          // Already exist
          console.log("results", results);
          console.log("user already exist!");
        } else {
          const sql =
            "INSERT INTO `members_list` (`email`, `password`) VALUES (?,?)";
          db.query(
            sql,
            [req.body.email, req.body.password],
            (error, results, fields) => {
              if (error) throw error;
              console.log("results: ", results);
              console.log("data.body: ", data.body);
              if (results.affectedRows === 1) {
                data.success = true;
                data.message.text = "新增成功";
              } else {
                data.message.text = "資料沒有新增";
              }
              res.json(data);
            }
          );
        }
      }
    }
  );
});

module.exports = router;
