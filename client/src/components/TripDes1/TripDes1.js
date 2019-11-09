import React, { Component } from "react";
import "./TripDes1.scss";
import { Container } from "react-bootstrap";
import TripDes1LeftImg from "./images/carte-voyage-suede-1089.jpg";
import TripDes1RightImg from "./images/voyage-hiver-en-suede-218.jpg";

class TripDes1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <div className='TripDes1Box'>
          <div className="TripDes1LeftBox">
            <img
              src={TripDes1LeftImg}
              alt="TripDes1LeftImg"
              className="TripDes1LeftImg"
            />
            <h4>優點：</h4>
            <ul>
              <li>舒適的市中心住宿</li>
              <li>斯堪的納維亞首都的和平現代</li>
              <li>斯德哥爾摩的冬季活動</li>
            </ul>
          </div>
          <div className="TripDes1RightBox">
            <img
              src={TripDes1RightImg}
              alt="TripDes1RightImg"
              className="TripDes1RightImg"
            />
            <h4>說明：</h4>
            <p className='TripDes1RightP'>
              享受這個令人驚訝的瑞典首都及其群島的謹慎魅力。您將有機會練習體育活動，例如雪鞋行走，越野滑雪或滑冰。活動100％瑞典語，這要歸功於遍布該地區的眾多冰凍湖泊。然後，您可以在舒適的咖啡廳放鬆，喝杯熱咖啡，肉桂糕點和其他甜點。
            </p>
          </div>
        </div>
      </Container>
    );
  }
}

export default TripDes1;
