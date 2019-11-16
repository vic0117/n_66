import React from "react";

//Routers
// import { Link } from "react-router-dom";

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
        this.state = {}
    }
    render() {
        return (
            <ul className="right-menu">
                <li>
                    <a href="#88" role="button">
                        <h6>旅程目的地</h6>
                        <h6>探險的開始</h6>
                    </a>
                </li>
                <li>
                    <a href="#19" role="button">
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
        );
    }
}

export default HomeNavBarRightMenu;