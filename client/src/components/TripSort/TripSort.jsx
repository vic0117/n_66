import React, { Component } from "react";
import Sort from "./images/2tran.svg";
// import {Button} from 'react-bootstrap';
import "./TripSort.scss";

class TripSort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // sortName2:props.sortName
    };
  }

  // onDays=()=>{
  // 	fetch("http://localhost:3001/trips/tripdays",
  // 	{
  // 		method:'POST',
  // 		headers:{
  // 			'content-type':'application/json'
  // 		}
  // 	})
  //    .then(
  //      response => {
  //        console.log(response);
  //        return response.json();
  //      },
  //      error => {
  //        console.log(error);
  //      }
  //    )
  //    .then(data => {
  // 	  this.setState({sort:data})
  // 	  console.log(this.state.sort)
  // 	});

  // 	const {onSortDays}=this.props
  // 	onSortDays(this.state.sort)
  // }

  render() {
    const { onSort } = this.props;
    const { onSort2 } = this.props;
    const { onSort3 } = this.props;
    // const{onSort4} = this.props;

    return (
      <div className="TripSortBox">
        <div
          className={
            this.props.sortName === "trip_price"
              ? "TripSortBtn TripSortBtnActive"
              : "TripSortBtn"
          }
          onClick={onSort.bind(this)}
        >
          <img src={Sort} alt="Sort" />
          價格
        </div>
        <div
          className={
            this.props.sortName === "trip_days"
              ? "TripSortBtn TripSortBtnActive"
              : "TripSortBtn"
          }
          onClick={onSort2.bind(this)}
        >
          <img src={Sort} alt="Sort" />
          天數
        </div>
        <div
          className={
            this.props.sortName === "trip_difficulty"
              ? "TripSortBtn TripSortBtnActive"
              : "TripSortBtn"
          }
          onClick={onSort3.bind(this)}
        >
          <img src={Sort} alt="Sort" />
          難度
        </div>
        <div className="TripSortBtn" 
		//   onClick={onSort4.bind(this)}
		  >
          <img src={Sort} alt="Sort" />
          評價
        </div>
      </div>
    );
  }
}

export default TripSort;
