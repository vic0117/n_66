import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./adviser.scss";
import snowHouse from "./images/bg-snow.jpg";
import Slider from "react-slick";
import aurelie from './images/aurelie.jpg'
import cendrine from './images/cendrine.jpg'
import emmanuelle from './images/emmanuelle.jpg'


class Adviser extends Component {
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
      <Container className="d-flex justify-content-center align-items-center flex-column">
        <Row>
          <h6 className="smTitle">定制旅程</h6>
        </Row>
        <Row>
          <p className="bigTitle">聯繫我們的專家</p>
        </Row>
        <div className="row AdviserBox">
          <Col md={8} className="leftCol">
            <div className="leftAdviser">
              <img src={snowHouse} alt="snowHouse"></img>
              <div className="AdviserDes">
                <h2>對於旅行有想法？</h2>
                <p>
                  不管您是夫妻，朋友，還是情侶，由我們組織的專業活動都能徹底讓您精神釋放。
                </p>
                <p>行程,後勤,預定我們都不會讓您失望。</p>
                <p>將您的想法委託給我們，我們的專家會為您提供建議！</p>
              </div>
              <div className="AdviserBtn">與專家聯繫</div>
            </div>
          </Col>
          <Col md={4} className="rightCol">
            <div className="rightAdviser">
              <Slider {...settings}>
                <div className='qwe'>
					 <img src={emmanuelle} alt='emmanuelle'/>
                  <h3>Emmanuelle Revol</h3>
						<p className='sliderDes1'>挪威 冰島</p>
						<p className='sliderDes2'>專業的冰島旅遊專家<br></br>帶領過將近100次的冰島團</p>
                </div>
                <div>
					 <img src={cendrine} alt='cendrine'/>
                  <h3>Cendrine</h3>
						<p className='sliderDes1'>加拿大 冰島 芬蘭</p>
						<p className='sliderDes2'>Cendrine在小的時候<br></br>對於戶外活動特別熱衷...</p>
                </div>
                <div>
					 <img src={aurelie} alt='aurelie'/>
                  <h3>Aurelie</h3>
						<p className='sliderDes1'>格陵蘭 冰島 阿爾卑斯山</p>
						<p className='sliderDes2'>Aurelie的童年時光是在博若萊地區的<br></br>葡萄園,櫻桃和石頭之間度過的。</p>
                </div>
              </Slider>
            </div>
          </Col>
        </div>
      </Container>
    );
  }
}

export default Adviser;
