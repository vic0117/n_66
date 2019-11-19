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

router.delete("/members_wish_list_del/:id?", (req, res) => {
  console.log("req.params", req.params);
  const sql = `DELETE FROM wish_list WHERE w_id=${req.params.id};`;
  db.query(sql, (error, results, fields) => {
    if (error) throw error;
    let output = {};
    output.rows = results;
    res.json(output);
  });
});

module.exports = router;
