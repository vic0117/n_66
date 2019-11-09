import React, { Component } from "react";
import "./TripDesNav.css";
import N66navbarButton from "./N66navbar";
import snowCity from "./images/snowcity.jpg";
import { ReactComponent as Suede } from "./images/suede.svg";

class TripDesNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <N66navbarButton className="N66navbarButton" />
        <div>
          <div className="backGroundImg">
            <img src={snowCity} alt="snowCity" />
            <div className="backGroundImgCover"></div>
          </div>
          <div className="patternBlue">
            <Suede className="TripDesNavLocationImg" />
            <div className="patternBlueInside">
              <p>瑞士</p>
              <h1>斯德哥爾摩冬季</h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TripDesNav;
