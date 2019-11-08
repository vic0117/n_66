import React, { Component } from "react";
import "./MemberCommentList.css";
import { ReactComponent as Star } from "./images/star.svg";
import { Dropdown, DropdownButton, Row, Col } from "react-bootstrap";

class MemberCommentList extends Component {
  render() {
    return (


      <div className="comment-container d-flex flex-column ">
        <Row className="mx-0">
          <Col className="comment-title">
            <span>我的評論</span>
          </Col>
        </Row>
        <Row className="comment-info-container">
          <div className="rank-container">
            <Star className="rank" />
            <Star className="rank" />
            <Star className="rank" />
            <Star className="rank" />
            <Star className="rank" />
            <p className="my-2">張小姐</p>
            <div className="duration">2020/01/04 - 2020/01/09</div>
            <p className="mt-2 mb-4">
              這是一個非常美好的時光，並得到了出色的指導。
              非常感謝Alvaro，他非常關心我們，並與我們分享了他的豐富知識。
        </p>
          </div>

          <div className="comment-btn-outer-container">
            <div className="mt-auto comment-btn-container">
              <a href="#" className="comment-btn">
                <span>我們的瑞典之旅</span>
              </a>
            </div>
          </div>
        </Row>

        <Row className="comment-info-container">
          <div className="rank-container">
            <Star className="rank" />
            <Star className="rank" />
            <Star className="rank" />
            <Star className="rank" />
            <Star className="rank" />
            <p className="my-2">張小姐</p>
            <div className="duration">2020/01/04 - 2020/01/09</div>
            <p className="mt-2 mb-4">
              這是一個非常美好的時光，並得到了出色的指導。
              非常感謝Alvaro，他非常關心我們，並與我們分享了他的豐富知識。
        </p>
          </div>

          <div className="comment-btn-outer-container">
            <div className="mt-auto comment-btn-container">
              <a href="#" className="comment-btn">
                <span>我們的瑞典之旅</span>
              </a>
            </div>
          </div>
        </Row>
      </div>
    );
  }
}

export default MemberCommentList;
