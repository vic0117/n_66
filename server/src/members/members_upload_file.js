const express = require("express");
const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const upload = multer({ dest: "tmp_uploads/" });
const fs = require("fs");
const router = express.Router();

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
module.exports = router;
