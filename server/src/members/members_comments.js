const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const bluebird = require("bluebird");
const jwt = require("jsonwebtoken");

const db = mysql.createConnection({
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  host: "localhost",
  user: "root",
  password: "root",
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
// 我的評論
router.get("/members_comments_list/:id?", (req, res) => {
  // console.log("req.params", req.params);
  const sql = "SELECT * FROM `comments_list` WHERE u_id = ?";
  db.query(sql, [req.params.id], (error, results, fields) => {
    if (error) throw error;
    let output = {};
    output.rows = results;
    res.json(output);
  });
}); 

// 發表評論
router.post("/members_comments/:id?", verifyToken, (req, res) => {
  let data = { success: false, msg: { type: "danger", text: "" } };
  // jwt authentication
  jwt.verify(req.token, "secretKey", (err, authData) => {
    if (err) {
      data.msg.text = "權限不足";
      res.json(data);
    } else {
      console.log("req.body", req.body);
      // console.log("req.params", req.params);

      // 沒輸入東西時;
      if (!req.body.reviews) {
        data.msg.text = "資料不足";
        return res.json(data);
      }

      console.log("reviews", req.body.reviews);
      const sql =
        "INSERT INTO comments_list ( u_id,last_name_zh, gender, trip_name, trip_country, trip_start_date,trip_end_date, rating, reviews) VALUES(?,?,?,?,?,?,?,?,?)";
      db.query(
        sql,
        [
          req.body.u_id,
          req.body.last_name_zh,
          req.body.gender,
          req.body.trip_name,
          req.body.trip_country,
          req.body.trip_start_date,
          req.body.trip_end_date,
          req.body.rating,
          req.body.reviews
        ],
        (error, results, fields) => {
          if (error) throw error;
          console.log(results);
          if (results.affectedRows === 1) {
            data.success = true;
            data.msg.type = "primary";
            data.msg.text = "發布成功";
          } else {
            data.msg.text = "發布失敗";
          }
          res.json(data);
        }
      );
    }
  });
});



module.exports = router;