const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const db = mysql.createConnection({
  // socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  host: "localhost",
  user: "root",
  password: "root",
  database: "n_66"
});

router.get("/members_order/:id?", (req, res) => {
  // console.log("req.params", req.params);
  const sql = "SELECT * FROM `order_list` WHERE u_id = ?";
  db.query(sql, [req.params.id], (error, results, fields) => {
    if (error) throw error;
    let output = {};
    output.rows = results;
    
    res.json(output);
  });
});

//是否評論
router.get("/members_order/:u_id?/:id?", (req, res) => {
  // console.log("req.params", req.params);
  const sql = "SELECT * FROM `order_list` WHERE u_id = ? AND order_id = ?";
  db.query(sql, [req.params.u_id, req.params.id], (error, results, fields) => {
    if (error) throw error;
    let output = {};
    output.rows = results;
    // console.log(results);
    res.json(output);
  });
});

router.post("/members_order/:u_id?/:id?", (req, res) => {
  console.log("req.body", req.body.results);
  console.log("req.params.u_id", req.params.u_id);
  console.log("req.params.id", req.params.id);
  const sql = `UPDATE order_list SET order_trip=? WHERE u_id=? AND order_id = ?`;
  db.query(
    sql,
    [req.body.results, req.params.u_id, req.params.id],
    (error, results, fields) => {
      if (error) throw error;
      console.log(results);
      if (results.changedRows === 1) {
        res.json('success')
        console.log("success");
      } else {
        console.log("failed");
      }
    }
  );
});

module.exports = router;
