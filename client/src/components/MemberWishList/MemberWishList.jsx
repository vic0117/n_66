import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as Calendar } from "./images/calendar.svg";
import Like from "../../common/Like";
import "./MemberWishList.css";

class WishList extends Component {
  handleLike = async wish => {
    if (window.confirm(`確定要將此商品移除願望清單嗎?`)) {
      const wishes = [...this.props.userWishes];
      // console.log(wishes)
      const index = wishes.indexOf(wish);
      wishes[index].liked = !wishes[index].liked;
      this.setState({ wishes });
      fetch("http://localhost:3001/members_wish_list_del/" + wish.w_id, {
        method: "DELETE"
      })
        .then(() => {
          console.log("removed");
          window.location = "/account/wishlists";
        })
        .catch(err => {
          console.error(err);
        });
    }
  };

  render() {
    const { userWishes } = this.props;
    if (userWishes === null) return null;
    console.log(userWishes);
    return (
      <div className="wish-list-container">
        <Row>
          <Col className="wish-list-title">
            <span>願望清單</span>
          </Col>
        </Row>
        <Row>
          {userWishes.map(wish => (
            <div className="card-container d-flex col-lg-4" key={wish.w_id}>
              <Card className="wish-list-item">
                <Link
                  to={`/${wish.product_router}/${wish.product_id}`}
                  className="link-container"
                >
                  <div
                    style={{
                      width: "100%",
                      height: 150,
                      borderBottom: "1px solid #eaeaea"
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={`http://localhost:3000/images/${wish.product_img}`}
                    />
                  </div>
                  <Card.Body className="py-3">
                    <span style={{ color: "#96daf0" }}>
                      {wish.product_label}
                    </span>
                    <Card.Title className="mt-1 mb-2">
                      {wish.product_name}
                    </Card.Title>
                    <div className="d-flex align-items-center mb-2">
                      <span>
                        {wish.product_router === "trips"
                          ? wish.trip_angency
                          : null}
                      </span>
                      <span
                        className={
                          wish.product_router === "trips" ? "ml-4" : null
                        }
                      ></span>
                      <Calendar />
                      <span className="ml-1">
                        {wish.product_info}
                        {wish.product_router === "trips" ? "天" : ""}
                      </span>
                    </div>
                    <div className="mb-2">
                      <span className="vertical-align-middle product-duration">
                        {wish.product_router === "trips"
                          ? `${wish.trip_start_date} - ${wish.trip_end_date}`
                          : `重量: ${wish.trip_start_date}`}
                      </span>
                    </div>
                    <div>
                      <h5>NT${wish.product_price}</h5>
                    </div>
                  </Card.Body>
                </Link>
                <Card.Footer className="text-muted justify-content-center d-flex align-items-center">
                  <Like
                    liked={wish.liked}
                    onClick={() => this.handleLike(wish)}
                  />
                  <span className="pl-1">移出願望清單</span>
                </Card.Footer>
              </Card>
            </div>
          ))}
        </Row>
      </div>
    );
  }
}

export default WishList;
