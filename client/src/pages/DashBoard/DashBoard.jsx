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
    data: []
  };

  async componentDidMount() {
    // window.addEventListener("scroll", function(e) {
    //   const scrolled = document.querySelector(".mountainBox-container").offsetTop;
    //   this.console.log(scrolled);

    // });

    // server
    const { data } = await axios.get("http://localhost:3001/members");
    this.setState({ data: data.rows[0] });
  }

  render() {
    const { data } = this.state;
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
                    render={() => <MemberInfoList data={data} />}
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
