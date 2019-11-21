import React,{useState,useEffect} from 'react';
import queryString from 'query-string'
import io from 'socket.io-client'
import './Chat.scss'
import InfoBar from './InfoBar/InfoBar'
import Input from './Input/Input'
import Messages from './Messages/Messages'
import jwtDecode from "jwt-decode";
let socket;

const Chat = () => {
	
		const [name,setName] = useState('')
		const [room,setRoom] = useState('')
		const [users, setUsers] = useState('');
		const [message,setMessage] = useState('')
		const [messages,setMessages] = useState([])
		// console.log(name,room)
		const ENDPOINT = 'http://localhost:3001'

	useEffect(() => {
		// const { name, room} = queryString.parse(location.search)
		// console.log(name,room)
		socket = io(ENDPOINT)
		
		if ( localStorage.getItem("token")) {
			
		}else{
			return undefined
		}
		
		const jwt = localStorage.getItem("token");
      const currentUser = jwtDecode(jwt);
		const name1 = currentUser.user.email
		const room1 = ' 66N 客服'
		setName(name1);
		setRoom(room1);
		
		socket.emit('join', { name:name1, room:room1 }, (error) => {
			if(error) {
			  alert(error);
			}
		 });	
	},[ENDPOINT])

	//等待每次傳過來的訊息 注意：沒s的是當前的 s的是儲存之前對話
	useEffect(() => {
		socket.on('message',(message)=>{
			setMessages([...messages,message]);
		})
		socket.on('roomData', ({ users }) => {
			setUsers(users);
		 })
		return()=>{
			socket.emit('disconnect');
			socket.off();
		}
	},[messages])

	//發送訊息的fn
	const sendMessage = (event)=>{
		event.preventDefault();
		//將訊息送到後端之後 利用callback清掉現在的input裡的文字
		if(message){
			socket.emit('sendMessage',message,()=>setMessage(''))
		}
	}

	console.log(message,messages)
   

	 return ( 
      <div className="container22">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
	);
}
 
export default Chat;