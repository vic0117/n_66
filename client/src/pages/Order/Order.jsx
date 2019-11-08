import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import NavBar from "../../component/NavBar/NavBar";
import MemberLeftMenu from "../../component/MemberLeftMenu/MemberLeftMenu";
import MemberOrderList from "../../component/MemberOrderList/MemberOrderList";
import "./Order.css";
class Order extends Component {
  state = {};
  render() {
    return (
      <>
        <NavBar />
        <div className="container">
          <Row>
            <Col className="col-xl-3 col-md-4 col-sm-12 col-xs-12">
              <MemberLeftMenu />
            </Col>
            <div className="col-xl-9 col-md-8 ">
              <MemberOrderList />
              <MemberOrderList />
            </div>
          </Row>
        </div>
      </>
    );
  }
}

export default Order;
