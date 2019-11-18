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

router.get("/comments", (req, res) => {
  // console.log("req.params", req.params);
  const sql = "SELECT * FROM `comments_list` ";
  db.query(sql, [req.params.id], (error, results, fields) => {
    if (error) throw error;
    let output = {};
    output.rows = results;
    // console.log(results);
    res.json(output);
  });
});

module.exports = router;
