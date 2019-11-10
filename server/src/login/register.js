const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const bluebird = require("bluebird");

const db = mysql.createConnection({
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  host: "localhost",
  user: "root",
  password: "root",
  database: "n_66"
});

bluebird.promisifyAll(db);

router.post("/register", (req, res) => {
  let data = { success: false, message: { text: "" } };

  data.body = req.body;
  // 沒輸入email或password時
  if (!req.body.email || !req.body.password) {
    data.message.text = "資料不足";
    res.json(data);
  }

  const sql_r = "SELECT COUNT(*) AS cnt FROM`members_list` WHERE email = ?";
  db.queryAsync(sql_r, [req.body.email])
    .then(results => {
      if (results[0].cnt > 0) {
        // email already exist
        console.log("results", results);
        data.message.text = "此電子信箱已被使用";
        res.json(data);
      }
      const sql_i =
        "INSERT INTO `members_list` (`email`, `password`) VALUES (?,?)";
      return db.queryAsync(sql_i, [req.body.email, req.body.password]);
    })
    .then(results => {
      if (results.affectedRows === 1) {
        data.success = true;
        data.message.text = "新增成功";
      } else {
        data.message.text = "資料沒有新增";
      }
      res.json(data);
    })
    .catch(error => {
      console.log("sql error", error);
    });
});

// router.post("/register", function(req, res) {
//   let data = { success: false, message: { text: "" } };
//   data.body = req.body;
//   // 沒輸入email或password時
//   if (!req.body.email || !req.body.password) {
//     data.message.text = "資料不足";
//     res.json(data);
//   }

//   const sql_r = "SELECT COUNT(*) AS cnt FROM`members_list` WHERE email = ?";
//   db.query(sql_r, req.body.email, (error, results, fields) => {
//     if (error) {
//       throw error;
//     } else {
//       if (results[0].cnt > 0) {
//         // Already exist
//         console.log("results", results);
//         data.message.text = "此電子信箱已被使用";
//         // res.json(data);
//         console.log("user exist!");
//       } else {
//         const sql_i =
//           "INSERT INTO `members_list` (`email`, `password`) VALUES (?,?)";
//         db.query(
//           sql_i,
//           [req.body.email, req.body.password],
//           (error, results, fields) => {
//             if (error) throw error;
//             console.log("results: ", results);
//             console.log("data.body: ", data.body);
//             if (results.affectedRows === 1) {
//               data.success = true;
//               data.message.text = "新增成功";
//             } else {
//               data.message.text = "資料沒有新增";
//             }
//             res.json(data);
//           }
//         );
//       }
//     }
//   });
// });

module.exports = router;
