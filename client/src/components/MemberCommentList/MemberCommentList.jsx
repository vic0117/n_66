import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import { Row, Col } from "react-bootstrap";
import "./MemberCommentList.css";

class MemberCommentList extends Component {
  render() {
    const { userComments } = this.props;
    if (userComments === null) return null;
    console.log(userComments);
    return (
      <div className="comment-container d-flex flex-column ">
        <Row className="mx-0">
          <Col className="comment-title">
            <span>我的評論</span>
          </Col>
        </Row>
        {userComments.map(comment => (
          <Row className="comment-info-container" key={comment.c_id}>
            <div className="rank-container">
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={comment.rating}
              />
              <p>
                {comment.last_name_zh}
                {comment.gender}
              </p>
              <div className="duration">
                {comment.trip_start_date} - {comment.trip_end_date}
              </div>
              <p className="mt-2 mb-4 reviews">{comment.reviews}</p>
            </div>

            <div className="comment-btn-outer-container">
              <div className="mt-auto comment-btn-container">
                <a href="#1" className="comment-btn">
                  <span style={{ fontSize: "14px" }}>
                    我們的{comment.trip_country}之旅
                  </span>
                </a>
              </div>
            </div>
          </Row>
        ))}
      </div>
    );
  }
}

export default MemberCommentList;
