import React, { Component } from "react";
import "./TripMenu.scss";
import calender from "./images/calender.svg";
import customize from "./images/customize.svg";
import multiActivities from "./images/multiActivities.svg";
import ring3 from "./images/ring3.svg";
// import TripMenuImg from "./images/sotckholm.jpg";
// import TripMenuImgCover from "./images/carte-voyage-suede-1197.jpg";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class TripMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data1
    };
  }

  componentDidMount() {}

  render() {
    // 注意props.match.params.page來自網址，是字串資料類型
    const pageNow = +this.props.match.params.page;

    // 過濾出要目前頁面要呈現的資料
    const displayData = this.props.data1.filter((item, index) => {
      return index < pageNow * 5 && index >= (pageNow - 1) * 5;
    });

    return (
      <>
        {displayData.map(item => (
          <Link to={`/trips/${item.sid}`} key={item.sid}>
            <div className="TripMenuBox">
              <div className="TripMenuImgBox">
                <img
                  src={`http://localhost:3000/images/${item.trip_menu_img}`}
                  alt="TripMenuImg"
                  className="TripMenuImg"
                />
                <img
                  src={`http://localhost:3000/images/${item.trip_menu_imgcover}`}
                  alt="TripMenuImgCover"
                  className="TripMenuImgCover"
                />
                <div className="TripMenuImgCover2"></div>
              </div>
              <div className="TripMenuDes">
                <p>{item.trip_place}</p>
                <h4>{item.trip_name}</h4>
                <div className="smallDes">
                  <img src={multiActivities} alt="multiActivities" />
                  <p>{item.trip_type}</p>
                  <span>|</span>
                  <img src={customize} alt="customize" />
                  <p>客製化</p>
                  <span>|</span>
                  <img src={ring3} alt="ring3" />
                  <p>{item.trip_difficulty}</p>
                </div>
                <ul>
                  <li>{JSON.parse(item.trip_menu_content)[0]}</li>
                  <li>{JSON.parse(item.trip_menu_content)[1]}</li>
                  <li>{JSON.parse(item.trip_menu_content)[2]}</li>
                </ul>
                <div className="TripMenuDes2">
                  <div className="TripMenuDays">
                    <img src={calender} alt="calender" />{" "}
                    <span>{item.trip_days}天</span>
                  </div>
                  <span>|</span>
                  <div className="TripMenuStartEnd">
                    <span>{item.trip_start}</span>
                    <span>-</span>
                    <span>{item.trip_end}</span>
                  </div>
                  <span>|</span>
                  <div className="TripMenuPrice">
                    <span>價格</span>
                    <h3>{item.trip_price}</h3>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </>
    );
  }
}

export default withRouter(TripMenu);
