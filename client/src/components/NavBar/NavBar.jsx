import React from "react";
import { Nav, Breadcrumb } from "react-bootstrap";
// Components
import { ReactComponent as Logo } from "./images/logo.svg";
import { ReactComponent as User } from "./images/user.svg";
import { ReactComponent as Cart } from "./images/cart.svg";
// Routes
import { Link } from "react-router-dom";
import "./NavBar.css";
class NavBar extends React.Component {
  state = {};

  componentDidMount() {
    // let navbar = document.querySelector(".navbar-container");
    let toggler = document.querySelector(".navBtn");
    let rightMenu = document.querySelector(".right-menu");
    let rightMenuIsShow = false;
    let body = document.querySelector("body");
    let upLine = document.querySelector(".up-line");
    let middleLine = document.querySelector(".middle-line");
    let downLine = document.querySelector(".down-line");

    //   window.onresize = ()=>{
    //     if(window.innerWidth >= 850){
    //         rightMenu.style.left = '100%';
    //         toggler.style.backgroundColor = 'transparent';
    //         navbar.style.backgroundColor = 'transparent';
    //         toggler.style.borderLeftColor = '#fff';
    //         upLine.style.transform = 'rotate(0)';
    //         downLine.style.transform = 'rotate(0)';
    //         middleLine.style.opacity = '1';
    //     }

    // }

    toggler.onclick = () => {
      rightMenuIsShow = !rightMenuIsShow;
      console.log(rightMenuIsShow);

      if (rightMenuIsShow) {
        toggler.style.backgroundColor = "#96daf0";
        // toggler.style.borderLeftColor = '#96daf0';
        rightMenu.style.left = "0";
        body.style.overflowY = "hidden";
        // navbar.style.backgroundColor = '#242a3a';
        upLine.style.transform = "rotate(45deg)";
        downLine.style.transform = "rotate(-45deg)";
        middleLine.style.opacity = "0";
        body.style.overflowY = "hidden";
      } else {
        rightMenu.style.left = "100%";
        toggler.style.backgroundColor = "transparent";
        // toggler.style.borderLeftColor = '#fff';
        // navbar.style.backgroundColor = 'transparent';
        body.style.overflowY = "scroll";
        upLine.style.transform = "rotate(0)";
        downLine.style.transform = "rotate(0)";
        middleLine.style.opacity = "1";
        body.style.overflowY = "scroll";
      }
    };
  }

  render() {
    return (
      <>
        <div className="navbar-container d-flex align-items-center fixed-top">
          <Link to="/" role="button" className="navbar-logo mr-auto">
            <Logo height="60" width="60" />
          </Link>

          <a
            className="navBtn ml-auto d-flex justify-content-center align-items-center"
            role="button"
            href="#2e"
          >
            <div className="toggle-inner d-flex flex-column justify-content-between align-items-center">
              <div className="darkblue-line up-line"></div>
              <div className="darkblue-line middle-line"></div>
              <div className="darkblue-line down-line"></div>
            </div>
          </a>

          <div id="basic-navbar-nav" className="navCollapse">
            <Nav className="ml-auto ">
              <Nav.Link className="navbar-item" href="#home">
                <span className="">旅遊行程</span>
                <div className="blue-line"></div>
              </Nav.Link>
              <Nav.Link className="navbar-item" href="#link">
                <span className="">戶外用品</span>
                <div className="blue-line"></div>
              </Nav.Link>
              <Nav.Link className="navbar-item" href="/comments">
                <span className="">旅遊評價</span>
                <div className="blue-line"></div>
              </Nav.Link>
              <Nav.Link
                className="navbar-item"
                href="#link"
                style={{ marginRight: "2rem" }}
              >
                <span>我們的理念</span>
                <div className="blue-line"></div>
              </Nav.Link>
              <Nav.Link className="icon-container" href="/members">
                <User height="20" width="20" className="user-icon" />
              </Nav.Link>
              <Nav.Link className="icon-container" href="#link">
                <Cart height="20" width="20" className="cart-icon" />
              </Nav.Link>
            </Nav>
          </div>

          <Breadcrumb className="mb-5">
            <Breadcrumb.Item href="#">66N</Breadcrumb.Item>
            <Breadcrumb.Item
              href="https://getbootstrap.com/docs/4.0/components/breadcrumb/"
              active
            >
              戶外用品
            </Breadcrumb.Item>
          </Breadcrumb>

          <ul className="right-menu">
            <li>
              <a href="#8">
                <h5>登入</h5>
              </a>
            </li>
            <li>
              <a href="#19">
                <h5>我的購物車</h5>
              </a>
            </li>
            <li>
              <a href="#2">
                <h5>旅遊行程</h5>
              </a>
            </li>
            <li>
              <a href="#3">
                <h5>旅遊評價</h5>
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default NavBar;
