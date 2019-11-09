import React, { Component } from 'react';
import Sort from './images/2tran.svg'
// import {Button} from 'react-bootstrap';
import './TripSort.scss';

class TripSort extends Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}
	render() { 
		return (
		<div className='TripSortBox'>
			<div className='TripSortBtn'><img src={Sort} alt='Sort'/>價格</div>
			<div className='TripSortBtn'><img src={Sort} alt='Sort'/>天數</div>
			<div className='TripSortBtn'><img src={Sort} alt='Sort'/>難度</div>
			<div className='TripSortBtn'><img src={Sort} alt='Sort'/>評價</div>
		</div>  );
	}
}
 
export default TripSort;