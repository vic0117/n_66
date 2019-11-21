const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const db = mysql.createConnection({
  // socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  host: "localhost",
  user: "root",
  password: "",
  database: "n_66"
});

router.get("/members_wish_list/:id?", (req, res) => {
  // console.log("req.params", req.params);
  const sql = "SELECT * FROM `wish_list` WHERE u_id = ?";
  db.query(sql, [req.params.id], (error, results, fields) => {
    if (error) throw error;
    let output = {};
    output.rows = results;
    res.json(output);
  });
});

module.exports = router;
