import React, { Component } from "react";
import "./TripMenuFooter.scss";
import { Container } from "react-bootstrap";
import aurelie from "./images/aurelie.jpg";
import cendrine from "./images/cendrine.jpg";
import emmanuelle from "./images/emmanuelle.jpg";
import Slider from "react-slick";
import { ReactComponent as SnowBoot } from "./images/snowBoot.svg";
import { ReactComponent as Trac } from "./images/trac.svg";
import { ReactComponent as Dog } from "./images/dog.svg";
import { ReactComponent as Boat } from "./images/boat.svg";
// import {Link} from 'reactrouter-dom'

class TripMenuFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
      autoplay: true
    };
    return (
      <Container>
        <div className="TripMenuFooterBox">
          <div className="TripMenuFooterBoxLeft">
            <p>我們的</p>
            <h1>顧問</h1>
            <div className="TripMenuFooterBoxLeftInside">
              <Slider {...settings}>
                <div className="sliderBox">
                  <img src={emmanuelle} alt="emmanuelle" />
                  <div className="TripFooterCarousel">
                    <h3>Emmanuelle Revol</h3>
                    <p className="TripFooterDes">挪威 冰島</p>
                    <p className="TripFooterDes2">
                      專業的冰島旅遊專家<br></br>帶領過將近100次的冰島團
                    </p>
                  </div>
                </div>
                <div className="sliderBox">
                  <img src={cendrine} alt="cendrine" />
                  <div className="TripFooterCarousel">
                    <h3>Cendrine</h3>
                    <p className="TripFooterDes">加拿大 冰島 芬蘭</p>
                    <p className="TripFooterDes2">
                      Cendrine在小的時候<br></br>對於戶外活動特別熱衷...
                    </p>
                  </div>
                </div>
                <div className="sliderBox">
                  <img src={aurelie} alt="aurelie" />
                  <div className="TripFooterCarousel">
                    <h3>Aurelie</h3>
                    <p className="TripFooterDes">格陵蘭 冰島 阿爾卑斯山</p>
                    <p className="TripFooterDes2">
                      Aurelie的童年時光是在博若萊地區的<br></br>
                      葡萄園,櫻桃和石頭之間度過的。
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="TripMenuFooterBoxRight">
            <p>我們的</p>
            <h1>活動</h1>
            <div className="TripMenuFooterBoxRightInside">
              <div className="TripMenuFooterRightRow1">
                <div className="TripActiveBox">
                  <div className="TripActiveCircle">
                    <Boat className="TripMenuIcon" />
                    <div className="WhiteCircle"></div>
                  </div>
                  <p>划艇</p>
                  <div className="backgroundCover"></div>
                </div>
                <div className="TripActiveBox">
                  <div className="TripActiveCircle">
                    <Trac className="TripMenuIcon" />
                    <div className="WhiteCircle"></div>
                  </div>
                  <p>步行</p>
                  <div className="backgroundCover"></div>
                </div>
              </div>
              <div className="TripMenuFooterRightRow2">
                <div className="TripActiveBox">
                  <div className="TripActiveCircle">
                    <Dog className="TripMenuIcon" />
                    <div className="WhiteCircle"></div>
                  </div>
                  <p>雪橇犬</p>
                  <div className="backgroundCover"></div>
                </div>
                <div className="TripActiveBox">
                  <div className="TripActiveCircle">
                    <SnowBoot className="TripMenuIcon" />
                    <div className="WhiteCircle"></div>
                  </div>
                  <p>雪鞋</p>
                  <div className="backgroundCover"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default TripMenuFooter;
