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

router.post("/register", function(req, res) {
  const sql = "INSERT INTO `members_list` (`email`, `password`) VALUES (?,?)";
  db.query(
    sql,
    [req.body.email, req.body.password],
    (error, results, fields) => {
      if (error) throw error;
      console.log("results", results);
      res.json(results);
    }
  );
});

module.exports = router;
