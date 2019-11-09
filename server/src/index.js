// setting
const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const fs = require("fs");
const upload = multer({ dest: "tmp_upload" });
const mysql = require("mysql");
const moment = require("moment-timezone");
const session = require("express-session");
const cors = require("cors");
const db = mysql.createConnection({
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock", // for mac
  host: "localhost",
  user: "root",
  password: "root",
  database: "n_66"
});
db.connect();
const app = express();

const whitelist = ["http://localhost:3000", undefined, "http://localhost:3001"];
const corsOptions = {
  credentials: true,
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// member
const members = require("./members/members");
// const trip = require('./trip/trip')
app.use(members);
// app.use(trip);

//測試
app.get("/trips", (req, res) => {
	const sql = "SELECT * FROM `trip_list`";
	db.query(sql, (error, results, fields) => {
	  if (error) throw error;
	  
	  res.send(JSON.stringify(results))
	});
 });

// 404
app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 - Can not found page");
});

app.listen(3001, function() {
  console.log("server 3001 started");
});
