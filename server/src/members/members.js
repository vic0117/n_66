const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const moment = require("moment-timezone");

const db = mysql.createConnection({
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  host: "localhost",
  user: "root",
  password: "root",
  database: "n_66"
});

router.get("/members", (req, res) => {
  console.log(req.session);
  const sql = "SELECT * FROM `members_list`";
  db.query(sql, (error, results, fields) => {
    if (error) throw error;
    let output = {};
    output.rows = results;
    res.json(output);
  });
});

module.exports = router;
