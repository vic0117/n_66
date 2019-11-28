import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { paginate } from "../../utils/paginate";
import Pagination from "../../common/Pagination";
import "./MemberCommentList.css";

class MemberCommentList extends Component {
  state = {
    pageSize: 4, // 每頁幾筆
    currentPage: 1
  };

  handlePageChange = page => {
    window.scrollTo(0, 0);
    this.setState({ currentPage: page });
  };

  render() {
    const { userComments } = this.props;
    const { pageSize, currentPage } = this.state;
    if (userComments === null) return null;
    const { length: count } = userComments;
    const comments = paginate(userComments, currentPage, pageSize);
    return (
      <>
        <div className="comment-container d-flex flex-column ">
          <Row className="mx-0">
            <Col className="comment-title">
              <span>我的評論</span>
            </Col>
          </Row>
          {comments.map(comment => (
            <Row className="member_comment-info-container" key={comment.c_id}>
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
                  <Link
                    to={`/trips/page/1?place=${comment.trip_country}&type=活動與主題&month=出發月份&search=`}
                    className="comment-btn"
                  >
                    <span style={{ fontSize: "14px" }}>
                      我們的{comment.trip_country}之旅
                    </span>
                  </Link>
                </div>
              </div>
            </Row>
          ))}
        </div>
        <div className="mt-4 d-flex mx-auto justify-content-center">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </>
    );
  }
}

export default MemberCommentList;
