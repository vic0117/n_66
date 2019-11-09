import React, { Component } from 'react';

class TripDes2 extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			user:'vic',
			active:'',
		 }
	}
	render() { 
		return ( 
		<div>
			<div>
				<button onClick={()=>{this.setState({user:'vic'})}}>vic</button>
				<button onClick={()=>{this.setState({user:'peter'})}}>peter</button>
			</div>
			<div>
				{this.state.user==='vic'? <p>vic</p>: null}
				{this.state.user==='peter'? <p>peter</p> : null}
			</div>
		</div> );
	}
}
 
export default TripDes2;