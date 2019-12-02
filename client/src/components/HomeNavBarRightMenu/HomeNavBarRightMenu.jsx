import React from "react";

//Routers
import { Link } from "react-router-dom";

//CSS
import "./HomeNavBarRightMenu.css";

//SIGNAL
// import Logo from "./images/logo.svg";
// import email from "./images/email.svg";
// import user from "./images/user.svg";
// import phone from "./images/phone.svg";
// import signIn from "./images/sign-in-alt-solid.svg";

class HomeNavBarRightMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { currentUser } = this.props;
    return (
      <ul className="right-menu">
        <li>
          <Link to="/trips/page/1" role="button">
            <h5>旅程目的地</h5>
            <h6>探險的開始</h6>
          </Link>
        </li>
        <li>
          <Link to="/products" role="button">
            <h5>器具與裝備</h5>
            <h6>戶外用品</h6>
          </Link>
        </li>
        <li>
          <Link to="/comments" role="button">
            <h5>客戶評論</h5>
            <h6>意見與反饋</h6>
          </Link>
        </li>
        <li>
          <Link to="#3">
            <h5>關於66N</h5>
            <h6>我們的價值觀</h6>
          </Link>
        </li>

        {!currentUser ? (
          <li>
            <Link to="/login">
              <h5>會員登入</h5>
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/logout">
              <h5>會員登出</h5>
            </Link>
          </li>
        )}
      </ul>
    );
  }
}

export default HomeNavBarRightMenu;
