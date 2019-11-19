import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import sotckholm from "./images/sotckholm-lhiver-1221 (2).jpg";
import { ReactComponent as Calendar } from "./images/calendar.svg";
// import { ReactComponent as Like } from "./images/like.svg";
import Like from "../../common/Like";
import "./MemberWishList.css";

class WishList extends Component {
  handleLike = async wish => {
    // con  sole.log(wish);
    const wishes = [...this.props.userWishes];
    // console.log(wishes)
    const index = wishes.indexOf(wish);
    wishes[index].liked = !wishes[index].liked;
    this.setState({ wishes });
    // if (confirm(`確定要將此商品移除願望清單嗎?`)) {}
    fetch("http://localhost:3001/members_wish_list_del/" + wish.w_id, {
      method: "DELETE"
    })
      .then(() => {
        console.log("removed");
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    const { userWishes } = this.props;
    if (userWishes === null) return null;

    return (
      <div className="wish-list-container">
        <Row>
          <Col className="wish-list-title">
            <span>願望清單</span>
          </Col>
        </Row>
          <Row>
        {userWishes.map(wish => (
            <Col className="card-container d-flex col-lg-4 col-md-6 col-12">
              <Card className="wish-list-item">
                <Card.Img variant="top" src={sotckholm} />
                <Card.Body className="py-3">
                  <span style={{ color: "#96daf0" }}>{wish.product_label}</span>
                  <Card.Title className="mt-1 mb-2">
                    {wish.product_name}
                  </Card.Title>
                  <div className="d-flex align-items-center mb-2">
                    <Calendar />
                    <span className="ml-2">{wish.product_info}</span>
                  </div>
                  <div className="mb-2">
                    <span className="vertical-align-middle product-duration">
                      {wish.trip_start_date} - {wish.trip_end_date}
                    </span>
                  </div>
                  <div>
                    <h5>NT${wish.product_price}</h5>
                  </div>
                </Card.Body>
                <Card.Footer className="text-muted justify-content-center d-flex align-items-center">
                  <Like
                    liked={wish.liked}
                    onClick={() => this.handleLike(wish)}
                  />
                  <span className="pl-1">移出願望清單</span>
                </Card.Footer>
              </Card>
            </Col>
        ))}
          </Row>
      </div>
    );
  }
}

export default WishList;
