import React from "react";
import "./N66navbar.css";

//SIGNAL
import Logo from "./images/logo.svg";
import email from "./images/email.svg";
import user from "./images/user.svg";
import phone from "./images/phone.svg";

class N66navbar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    let navbar = document.querySelector(".n66navbar");
    let toggler = document.querySelector(".n66toggler");
    let rightMenu = document.querySelector(".right-menu");
    let rightMenuIsShow = false;
    let body = document.querySelector("body");
    let upLine = document.querySelector(".up-line");
    let middleLine = document.querySelector(".middle-line");
    let downLine = document.querySelector(".down-line");

    window.onresize = () => {
      if (window.innerWidth >= 850) {
        rightMenu.style.left = "100%";
        toggler.style.backgroundColor = "transparent";
        navbar.style.backgroundColor = "transparent";
        toggler.style.borderLeftColor = "#fff";
        upLine.style.transform = "rotate(0)";
        downLine.style.transform = "rotate(0)";
        middleLine.style.opacity = "1";
      }
    };

    toggler.onclick = () => {
      rightMenuIsShow = !rightMenuIsShow;
      console.log(rightMenuIsShow);
      if (rightMenuIsShow) {
        toggler.style.backgroundColor = "#96daf0";
        toggler.style.borderLeftColor = "#96daf0";
        rightMenu.style.left = "0";
        body.style.overflowY = "hidden";
        navbar.style.backgroundColor = "#242a3a";
        upLine.style.transform = "rotate(45deg)";
        downLine.style.transform = "rotate(-45deg)";
        middleLine.style.opacity = "0";
      } else {
        rightMenu.style.left = "100%";
        toggler.style.backgroundColor = "transparent";
        toggler.style.borderLeftColor = "#fff";
        navbar.style.backgroundColor = "transparent";
        body.style.overflowY = "scroll";
        upLine.style.transform = "rotate(0)";
        downLine.style.transform = "rotate(0)";
        middleLine.style.opacity = "1";
      }
    };
  }

  render() {
    return (
      <>
        <div className="n66navbar d-flex">
          <div className="brand" href="#home">
            <img src={Logo} alt="N66" style={{ width: "150px" }} />
          </div>

          <div className="n66collapse " id="responsive-navbar-nav ">
            <div className="ml-auto d-flex nav-top justify-content-end">
              <a href="#4" className=" d-flex align-items-center nav-top-item">
                <img className="email" src={email} alt="email" />
                通訊
              </a>
              <a href="#5" className=" d-flex align-items-center nav-top-item">
                <img className="user" src={user} alt="user" />
                客戶專區
              </a>
              <a href="#6" className=" d-flex align-items-center nav-top-item">
                <img className="phone" src={phone} alt="phone" />
                聯繫我們
              </a>
            </div>

            <div className="ml-auto d-flex nav-bottom">
              <a href="#features" className="nav-item">
                <h5>旅程目的地</h5>
                <h6>探險的開始</h6>
                <div className="blue-line"></div>
              </a>
              <a href="#7" className="nav-item">
                <h5>活動與主題</h5>
                <h6>我們的旅程</h6>
                <div className="blue-line"></div>
              </a>
              <a href="#deets" className="nav-item">
                <h5>器具與裝備</h5>
                <h6>戶外用品</h6>
                <div className="blue-line"></div>
              </a>
              <a href="#deets" className="nav-item">
                <h5>關於66N</h5>
                <h6>我們的價值觀</h6>
                <div className="blue-line"></div>
              </a>
            </div>
          </div>
          <a
            href="#ss"
            className="n66toggler ml-auto d-flex justify-content-center align-items-center"
            role="button"
          >
            <div className="toggle-inner d-flex flex-column justify-content-between align-items-center">
              <div className="white-line up-line"></div>
              <div className="white-line middle-line"></div>
              <div className="white-line down-line"></div>
            </div>
          </a>
        </div>

        <ul className="right-menu">
          <li>
            <a href="#8">
              <h5>旅程目的地</h5>
              <h6>探險的開始</h6>
            </a>
          </li>
          <li>
            <a href="#19">
              <h5>活動與主題</h5>
              <h6>我們的旅程</h6>
            </a>
          </li>
          <li>
            <a href="#2">
              <h5>器具與裝備</h5>
              <h6>戶外用品</h6>
            </a>
          </li>
          <li>
            <a href="#3">
              <h5>關於66N</h5>
              <h6>我們的價值觀</h6>
            </a>
          </li>
        </ul>
      </>
    );
  }
}

export default N66navbar;
