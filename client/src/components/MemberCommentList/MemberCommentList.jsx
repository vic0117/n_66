import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import { paginate } from "../../utils/paginate";
import Pagination from "../../common/Pagination";
import CommentEditModal from "../CommenEditModal/CommentEditModal";
import { toast } from "react-toastify";
import axios from "axios";
import "./MemberCommentList.css";

class MemberCommentList extends Component {
  state = {
    pageSize: 4, // 每頁幾筆
    currentPage: 1,
    addModalShow: false,
    rating: "",
    reviewInfo: "",
    reviews: ""
  };

  handlePageChange = page => {
    window.scrollTo(0, 0);
    this.setState({ currentPage: page });
  };

  getModal = value => {
    let key_to_update = {};
    key_to_update[value] = true;
    this.setState({
      addModalShow: Object.assign({}, this.state.addModalShow, key_to_update)
    });
  };

  closeModal = e => {
    this.setState({ addModalShow: false });
  };

  handleCommentsSubmit = async item => {
    console.log(item);
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    let info = {
      rating: this.state.rating,
      reviews: this.state.reviews
    };
    axios
      .put(
        `http://localhost:3001/members_comments/update/${item.c_id}`,
        info,
        config
      )
      .then(res => {
        function pageReload() {
          window.location = "/account/comments";
        }
        if (res.data.success) {
          toast.success(res.data.msg.text);
          window.setTimeout(pageReload, 1500);
        }
        toast.error(res.data.msg.text);
      })
      .catch(error => {
        console.error(error);
      });
  };

  handleRating = value => {
    this.setState({ rating: value });
  };

  handleSubmitComment = value => {
    this.setState({ reviewInfo: value });
  };

  handleCommentContent = value => {
    this.setState({ reviews: value });
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
            <Row
              className="member_comment-info-container"
              key={comment.c_id}
              style={{ position: "relative" }}
            >
              <div className="rank-container">
                <div className="d-flex">
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={comment.rating}
                  />
                  <Button
                    className="to-comment ml-auto"
                    onClick={() => this.getModal(comment.c_id)}
                    style={{
                      position: "absolute",
                      bottom: "3rem",
                      right: "2.5rem"
                    }}
                  >
                    修改評論
                  </Button>
                  <CommentEditModal
                    show={this.state.addModalShow[comment.c_id]}
                    userinfo={this.props.userInfo}
                    onHide={this.closeModal}
                    reviewinfo={comment}
                    handlerating={this.handleRating}
                    handlesubmitcomment={this.handleSubmitComment}
                    handlecommentcontent={this.handleCommentContent}
                    handlecommentssubmit={() =>
                      this.handleCommentsSubmit(comment)
                    }
                  />
                </div>
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
