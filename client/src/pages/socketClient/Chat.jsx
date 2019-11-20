import React,{useState,useEffect} from 'react';
import queryString from 'query-string'
import io from 'socket.io-client'
import './Chat.css'
import InfoBar from './InfoBar/InfoBar'
import Input from './Input/Input'
import Messages from './Messages/Messages'
let socket;

const Chat = ( {location} ) => {
		const [name,setName] = useState('')
		const [room,setRoom] = useState('')
		const [message,setMessage] = useState('')
		const [messages,setMessages] = useState([])
		// console.log(name,room)
		const ENDPOINT = 'http://localhost:3001'

	useEffect(() => {
		// const { name, room} = queryString.parse(location.search)
		// console.log(name,room)
		socket = io(ENDPOINT)

		setName(name);
		setRoom(room);
		
		socket.emit('join',{name:name , room:room},()=>{

		});

			return()=>{
				socket.emit('disconnect');
				socket.off();
			}

	},[name,room])

	//等待每次傳過來的訊息 注意：沒s的是當前的 s的是儲存之前對話
	useEffect(() => {
		socket.on('message',(message)=>{
			setMessages([...messages,message]);
		})
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
		<div className="outerContainer">
      <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      {/* <TextContainer users={users}/> */}
    </div>
	);
}
 
export default Chat;