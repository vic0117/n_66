import React, { Component } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import CommentModal from "../CommentModal/CommentModal";

import { ReactComponent as Calendar } from "./images/calendar.svg";
import { ReactComponent as Size } from "./images/tshirt.svg";
import sotckholm from "./images/sotckholm-lhiver-1221 (2).jpg";
import "./MemberOrderList.css";

class MemberOrderList extends Component {
  state = { addModalShow: false };

  getModal = value => {
    console.log(value);
    let key_to_update = {};
    key_to_update[value] = true;
    this.setState({
      addModalShow: Object.assign({}, this.state.addModalShow, key_to_update)
    });
  };

  render() {
    const { userOrder } = this.props;
    userOrder.map(order => console.log(order));
    console.log(userOrder);
    let addModalClose = () => this.setState({ addModalShow: false });
    return (
      <div className="order-list-container">
        <Row>
          <Col className="order-list-title">
            <span>我的訂單</span>
          </Col>
        </Row>
        <Row>
          {userOrder.map(order => (
            <Col className="order-card-container" key={order.order_id}>
              <Card
                style={{
                  width: "100%",
                  borderTop: "1px solid #eaeaea",
                  borderRadius: "0",
                  paddingTop: "1rem"
                }}
                className="d-flex"
              >
                <Card.Body>
                  <Col>
                    <Card.Title>
                      <span className="order-num">
                        訂單編號:{order.order_id}
                      </span>
                    </Card.Title>
                  </Col>
                  {order.order_info.map(item => (
                    <Col className="d-flex position-relative order-container">
                      <div className="img-container col-md-4">
                        {/* <img src={sotckholm} height="200" width="200" alt="" /> */}
                      </div>

                      <div className="order-info-container d-flex flex-column justify-content-between ">
                        <span style={{ color: "#96daf0" }}>
                          {item.trip_country || item.product_brand}
                        </span>
                        <Card.Title className="mt-1 mb-2">
                          {item.trip_name || item.product_name}
                        </Card.Title>
                        <div className="d-flex align-items-center mb-2">
                          {item.trip_duration ? (
                            <Calendar />
                          ) : (
                            <Size height="18" width="18" />
                          )}
                          <span className="ml-2">
                            {item.trip_duration || "尺寸: " + item.product_size}
                          </span>
                        </div>
                        <div className="vertical-align-middle mb-2">
                          {item.trip_name &&
                            item.trip_start_date + " - " + item.trip_end_date}
                        </div>
                        <div className="price-amount-container">
                          <div className="d-flex mb-2">
                            <span>
                              NT$: {+item.trip_price || item.product_price}
                            </span>
                            <span className="ml-3">
                              數量: {item.trip_amount || item.product_amount}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="ml-auto mt-auto to-comment-container ">
                        {item.trip_name && (
                          <Button
                            className="to-comment"
                            onClick={() => this.getModal(item.code)}
                            reviewinfo={item}
                          >
                            前往評論
                          </Button>
                        )}

                        <CommentModal
                          show={this.state.addModalShow[item.code]}
                          onHide={addModalClose}
                          reviewinfo={item}
                          userInfo={this.props.userInfo}
                        />
                      </div>
                    </Col>
                  ))}
                  <div className="mt-3 d-flex status">
                    <p>狀態: {order.order_status}</p>
                    <p className="ml-auto">合計:{order.order_total_price}</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default MemberOrderList;
