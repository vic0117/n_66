import React, { Component } from "react";
import "./Tripmenu.scss";
import calender from "./images/calender.svg";
import customize from "./images/customize.svg";
import multiActivities from "./images/multiActivities.svg";
import ring3 from "./images/ring3.svg";



class TripMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <div className="TripMenuBox">
        <div>
          <div className="TripMenuImg">
            <div className="TripMenuImgCover"></div>
          </div>
        </div>
        <div className="TripMenuDes">
          <p>瑞典</p>
          <h4>冬季的斯德哥爾摩</h4>
          <div className='smallDes'>
            <img src={multiActivities} alt="multiActivities" /><p>多活動</p><span>|</span>
            <img src={customize} alt="customize" /><p>客製化</p><span>|</span>
            <img src={ring3} alt="ring3" /><p>簡單</p>
          </div>
          <ul>
            <li>舒適的市中心住宿</li>
            <li>斯德哥爾摩的冬季活動</li>
            <li>斯堪地那維亞的特色建築</li>
          </ul>
          <div className='TripMenuDes2'>
            <div className='TripMenuDays'>
              <img src={calender} alt="calender" /> <span>五天</span>
            </div>
				<span>|</span>
            <div className='TripMenuStartEnd'>
              <span>2020/01/04</span>
              <span>-</span>
              <span>2020/01/09</span>
            </div>
				<span>|</span>
            <div className='TripMenuPrice'>
              <span>價格</span>
              <h3>18000</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TripMenu;
