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
    userInfo: []
  };

  async componentDidMount() {
    // server
    await this.setState({ currentUser: "" });
    if (localStorage.getItem("token")) {
      await this.setState({ currentUser: this.props.currentUser.user });
    } else {
      this.props.history.push("/"); // 暫時先跳轉首頁
    }
    const { currentUser } = this.state;
    console.log(currentUser.u_id);

    const { data: userInfo } = await axios.get(
      "http://localhost:3001/members/" + currentUser.u_id
    );
    console.log(userInfo);
    this.setState({ userInfo: userInfo.rows[0] });

    // fetch("http://localhost:3001/members", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(currentUser)
    // })
    //   .then(response => {
    //     if (response.status >= 400) {
    //       throw new Error("Bad response from server");
    //     }
    //     return response.json();
    //   })
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(function(err) {
    //     console.log(err);
    //   });
  }

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
                    render={() => <MemberInfoList userInfo={userInfo} />}
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
