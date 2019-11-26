const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const jwt = require("jsonwebtoken");

const db = mysql.createConnection({
  // socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  host: "localhost",
  user: "root",
  password: "root",
  database: "n_66"
});

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

router.post("/members_edit/:id?", verifyToken, (req, res) => {
  let data = { success: false, msg: { type: "danger", text: "" } };
  jwt.verify(req.token, "secretKey", (err, authData) => {
    if (err) {
      data.msg.text = "權限不足";
      res.json(data);
    } else {
      console.log("req.body", req.body.first_name_zh);
      const sql = `UPDATE members_list SET first_name_zh=?,last_name_zh=?, first_name_en=?, last_name_en=?, gender=?, bday_year=?, bday_month=?, bday_date=?, passport=?, zip_code=?, address =?, tel=? WHERE u_id= ${req.params.id}`;
      db.query(
        sql,
        [
          req.body.first_name_zh,
          req.body.last_name_zh,
          req.body.first_name_en,
          req.body.last_name_en,
          req.body.gender,
          req.body.bday_year,
          req.body.bday_month,
          req.body.bday_date,
          req.body.passport,
          req.body.zip_code,
          req.body.address,
          req.body.tel
        ],
        (error, results, fields) => {
          if (error) throw error;
          console.log(results);
          if (results.changedRows === 1) {
            data.success = true;
            data.msg.type = "primary";
            data.msg.text = "修改成功";
          } else {
            data.msg.text = "資料沒有修改";
          }
          res.json(data);
        }
      );
    }
  });
});

module.exports = router;
