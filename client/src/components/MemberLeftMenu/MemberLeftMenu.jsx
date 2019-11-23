import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { ReactComponent as Users } from "./images/users.svg";
import { ReactComponent as Order } from "./images/order.svg";
import { ReactComponent as Like } from "./images/like.svg";
import { ReactComponent as Comment } from "./images/comment.svg";
import "./MemberLeftMenu.css";

class MemberLeftMenu extends Component {
  state = { my_file: "" };

  selUploadHandler = () => {
    document.querySelector("#my_file").click();
  };

  fileSelectedHandler = async e => {
    e.preventDefault();
    const { currentUser } = this.props;
    await this.setState({ my_file: e.target.files[0] });
    const fd = new FormData();
    fd.append("my_file", this.state.my_file);
    // fetch(

    let config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    axios
      .post(
        `http://localhost:3001/members_upload_file/${currentUser.user.u_id}`,
        fd,
        config
      )
      .then(res => {
        if (res.data.success) {
          function pageReload() {
            window.location = "/account";
          }
          toast.success(res.data.msg.text);
          window.setTimeout(pageReload, 3000);
        } else {
          toast.error(res.data.msg.text);
        }
        console.log(res);
      });
  };

  render() {
    const { userInfo, userCoupons } = this.props;
    if (!userInfo.u_id) return <></>;
    return (
      <div className="member-left-menu-sticky">
        <Card className="member-left-menu-container mb-4 ">
          <form className="d-flex" encType="multipart/form-data" method="POST">
            <input
              type="file"
              id="my_file"
              name="my_file"
              style={{ display: "none" }}
              onChange={this.fileSelectedHandler}
            />
            <Card.Img
              variant="top"
              src={`http://localhost:3001/static/images/${userInfo.avatar}`}
              className="avatar"
              onClick={this.selUploadHandler}
            />
          </form>

          <Card.Body>
            <div className="text-align-center card-body-1">
              <Card.Title>
                <span>
                  {userInfo.last_name_zh}
                  {userInfo.first_name_zh}
                </span>
              </Card.Title>
              <Card.Text className="text-align-center">
                <Link to="/account">編輯個人資訊</Link>
              </Card.Text>
            </div>
            <div className="text-align-center card-body-2">
              <Card.Title>
                <Link to="/account/coupons">{userCoupons.length}</Link>
              </Card.Title>
              <Card.Text className="text-align-center">
                <span>可用優惠碼</span>
              </Card.Text>
            </div>
            <div className="text-align-center card-body-3">
              <ListGroup>
                <ListGroup.Item className="member-ul-container">
                  <Link
                    to="/account"
                    className="vertical-align-middle"
                    style={{ height: "100%" }}
                  >
                    <Users height="16" width="16" />
                    <span className="vertical-align-middle">個人資訊</span>
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="member-ul-container">
                  <Link
                    to="/account/orders"
                    className="vertical-align-middle"
                    style={{ height: "100%" }}
                  >
                    <Order height="16" width="16" />
                    <span className="vertical-align-middle">訂單紀錄</span>
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="member-ul-container">
                  <Link
                    to="/account/comments"
                    className="vertical-align-middle"
                    style={{ height: "100%" }}
                  >
                    <Comment height="16" width="16" />
                    <span className="vertical-align-middle">我的評論</span>
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="member-ul-container">
                  <Link
                    to="/account/wishlists"
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
