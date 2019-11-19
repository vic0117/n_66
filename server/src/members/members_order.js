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


router.get("/members_order/:id?", (req, res) => {
    // console.log("req.params", req.params);
    const sql = "SELECT * FROM `order_list` WHERE u_id = ?";
    db.query(sql, [req.params.id], (error, results, fields) => {
        if (error) throw error;
        let output = {};
        output.rows = results;
        // console.log(results);
        res.json(output);
    });
});


// rouer.post("/members_order/addcomment/:id",(req,res)=> {

// })

module.exports = router;
