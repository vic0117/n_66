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

router.get("/trips", (req, res) => {
  const sql = "SELECT * FROM `trip_list`";
  db.query(sql, (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify(results))
  });
});

module.exports = router;
