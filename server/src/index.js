// settings
const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const fs = require("fs");
const upload = multer({ dest: "tmp_uploads" });
const mysql = require("mysql");
const moment = require("moment-timezone");
const session = require("express-session");
const cors = require("cors");
// const http = require('http');
const { addUser , removeUser ,getUser ,getUsersInRoom } = require('./user.js') 
   
const db = mysql.createConnection({
  // socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock", // for mac
  host: "localhost",
  user: "root", 
  password: "",
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
 
app.use("/static", express.static("public"));
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//socket io server
// var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

 
// route
app.get("/", (req, res) => {
  res.send("Hello World");
});

 

// login
// app.use(
//   session({
//     saveUninitialized: false,
//     resave: false,
//     secret: "i123oidoajd",
//     cookie: {
//       maxAge: 1200000
//     }
//   })
// );

const login = require("./login/login");
app.use(login);

// member
const register = require("./login/register");
app.use(register);

const members = require("./members/members");
app.use(members);

const members_upload_file = require("./members/members_upload_file");
app.use(members_upload_file);

const members_edit = require("./members/members_edit");
app.use(members_edit);

const members_change_password = require("./members/members_change_password");
app.use(members_change_password);

const members_order = require("./members/members_order");
app.use(members_order);

const members_comments = require("./members/members_comments");
app.use(members_comments);

const members_comments_list = require("./members/members_comments_list");
app.use(members_comments_list);

const members_wish_list = require("./members/member_wish_list");
app.use(members_wish_list);

const member_wish_list_del = require("./members/member_wish_list_del");
app.use(member_wish_list_del);

const members_coupon_list = require("./members/member_coupon_list");
app.use(members_coupon_list);

// comments
const comments = require("./comments/comment");
app.use(comments);

// trips
const trips = require("./trips/trips");
app.use(trips);

//products
const products = require("./products/products");
app.use(products);

// 404
app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 - Can not found page");
});

// Verify Token
// function verifyToken(req, res, next) {
//   // Get auth header value
//   const bearerHeader = req.headers["authorization"];
//   // Check if bearer is undefined
//   if (typeof bearerHeader !== "undefined") {
//     // Split at the space
//     const bearer = bearerHeader.split(" ");
//     // Get Token from array
//     const bearerToken = bearer[1];
//     // Set the token
//     req.token = bearerToken;
//     // Next middleware
//     next();
//   } else {
//     //Forbidden
//     res.json("forbidden");
//   }
// }

///////////////////////socket io server ////////////////////////////////////

io.on('connect',(socket)=>{
	// console.log("we have a new connection!")

	socket.on('join',({ name, room },callback) => {
		console.log(name,room)
		const { error, user } = addUser({ id:socket.id ,name:name,room:room})

		if(error) return callback(error)

		socket.join(user.room)
		//自動信息
		if(user.name =='admin@gmail.com'){
			socket.emit('message',{user:'admin' ,text:`${user.name}客服專員您已上線`})
			socket.broadcast.to(user.room).emit('message',{user:'admin',text:`您好我是${user.name}客服很高興為您服務`})
		
		}else{
			socket.emit('message',{user:'admin' ,text:`${user.name}您好,歡迎使用N66客服系統`})
			socket.broadcast.to(user.room).emit('message',{user:'admin',text:`${user.name}用戶已連線`})
		}
		
				// // 自己看不到,聊天室其他人看得到
				// if(user.name =="admin@gmail.com"){
				// 	socket.broadcast.to(user.room).emit('message',{user:'admin',text:`您好我是${user.name}客服很高興為您服務`})

				// }else{
				// 	socket.broadcast.to(user.room).emit('message',{user:'admin',text:`${user.name}用戶已連線`})
				// }
		
		io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

		callback();
	})  
 
	//等待某人發訊息到後端 之後轉發給這個房間裡的人 
	socket.on('sendMessage', (message, callback) => {
		const user = getUser(socket.id);
  
		io.to(user.room).emit('message', { user: user.name, text: message });
  
		callback();
	 });
  
	socket.on('disconnect',() => {
		const user = removeUser(socket.id)
		    
		if(user){
			io.to(user.room).emit('message',{user:'admin',text:`${user.name}已離開。`})
			// io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
		}
	}) 
})

http.listen(process.env.PORT || 3001, function() {
  console.log("server 3001 started");
});
