const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const moment = require("moment-timezone");
const bluebird = require("bluebird");

const db = mysql.createConnection({
  // host: "localhost",  
  // socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  host: "localhost",
  user: "root",
  password: "root",
  database: "n_66"
});
bluebird.promisifyAll(db);

router.get("/products", (req, res) => {
  const sql = "SELECT * FROM `product_list`";

  db.query(sql, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
    res.json(results);
  });
  // res.send('aaaa')
});

router.get("/products/:id", (req, res) => {
  let id = req.params.id;
  const sql = `SELECT * FROM product_list WHERE product_id=${id}`;

  db.query(sql, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
    res.json(results);
  });
});

router.post("/checkout", (req, res) => {
  let data = req.body;
  let sql = `SELECT order_id FROM order_list ORDER BY order_id DESC LIMIT 0 , 1`;
  let newId = 0;
  let output = {};
  // console.log(data)

  db.queryAsync(sql)
    .then(results=>{
      newId = results[0].order_id + 1;
      // console.log(newId);

      let productsArray = JSON.parse(data.productsToBuy)
      
      productsArray.forEach(item => {
        item.id = newId;
      });

      let tripsArray = JSON.parse(data.tripsToBuy)
      tripsArray.forEach(trip => {
        trip.id = newId;
      });

      data.productsToBuy = JSON.stringify(productsArray);
      data.tripsToBuy = JSON.stringify(tripsArray);

      return db.queryAsync(sql);
    })
   
    .then(results=>{
      newId = results[0].order_id + 1;
      console.log(newId);

      let productsArray = JSON.parse(data.productsToBuy)
      
      productsArray.forEach(item => {
        item.id = newId;
      });

      let tripsArray = JSON.parse(data.tripsToBuy)
      tripsArray.forEach(trip => {
        trip.id = newId;
      });

      data.productsToBuy = JSON.stringify(productsArray);
      data.tripsToBuy = JSON.stringify(tripsArray);

      sql = `INSERT INTO order_list( u_id, order_trip, order_product, order_status, order_total_price) 
       VALUES ( '${data.userId}', '${data.tripsToBuy}', '${data.productsToBuy}', '${data.orderStatus}', '${data.totalCost}' )`;
      return db.queryAsync(sql);
    })
    .then(results=>{
      
      output.text = '購買成功';
      output.rows = data
      console.log(output)
      res.json(output);
    })
});


//搜尋
// router.post('/products/search',(req,res,next)=>{
// 	let data2 = JSON.parse(req.body.data2)

// 	const sql=`SELECT * FROM trip_list WHERE trip_name LIKE %${data2}%`
// 	db.query(sql,(err,results,fields)=>{
// 		 if(err) throw err;
// 		//  console.log(results)
// 		 res.send(JSON.stringify(results))
// 	})
// });

//依照價格排列
// router.post('/products/productsSort',(req,res,next)=>{

// 	const sql=`SELECT * FROM trip_list ORDER BY trip_price DESC`
// 	db.query(sql,(err,results,fields)=>{
// 		 if(err) throw err;
// 		//  console.log(results)
// 		 res.send(JSON.stringify(results))
// 	})
// });

module.exports = router;
