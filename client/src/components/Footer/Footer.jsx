import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Footer.scss";
import location from "./images/location.svg";
import trac from "./images/trac.svg";
import shose from "./images/shose.svg";
import email from "./images/email.svg";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import mountainBg from "./images/bg-top.jpg";
import mountain from "./images/mountain.png";
import cloud1 from "./images/nuage-1-min.png";
import cloud2 from "./images/nuage-2-min.png";
import cloud3 from "./images/nuage-3-min.png";
import cloud4 from "./images/nuage-4-min.png";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {/* <div className="noUse"></div> */}
        <Row>
          <div className="mountainBox">
            <Parallax pages={1.2} ref={ref => (this.parallax = ref)}>
              <ParallaxLayer offset={0} speed={0} style={{ top: "35%" }}>
                <img
                  src={mountainBg}
                  alt="mountainBg"
                  className="mountainBg"
                ></img>
              </ParallaxLayer>
              <ParallaxLayer
                offset={0}
                speed={-0.3}
                style={{ "zIndex": "2", top: "45%", left: "50%" }}
              >
                <h1>66 ﾟN</h1>
              </ParallaxLayer>
              <ParallaxLayer
                offset={0}
                speed={0}
                style={{ "zIndex": "3", top: "70%", left: "50%" }}
              >
                <img src={mountain} alt="mountain" className="mountain"></img>
              </ParallaxLayer>
              <ParallaxLayer
                offset={0}
                speed={-0.3}
                style={{ "zIndex": "4", top: "55%", left: "44%" }}
              >
                <p>極地旅行專家</p>
              </ParallaxLayer>
              <ParallaxLayer
                offset={0}
                speed={2}
                style={{ "zIndex": "5", top: "55%" }}
              >
                <img src={cloud1} alt="cloud1" className="cloud1"></img>
              </ParallaxLayer>
              <ParallaxLayer
                offset={0}
                speed={0.7}
                style={{ "zIndex": "5", top: "35%" }}
              >
                <img src={cloud2} alt="cloud2" className="cloud2"></img>
              </ParallaxLayer>
              <ParallaxLayer
                offset={0}
                speed={0.3}
                style={{ "zIndex": "5", top: "50%" }}
              >
                <img src={cloud3} alt="cloud3" className="cloud3"></img>
              </ParallaxLayer>
              <ParallaxLayer
                offset={0}
                speed={0.2}
                style={{ "zIndex": "5", top: "50%" }}
              >
                <img src={cloud4} alt="cloud4" className="cloud4"></img>
              </ParallaxLayer>
            </Parallax>
          </div>
        </Row>

        <Container>
          <Row>
            <div className="footerBox d-flex flex-wrap">
              <Col md="4">
                <ul>
                  <div className="d-flex inBox">
                    <img src={location} alt="location"></img>
                    <h5>旅遊地點</h5>
                  </div>
                  <li>阿拉斯加</li>
                  <li>南極洲</li>
                  <li>加拿大</li>
                  <li>芬蘭</li>
                  <li>格陵蘭島</li>
                  <li>Feroe群島</li>
                  <li>冰島</li>
                  <li>挪威</li>
                  <li>俄羅斯</li>
                  <li>瑞典</li>
                </ul>
              </Col>
              <Col md="4">
                <ul>
                  <div className="d-flex inBox">
                    <img src={trac} alt="trac"></img>
                    <h5>活動與主題</h5>
                  </div>
                  <li>北極光</li>
                  <li>獨木舟</li>
                  <li>徒步旅行</li>
                  <li>破冰船</li>
                  <li>航海</li>
                  <li>動物旅行</li>
                  <li>滑雪</li>
                  <li>家庭</li>
                  <li>攝影</li>
                </ul>
              </Col>
              <Col md="4">
                <ul>
                  <div className="d-flex inBox">
                    <img src={shose} alt="shose"></img>
                    <h5>我們的旅行</h5>
                  </div>
                  <li>專業導遊陪同</li>
                  <li>與專人定制</li>
                  <li>郵輪</li>
                </ul>
              </Col>
            </div>
          </Row>
          <Row className=" footerBox2 align-items-center">
            <div className="subscribeTitle col-lg-5">
              <p>訂閱</p>
              <h1>最新消息</h1>
            </div>
            <form className="col-lg-7 subscribeEmail d-flex ml-auto">
              <div className="emailIcon d-flex align-items-center">
                <img src={email} alt="email"></img>
              </div>
              <input className="ml-2" type="text" placeholder="輸入電子信箱" />
              <button>訂閱</button>
            </form>
          </Row>
        </Container>
        <Row>
          <div className="footerBox3 d-flex justify-content-center align-items-center">
            <div className="col-sm-12 col-md-6 d-flex ml-auto justify-content-end p-0">
              <p>保險</p>
              <p>銷售條款</p>
              <p>法律聲明</p>
            </div>
            <div className="col-sm-12 col-md-6 d-flex p-0">
              <p>我們的合作夥伴</p>
              <p>隱私政策</p>
              <p>極地圖書館</p>
            </div>
          </div>
        </Row>
      </div>
    );
  }
}

export default Footer;
