const express = require("express");
const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const upload = multer({ dest: "tmp_uploads/" });
const fs = require("fs");
const router = express.Router();

const db = mysql.createConnection({
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  host: "localhost",
  user: "root",
  password: "root",
  database: "n_66"
});

router.post(
  "/members_upload_file/:id?",
  upload.single("my_file"),
  (req, res) => {
    let data = { success: false, msg: { type: "danger", text: "" } };
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
);
module.exports = router;
