import React, { Component } from "react";
import "./TripDes1.scss";
import { Container } from "react-bootstrap";
// import TripDes1LeftImg from "./images/carte-voyage-suede-1089.jpg";
// import TripDes1RightImg from "./images/voyage-hiver-en-suede-218.jpg";

class TripDes1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
	  const {detailData} = this.props;
    return (
		 <>
		 {detailData.map(item=>(
			<Container key={item.sid}>
        <div className='TripDes1Box'>
          <div className="TripDes1LeftBox">
            <img
              src={"http://localhost:3000/images/"+item.trip_des1left_img}
              alt="TripDes1LeftImg"
              className="TripDes1LeftImg"
            />
            <h4>優點：</h4>
            <ul>
              <li>{JSON.parse(item.trip_des1left_content)[0]}</li>
              <li>{JSON.parse(item.trip_des1left_content)[1]}</li>
              <li>{JSON.parse(item.trip_des1left_content)[2]}</li>
            </ul>
          </div>
          <div className="TripDes1RightBox">
            <img
              src={"http://localhost:3000/images/"+item.trip_des1right_img}
              alt="TripDes1RightImg"
              className="TripDes1RightImg"
            />
            <h4>說明：</h4>
            <p className='TripDes1RightContent'>
              {item.trip_des1right_content}
            </p>
          </div>
        </div>
      </Container>
		 ))}
      
		</>
    );
  }
}

export default TripDes1;
