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
// [req.params.id]
router.get("/comments", (req, res) => {
  // console.log("req.params", req.params);
  const sql = "SELECT * FROM `comments_list` ";
  db.query(sql, (error, results, fields) => {
    if (error) throw error;
    // console.log(results);
    res.send(JSON.stringify(results));
  });
});

router.post("/comments/select", (req, res, next) => {
  let place = req.body.place;
  console.log(place);
  let where1 = "";
  if (place) {
    where1 += " AND `trip_country` = " + `'${place}'`;
    if (place == "所有目的地") {
      where1 = "";
	 }
	}
    const sql = `SELECT * FROM comments_list WHERE c_id>0 ${where1}`;
    console.log(sql);
    db.query(sql, (err, results, fields) => {
      if (err) throw err;
      //  console.log(results)
      res.send(JSON.stringify(results));
    });
});

module.exports = router;
