import React, { Component } from "react";
import CommentFilterBox from '../../components/CommentFilterBox/CommentFilterBox';
import MemberCommentList from '../../components/MemberCommentList/MemberCommentList';
import { Row, Col } from "react-bootstrap";
import { ReactComponent as Star } from "./images/star.svg";
import { ReactComponent as StarSolid } from "./images/star-solid.svg";


import "./Comment.css";
class Comment extends Component {
  state = {};
  render() {
    return (
      <div className="container ">
        <Row>
          <Col>
            <div className="text-center comment-header">
              <h3 className="my-2">公開且透明</h3>
              <p style={{ color: "#96DAF0" }} className="my-4">
                因為您的意見對我們很重要，所以我們請您留下您寶貴的意見
              </p>
              <p className="m-auto">
                我們的首要工作是設計旅行，為了保證質量和透明度，我們選擇直接發布所有66°N旅行者的意見。如果您不滿意或覺得哪裡需要改進，歡迎留言讓我們知道，我們會盡快回覆您的問題。
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="col-lg-4 col-md-12 col-12 comment-regulation-container">
            <div className="comment-regulation ">
              <h5>如何評論?</h5>
              <ol className="comment-term">
                <li>參加66°N的旅行</li>
                <li>
                  旅行結束後，我們將向您發送電子郵件，讓我們知 道您的感想。
                </li>
                <li>
                  您的意見（無論是正面還是負面）都直接發佈在我 們的網站上。
                </li>
              </ol>
              <a href="#1">了解更多信息</a>
            </div>
            <div className="rank-info mt-4">
              <div className="d-flex align-items-center mb-1">
                <StarSolid className="star" />
                <StarSolid className="star" />
                <StarSolid className="star" />
                <StarSolid className="star" />
                <StarSolid className="star" />
                <div className="ml-auto rank-des">很滿意</div>
              </div>
              <div className="d-flex align-items-center mb-1">
                <StarSolid className="star" />
                <StarSolid className="star" />
                <StarSolid className="star" />
                <StarSolid className="star" />
                <Star className="star" />
                <div className="ml-auto rank-des">滿意</div>
              </div>
              <div className="d-flex align-items-center mb-1">
                <StarSolid className="star" />
                <StarSolid className="star" />
                <StarSolid className="star" />
                <Star className="star" />
                <Star className="star" />
                <div className="ml-auto rank-des">普通</div>
              </div>
              <div className="d-flex align-items-center mb-1">
                <StarSolid className="star" />
                <StarSolid className="star" />
                <Star className="star" />
                <Star className="star" />
                <Star className="star" />
                <div className="ml-auto rank-des">不滿意</div>
              </div>
              <div className="d-flex align-items-center">
                <StarSolid className="star" />
                <Star className="star" />
                <Star className="star" />
                <Star className="star" />
                <Star className="star" />
                <div className="ml-auto rank-des">非常不滿意</div>
              </div>
            </div>
          </Col>

          <Col className="col-lg-8 member-comment-container">
            <div className="member-comment">
              {/* <DropdownButton
                id="dropdown-basic-button"
                title="所有目的地"
                className="member-comment-filter-container"
              >
                <Dropdown.Item href="#/action-1">ActAion</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton> */}
              <CommentFilterBox />
            </div>
            <div className="mt-4">
              <MemberCommentList />
            </div>
            <div className="mt-4">
              <MemberCommentList />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Comment;
