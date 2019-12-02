import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MemberCoupon.css";
class MemberCoupon extends Component {
  render() {
    const { userCoupons } = this.props;
    if (userCoupons === null) return null;
    return (
      <div className="coupon-outer-container">
        <Row className="mx-0">
          <Col className="coupon-title">
            <span>我的優惠卷</span>
          </Col>
        </Row>
        <Row className="mx-0" style={{ padding: "0px 1.75rem" }}>
          {userCoupons.map(coupon => (
            <div className="coupon-container" key={coupon.c_id}>
              <div className="banner">
                <h5 className="py-2">{coupon.discount}折優惠卷</h5>
                <span>適用所有{coupon.type}類產品</span>
                <p className="m-0">有效期限: {coupon.valid_date}</p>
              </div>
              <div className="footer d-flex">
                <button className="btn">
                  <Link
                    to="/products"
                    style={{ textDecoration: "none", color: "#242a3a" }}
                    className="use-coupon"
                  >
                    前往使用
                  </Link>
                </button>
              </div>
              <div className="left-circle"></div>
              <div className="right-circle"></div>
            </div>
          ))}
        </Row>
      </div>
    );
  }
}

export default MemberCoupon;
