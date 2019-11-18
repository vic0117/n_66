import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Route, Switch } from "react-router-dom";
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

import "react-toastify/dist/ReactToastify.css";
import "./DashBoard.css";

class DashBoard extends Component {
  state = {
    userInfo: {
      u_id: "",
      email: "",
      password: "",
      new_password: "",
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
    },
    userOrder: null,
    feedback: {
      success: "",
      msg: { type: "", text: "" }
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
    const info = { ...userInfo.rows[0] };
    info.new_password = "";
    await this.setState({ userInfo: info }); // 注意一下這個await 不知道會不會出事

    const { data } = await axios.get(
      "http://localhost:3001/members_order/" + currentUser.u_id
    );

    console.log("results", data.rows);
    const tripJson = data.rows.map(item => JSON.parse(item.order_trip));
    const productJson = data.rows.map(item => JSON.parse(item.order_product));

    for (let i = 0; i < data.rows.length; i++) {
      data.rows[i].order_trip = tripJson[i];
      data.rows[i].order_product = productJson[i];
      data.rows[i].order_info = [...tripJson[i], ...productJson[i]];
    }
    console.log(data.rows);

    await this.setState({ userOrder: data.rows });
    console.log("userOrder", this.state.userOrder);
  }

  handleInfoChange = async e => {
    const userInfo = { ...this.state.userInfo };
    console.log(userInfo);
    userInfo[e.target.name] = e.target.value;
    await this.setState({ userInfo });
  };

  handleInfoSubmit = async e => {
    e.preventDefault();
    const { currentUser } = this.state;
    let info = {
      first_name_zh: this.state.userInfo.first_name_zh,
      last_name_zh: this.state.userInfo.last_name_zh,
      first_name_en: this.state.userInfo.first_name_en,
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
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token")
      },
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
        this.setState({ feedback: data });
        if (this.state.feedback.success) {
          function pageReload() {
            window.location = "/account";
          }
          toast.success(this.state.feedback.msg.text);
          window.setTimeout(pageReload, 3000);
        } else {
          toast.error(this.state.feedback.msg.text);
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  handlePasswordSubmit = async e => {
    e.preventDefault();
    const { currentUser } = this.state;
    let passwordInfo = {
      password: this.state.userInfo.password,
      new_password: this.state.userInfo.new_password
    };
    console.log(passwordInfo);
    fetch(`http://localhost:3001/members_change_password/${currentUser.u_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      body: JSON.stringify(passwordInfo)
    })
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ feedback: data });
        if (this.state.feedback.success) {
          function pageReload() {
            window.location = "/account";
          }
          toast.success(this.state.feedback.msg.text);
          window.setTimeout(pageReload, 3000);
        } else {
          toast.error(this.state.feedback.msg.text);
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  render() {
    const { userInfo, userOrder } = this.state;
    if (userOrder === null) {
      return null;
    }
    return (
      <>
        <NavBar currentUser={this.props.currentUser} />
        <div className="container">
          <Row className="member-section">
            <Col className="col-xl-3 col-md-4 member-left-section">
              <MemberLeftMenu
                userInfo={this.state.userInfo}
                currentUser={this.props.currentUser}
              />
            </Col>
            <Col className="col-xl-9 col-md-8 member-right-section">
              <Switch>
                <Route path="/account/coupons" component={MemberCoupon} />
                <Route path="/account/comments" component={MemberCommentList} />
                <Route
                  path="/account/orders"
                  render={() => (
                    <MemberOrderList
                      userInfo={userInfo}
                      userOrder={userOrder}
                      currentUser={this.props.currentUser}
                    />
                  )}
                />
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
                  <Route
                    path="/account"
                    render={() => (
                      <MemberPassword
                        onChange={this.handleInfoChange}
                        onSubmit={this.handlePasswordSubmit}
                      />
                    )}
                  />
                </>
              </Switch>
            </Col>
            <ToastContainer />
          </Row>
        </div>
        <Footer />
      </>
    );
  }
}

export default DashBoard;
