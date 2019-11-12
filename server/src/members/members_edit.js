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
  console.log("req.body", req.body.first_name_zh);
  let data = { success: false, msg: { type: "danger", text: "" } };
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
});

module.exports = router;
