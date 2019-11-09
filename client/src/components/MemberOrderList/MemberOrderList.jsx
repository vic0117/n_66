import React, { Component } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import CommentModal from "../CommentModal/CommentModal";
import { ReactComponent as Calendar } from "./images/calendar.svg";
import sotckholm from "./images/sotckholm-lhiver-1221 (2).jpg";
import "./MemberOrderList.css";

class OrderList extends Component {
  state = { addModalShow: false };

  render() {
    let addModalClose = () => this.setState({ addModalShow: false });
    return (
      <div className="order-list-container">
        <Row>
          <Col className="order-list-title">
            <span>我的訂單</span>
          </Col>
        </Row>
        <Row>
          <Col className="order-card-container">
            <Card style={{ width: "100%" }} className="d-flex">
              <Card.Body>
                <Col>
                  <Card.Title>
                    <span className="order-num">訂單編號:T00001</span>
                  </Card.Title>
                </Col>
                <Col className="d-flex position-relative order-container">
                  <img src={sotckholm} height="200" width="200" alt=""></img>
                  <div className="order-info-container d-flex flex-column justify-content-between">
                    <span style={{ color: "#96daf0" }}>瑞典</span>
                    <Card.Title className="mt-1 mb-2">
                      冬季的斯德哥爾摩
                    </Card.Title>
                    <div className="d-flex align-items-center mb-2">
                      <Calendar />
                      <span className="ml-2">5天</span>
                    </div>
                    <div className="vertical-align-middle mb-2">
                      2020/01/04 - 2020/01/09
                    </div>
                    <div className="d-flex mb-2">
                      <span>NT$ 18,000</span>
                      <span className="ml-3">數量:1</span>
                    </div>
                  </div>
                  <div className="ml-auto mt-auto to-comment-container">
                    <Button
                      className="to-comment"
                      onClick={() => this.setState({ addModalShow: true })}
                    >
                      前往評論
                    </Button>
                    <CommentModal
                      show={this.state.addModalShow}
                      onHide={addModalClose}
                    />
                  </div>
                  {/*  */}
                </Col>
                <div className="mt-3 d-flex status">
                  <p>狀態: 已送達</p>
                  <p className="ml-auto">合計:18,000</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default OrderList;
