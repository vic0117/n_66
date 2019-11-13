import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
// Componensts
import NavBar from "../../components/NavBar/NavBar";
import MemberLeftMenu from "../../components/MemberLeftMenu/MemberLeftMenu";
import MemberInfoList from "../../components/MemberInfoList/MemberInfoList";
import MemberPassword from "../../components/MemberPassword/MemberPassword";
import MemberOrderList from "../../components/MemberOrderList/MemberOrderList";
import MemberWishList from "../../components/MemberWishList/MemberWishList";
import MemberCoupon from "../../components/MemberCoupon/MemberCoupon";
import MemberCommentList from "../../components/MemberCommentList/MemberCommentList";
import Footer from "../../components/Footer/Footer";

import { Route, Switch } from "react-router-dom";
import "./DashBoard.css";

class DashBoard extends Component {
  state = {
    userInfo: {
      u_id: "",
      email: "",
      password: "",
      first_name_zh: "",
      last_name_zh: "",
      first_name_en: "",
      last_name_en: "",
      gender: "",
      bday_year: "",
      bday_month: "",
      bday_date: "",
      passport: "",
      zip_code: "",
      address: "",
      tel: "",
      avatar: ""
    }
  };

  async componentDidMount() {
    // server
    await this.setState({ currentUser: "" });
    // 如果有登入
    if (localStorage.getItem("token")) {
      await this.setState({ currentUser: this.props.currentUser.user });
    } else {
      // 如果沒登入 (localStorage中找不到東西)
      this.props.history.push("/login"); // 暫時先跳轉首頁
    }
    const { currentUser } = this.state;
    const { data: userInfo } = await axios.get(
      "http://localhost:3001/members/" + currentUser.u_id
    );
    this.setState({ userInfo: userInfo.rows[0] });
  }

  handleInfoChange = e => {
    const userInfo = { ...this.state.userInfo };
    console.log(userInfo);
    userInfo[e.target.name] = e.target.value;
    this.setState({ userInfo });
  };

  handleInfoSubmit = async e => {
    e.preventDefault();
    const { currentUser } = this.state;
    let info = {
      first_name_zh: this.state.userInfo.first_name_zh,
      last_name_zh: this.state.userInfo.last_name_zh,
      first_name_en: this.state.userInfo.first_name_zh,
      last_name_en: this.state.userInfo.last_name_en,
      gender: this.state.userInfo.gender,
      bday_year: this.state.userInfo.bday_year,
      bday_month: this.state.userInfo.bday_month,
      bday_date: this.state.userInfo.bday_date,
      passport: this.state.userInfo.passport,
      zip_code: this.state.userInfo.zip_code,
      address: this.state.userInfo.address,
      tel: this.state.userInfo.tel
    };
    fetch(`http://localhost:3001/members_edit/${currentUser.u_id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info)
    })
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  render() {
    const { userInfo } = this.state;
    return (
      <>
        <NavBar />
        <div className="container">
          <Row className="member-section">
            <Col className="col-xl-3 col-md-4 member-left-section">
              <MemberLeftMenu />
            </Col>
            <Col className="col-xl-9 col-md-8 member-right-section">
              <Switch>
                <Route path="/account/coupons" component={MemberCoupon} />
                <Route path="/account/comments" component={MemberCommentList} />
                <Route path="/account/orders" component={MemberOrderList} />
                <Route
                  path="/account/wishlists"
                  exact
                  component={MemberWishList}
                />
                <>
                  <Route
                    path="/account"
                    render={() => (
                      <MemberInfoList
                        userInfo={userInfo}
                        onChange={this.handleInfoChange}
                        onSubmit={this.handleInfoSubmit}
                      />
                    )}
                  />
                  <Route path="/account" component={MemberPassword} />
                </>
              </Switch>
            </Col>
          </Row>
        </div>
        <Footer />
      </>
    );
  }
}

export default DashBoard;
