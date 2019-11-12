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
   
//細節
router.get('/trips/:id',(req,res,next)=>{
	let id=req.params.id;
	 
	const sql=`SELECT * FROM trip_list WHERE sid=${id}`
	db.query(sql,(err,results,fields)=>{
		 if(err) throw err; 
		//  console.log(results) 
		 res.send(JSON.stringify(results))
	}) 
});
//搜尋
router.post('/trips/search',(req,res,next)=>{
	let data2 = JSON.parse(req.body.data2)  
	
	const sql=`SELECT * FROM trip_list WHERE trip_name LIKE %${data2}%`
	db.query(sql,(err,results,fields)=>{
		 if(err) throw err; 
		//  console.log(results) 
		 res.send(JSON.stringify(results))
	}) 
});
  
//依照價格排列
router.post('/trips/tripsort',(req,res,next)=>{
	
	const sql=`SELECT * FROM trip_list ORDER BY trip_price DESC`
	db.query(sql,(err,results,fields)=>{
		 if(err) throw err; 
		//  console.log(results) 
		 res.send(JSON.stringify(results))
	}) 
});
      
module.exports = router;
