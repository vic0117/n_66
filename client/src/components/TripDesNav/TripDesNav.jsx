import React, { Component } from "react";
import "./TripDesNav.scss";
import N66navbarButton from "./N66navbar";
// import snowCity from "./images/snowcity.jpg";
// import { ReactComponent as Suede } from "./images/suede.svg";

class TripDesNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { detailData } = this.props;
    //   console.log(detailData)
    return (
      <>
        {detailData.map(item => (
          <div key={item.sid}>
            <N66navbarButton className="N66navbarButton" />
            <div className="backGroundImg">
              <img src={`http://localhost:3000/images/${item.trip_desnav_img}`} alt="snowCity" /> 
              <div className="backGroundImgCover"></div>
            </div>
            <div className="patternBlue">
              {/* <Suede className="TripDesNavLocationImg" /> */}
				  <img src={`http://localhost:3000/images/${item.trip_desnav_img2}`} 
				  alt='TripDesNavLocationImg'
					  className='TripDesNavLocationImg'
				  />
              <div className="patternBlueInside">
                <p>{item.trip_place}</p>
                <h1>{item.trip_name}</h1>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default TripDesNav;
