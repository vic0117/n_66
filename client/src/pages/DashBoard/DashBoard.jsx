import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Joi from "joi-browser";
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
      comfirm_password: "",
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
    filteredUserOrder: [],
    userComments: null,
    userWishes: null,
    filteredUserWishes: [],
    userCoupons: [],
    feedback: {
      success: "",
      msg: { type: "", text: "" }
    },
    errors: {}
  };

  schemaChangepwd = Joi.object({
    new_password: Joi.string()
      .min(5)
      .max(10)
      .required()
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            case "any.empty":
              err.message = "此為必填欄位";
              break;
            case "string.min":
              err.message = "密碼至少為5個字元";
              break;
            case "string.max":
              err.message = "密碼最多為10個字元";
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    comfirm_password: Joi.any()
      .valid(Joi.ref("new_password"))
      .required()
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            case "any.empty":
              err.message = "此為必填欄位";
              break;
            case "string.min":
              err.message = "密碼至少為5個字元";
              break;
            case "string.max":
              err.message = "密碼最多為10個字元";
              break;
            case "any.allowOnly":
              err.message = "密碼不一致";
              break;
            default:
              break;
          }
        });
        return errors;
      })
  });

  async componentDidMount() {
    document.title = "66°N - 客戶專區";
    // server
    await this.setState({ currentUser: "" });
    // 如果有登入
    if (localStorage.getItem("token")) {
      await this.setState({ currentUser: this.props.currentUser.user });
    } else {
      // 如果沒登入 (localStorage中沒東西)
      this.props.history.push("/login");
    }

    const { currentUser } = this.state;
    const { data: userInfo } = await axios.get(
      "http://localhost:3001/members/" + currentUser.u_id
    );
    const info = { ...userInfo.rows[0] };
    info.new_password = "";
    info.comfirm_password = "";
    await this.setState({ userInfo: info });

    // 使用者訂單
    const { data } = await axios.get(
      "http://localhost:3001/members_order/" + currentUser.u_id
    );

    const tripJson = data.rows.map(item => JSON.parse(item.order_trip));
    const productJson = data.rows.map(item => JSON.parse(item.order_product));
    // console.log(productJson[0])

    for (let i = 0; i < data.rows.length; i++) {
      data.rows[i].order_trip = tripJson[i];
      data.rows[i].order_product = productJson[i];
      data.rows[i].order_info = [...tripJson[i], ...productJson[i]];
    }

    await this.setState({ userOrder: data.rows });

    // 使用者評論
    const { data: userComments } = await axios.get(
      "http://localhost:3001/members_comments_list/" + currentUser.u_id
    );
    await this.setState({ userComments: userComments.rows });

    // 使用者願望清單
    const { data: userWishes } = await axios.get(
      "http://localhost:3001/members_wish_list/" + currentUser.u_id
    );
    await this.setState({ userWishes: userWishes.rows });

    // 折扣碼
    const { data: userCoupons } = await axios.get(
      "http://localhost:3001/members_coupon_list/" + currentUser.u_id
    );
    await this.setState({ userCoupons: userCoupons.rows });

    //
    await this.setState({ filteredUserOrder: this.state.userOrder });
    await this.setState({ filteredUserWishes: this.state.userWishes });
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

  changepwdValidate = async () => {
    let new_password = this.state.userInfo.new_password;
    let comfirm_password = this.state.userInfo.comfirm_password;
    console.log("new", new_password);
    console.log("comfirm", comfirm_password);
    await this.setState({
      changepwdJoi: { new_password, comfirm_password }
    });
    const result = Joi.validate(this.state.changepwdJoi, this.schemaChangepwd, {
      abortEarly: false
    });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handlePasswordSubmit = async e => {
    e.preventDefault();

    const errors = await this.changepwdValidate();
    console.log(errors);
    await this.setState({ errors: errors || {} });
    if (errors) return;

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

  handleSelectComments = async orderStatus => {
    console.log(orderStatus);
    console.log(this.state.userOrder);

    let filtered = "";
    if (orderStatus === "選擇訂單狀態") {
      filtered = this.state.userOrder;
    } else {
      filtered = this.state.userOrder.filter(
        order => order.order_status === orderStatus
      );
    }
    this.setState({ filteredUserOrder: filtered });
  };

  handleSelectWishes = async wishType => {
    console.log(wishType);
    let filtered = "";
    if (wishType === "選擇商品類型") {
      filtered = this.state.userWishes;
    } else {
      filtered = this.state.userWishes.filter(
        wish => wish.product_router === wishType
      );
    }
    this.setState({ filteredUserWishes: filtered });
  };

  render() {
    const {
      userInfo,
      userOrder,
      errors,
      filteredUserOrder,
      filteredUserWishes
    } = this.state;
    if (userOrder === null) return null;
    return (
      <>
        <NavBar currentUser={this.props.currentUser} />
        <div className="container">
          <Row className="member-section">
            <Col className="col-xl-3 col-md-4 member-left-section">
              <MemberLeftMenu
                userInfo={this.state.userInfo}
                currentUser={this.props.currentUser}
                userCoupons={this.state.userCoupons}
              />
            </Col>
            <Col className="col-xl-9 col-md-8 member-right-section">
              <Switch>
                <Route
                  path="/account/coupons"
                  render={() => (
                    <MemberCoupon userCoupons={this.state.userCoupons} />
                  )}
                />
                <Route
                  path="/account/comments"
                  render={() => (
                    <MemberCommentList
                      currentUser={this.props.currentUser}
                      userComments={this.state.userComments}
                    />
                  )}
                />
                <Route
                  path="/account/orders"
                  render={() => (
                    <MemberOrderList
                      userInfo={userInfo}
                      userOrder={filteredUserOrder}
                      currentUser={this.props.currentUser}
                      onSelectComments={this.handleSelectComments}
                    />
                  )}
                />
                <Route
                  path="/account/wishlists"
                  exact
                  render={() => (
                    <MemberWishList
                      userWishes={filteredUserWishes}
                      onSelectWishes={this.handleSelectWishes}
                    />
                  )}
                />
                <>
                  <Route
                    path="/account"
                    render={() => (
                      <MemberInfoList
                        userInfo={userInfo}
                        errors={errors}
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
                        errors={errors}
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
