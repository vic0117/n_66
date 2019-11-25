const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const upload = multer({ dest: "tmp_uploads/" });
const fs = require("fs");
const bluebird = require("bluebird");

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
// 顯示會員資料
router.get("/members/:id?", (req, res) => {
  // console.log("req.params", req.params);
  const sql = "SELECT * FROM `members_list` WHERE u_id = ?";
  db.query(sql, [req.params.id], (error, results, fields) => {
    if (error) throw error;
    let output = {};
    output.rows = results;
    // console.log(results);
    res.json(output);
  });
});

// 修改會員資料
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

// 更改會員頭像
router.post(
  "/members_upload_file/:id?",
  verifyToken,
  upload.single("my_file"),
  (req, res) => {
    let data = { success: false, msg: { type: "danger", text: "" } };
    jwt.verify(req.token, "secretKey", (err, authData) => {
      if (err) {
        data.msg.text = "權限不足";
        res.json(data);
      } else {
        // console.log("req.file", req.file)
        if (req.file && req.file.originalname) {
          if (/\.(jpg|jpeg|png)$/i.test(req.file.originalname)) {
            fs.createReadStream(req.file.path).pipe(
              fs.createWriteStream("./public/images/" + req.file.originalname)
            );
          }
        }

        const sql = `UPDATE members_list SET avatar=? WHERE u_id= ${req.params.id}`;
        db.query(sql, [req.file.originalname], (error, results, fields) => {
          if (error) throw error;
          console.log(results);
          if (results.changedRows === 1) {
            data.success = true;
            data.msg.type = "primary";
            data.msg.text = "修改成功";
          } else {
            data.success = false;
            data.msg.text = "圖片沒有修改";
          }
          res.json(data);
        });
      }
    });
  }
);

// 修改會員密碼

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
