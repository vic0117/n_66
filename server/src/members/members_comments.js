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

router.post("/members_comments/:id?", verifyToken, (req, res) => {
  let data = { success: false, msg: { type: "danger", text: "" } };
  // jwt authentication
  jwt.verify(req.token, "secretKey", (err, authData) => {
    if (err) {
      data.msg.text = "權限不足";
      res.json(data);
    } else {
      console.log("req.body", req.body);
      console.log("req.params", req.params);

      //   沒輸入新舊password時;
      //   if (!req.body.password || !req.body.new_password) {
      //     data.msg.text = "資料不足";
      //     res.json(data);
      //   }
      const sql =
        "INSERT INTO comments_list ( u_id,last_name_zh, gender, trip_name, trip_country, rating, reviews) VALUES(?,?,?,?,?,?,?)";
      db.query(
        sql,
        [
          req.body.u_id,
          req.body.last_name_zh,
          req.body.gender,
          req.body.trip_name,
          req.body.trip_country,
          req.body.rating,
          req.body.reviews
        ],
        (error, results, fields) => {
          if (error) throw error;
          console.log(results);
          //   if (results.changedRows === 1) {
          //     data.success = true;
          //     data.msg.type = "primary";
          //     data.msg.text = "修改成功";
          //   } else {
          //     data.msg.text = "資料沒有修改";
          //   }
          res.json(data);
        }
      );
    }
  });
});

module.exports = router;
