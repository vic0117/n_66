import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import './Join.scss'

const Join = (props) => {
	const [name,setName] = useState('');
	const [room,setRoom] = useState('選擇客服Room');


	const handle = ()=>{
		props.handleName(name,room)
	}
	
	return ( 
		<div className="joinOuterContainer">
		<div className='black'>
		  <div className="joinInnerContainer">
			 <h1 className="heading">66N 客服系統</h1>
			 <div>
				<input
				  placeholder="Name"
				  className="joinInput"
				  type="text"
				  onChange={e => setName(e.target.value)}
				/>
			 </div>
			 {/* <div>
				<input
				  placeholder="Room"
				  className="joinInput mt-20"
				  type="text"
				  onChange={e => setRoom(e.target.value)}
				/>
			 </div> */}
			 <DropdownButton
          style={{ width: "300px !important " }}
          id="dropdown-basic-button"
          title={room}
          onSelect={e => setRoom(e)}
        >
				<Dropdown.Item eventKey="N66客服１">
					N66客服１
				</Dropdown.Item>
				<Dropdown.Item eventKey="N66客服２">
					N66客服２
				</Dropdown.Item>
				<Dropdown.Item eventKey="N66客服３">
					N66客服３
				</Dropdown.Item>
			 </DropdownButton>

			 <Link to = {`/chat?name=${name}&room=${room}`}>
				<button
				  className="button mt-20"
				  type="submit"
				  onClick={e => (!name || !room ? e.preventDefault() : null)}
				  
				>
				  連接客服人員
				</button>
			 </Link>
				{/* <button
				  className="button mt-20"
				  type="submit"
				//   onClick={e => (!name || !room ? e.preventDefault() : null)}
				  onClick = {handle}
				  
				>
				  連接客服人員
				</button> */}
		  </div>
		</div></div>
	);
}
 
export default Join;