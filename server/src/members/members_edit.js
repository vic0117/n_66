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

router.post("/members_edit/:id?", (req, res) => {
  console.log('req.body',req.body.first_name_zh);
  let data = { success: false, msg: { type: "danger", text: "" } };
  const sql = `UPDATE members_list SET first_name_zh= ? WHERE u_id= ${req.params.id}`;
  db.query(sql, [req.body.first_name_zh], (error, results, fields) => {
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
  });
});

module.exports = router;
