const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const moment = require('moment');
const bluebird = require("bluebird");

const db = mysql.createConnection({
  // socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  host: "localhost",
  user: "root",
  password: "",  
  database: "n_66"
});

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


//我的購物車
router.get("/cart", (req, res)=>{
  console.log(req.body)
  res.json(req.body)
})



//結帳頁面 搜尋使用者是否有折價卷
router.post("/checkout/findCoupon", (req, res)=>{
  let user = req.body;
  console.log(user.userId);

  let sql = `SELECT * FROM coupon_list WHERE u_id = ${user.userId}`;
  let couponList = {};
 
  db.queryAsync(sql)
    .then(results=>{
      console.log(results.length)
      if(results.length == 0){
        couponList.answer = ["沒有折價卷"]
      }
      else{
        couponList.answer = results;
      }

      console.log(couponList)
      res.json(couponList);
    })
})


//結帳
router.post("/checkout", (req, res) => {
  let data = req.body;
  // console.log(data.couponList);
  
  let sql = `INSERT INTO order_list( u_id, order_trip, order_product, order_status, order_total_price) 
  VALUES ( '${data.userId}', '${data.tripsToBuy}', '${data.productsToBuy}', '${data.orderStatus}', '${data.totalCost}' )`;
  let newId = 0;
  let output = {};


  db.queryAsync(sql)
    .then(results => { 
      
      sql = `SELECT order_id FROM order_list ORDER BY order_id DESC LIMIT 0 , 1`;
      return db.queryAsync(sql);
    })
    .then(results=>{
      newId = results[0].order_id;

      let productsArray = JSON.parse(data.productsToBuy);

      if(productsArray){
        productsArray.forEach(item => {
          item.id = newId;
        });
      }
      
      let tripsArray = JSON.parse(data.tripsToBuy);
      if(tripsArray){
        tripsArray.forEach(trip => {
          trip.id = newId;
        });
      }

      data.productsToBuy = JSON.stringify(productsArray);
      data.tripsToBuy = JSON.stringify(tripsArray);

      sql=` UPDATE order_list SET order_trip = '${data.tripsToBuy}', order_product = '${data.productsToBuy}' WHERE u_id = '${data.userId}'`
      return db.queryAsync(sql);
    })
    .then(results=>{
      let couponList = data.couponList;
      let validDate = moment(new Date(), 'YYYY/MM/DD').add(3, 'month');
      let validDateStr = JSON.stringify(validDate).split('T')[0].split('"')[1].split("-").join("/");
      
      couponList.forEach(coupon=>{
        let sql= `INSERT INTO coupon_list(u_id, type, discount, valid_date) VALUES ('${coupon.u_id}','${coupon.type}','${coupon.discount}','${validDateStr}')`;
        db.queryAsync(sql)
      })
    })
    .then(results=>{
      output.text = "購買成功";
      output.rows = data;
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
