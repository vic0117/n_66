import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import avatar from "./images/avatar.png";
import { ReactComponent as Users } from "./images/users.svg";
import { ReactComponent as Order } from "./images/order.svg";
import { ReactComponent as Like } from "./images/like.svg";
import { ReactComponent as Comment } from "./images/comment.svg";
import "./MemberLeftMenu.css";
//

class MemberLeftMenu extends Component {
  state = {};
  render() {
    return (
      <div className="">
        <Card className="member-left-menu-container mb-4 member-left-menu-fixed">
          <Card.Img variant="top" src={avatar} className="avatar" />
          <Card.Body>
            <div className="text-align-center card-body-1">
              <Card.Title>
                <span>用戶名</span>
              </Card.Title>
              <Card.Text className="text-align-center">
                <Link to="/members">編輯個人資訊</Link>
              </Card.Text>
            </div>
            <div className="text-align-center card-body-2">
              <Card.Title>
                <Link to="/members/coupons">0</Link>
              </Card.Title>
              <Card.Text className="text-align-center">
                <span>可用優惠碼</span>
              </Card.Text>
            </div>
            <div className="text-align-center card-body-3">
              <ListGroup>
                <ListGroup.Item className="member-ul-container">
                  <Link
                    to="/members"
                    className="vertical-align-middle"
                    style={{ height: "100%" }}
                  >
                    <Users height="16" width="16" />
                    <span className="vertical-align-middle">個人資訊</span>
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="member-ul-container">
                  <Link
                    to="/members/orders"
                    className="vertical-align-middle"
                    style={{ height: "100%" }}
                  >
                    <Order height="16" width="16" />
                    <span className="vertical-align-middle">我的訂單</span>
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="member-ul-container">
                  <Link
                    to="/members/comments"
                    className="vertical-align-middle"
                    style={{ height: "100%" }}
                  >
                    <Comment height="16" width="16" />
                    <span className="vertical-align-middle">我的評價</span>
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="member-ul-container">
                  <Link
                    to="/members/wishlists"
                    className="vertical-align-middle"
                    style={{ height: "100%" }}
                  >
                    <Like height="16" width="16" />
                    <span className="vertical-align-middle">願望清單</span>
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default MemberLeftMenu;
