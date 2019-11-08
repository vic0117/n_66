import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import NavBar from "../../components/NavBar/NavBar";
import MemberLeftMenu from "../../components/MemberLeftMenu/MemberLeftMenu";
import MemberInfoList from "../../components/MemberInfoList/MemberInfoList";
import MemberPassword from "../../components/MemberPassword/MemberPassword";
import MemberOrderList from "../../components/MemberOrderList/MemberOrderList";
import MemberWishList from "../../components/MemberWishList/MemberWishList";
import MemberCoupon from "../../components/MemberCoupon/MemberCoupon";
import MemberCommentList from '../../components/MemberCommentList/MemberCommentList';

import axios from "axios";
import "./DashBoard.css";
//
import { Route, Switch } from "react-router-dom";
//

class DashBoard extends Component {
  state = {
    data: []
  };

  async componentDidMount() {
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
                <Route path="/members/coupons" component={MemberCoupon} />
                <Route path="/members/comments" component={MemberCommentList} />
                <Route path="/members/orders" component={MemberOrderList} />
                <Route
                  path="/members/wishlists"
                  exact
                  component={MemberWishList}
                />
                <div>
                  <Route
                    path="/members"
                    render={() => <MemberInfoList data={data} />}
                  />
                  <Route path="/members" component={MemberPassword} />
                </div>
              </Switch>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default DashBoard;
