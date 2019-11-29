import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import "./CommentList.css";

class CommentList extends Component {
  render() {
    let classes = "fa fa-thumbs-o-up";
    const { comments, liked, likedAmount, onClick } = this.props;
    if (liked) classes = "fa fa-thumbs-up";
    return (
      <>
        {comments.map(comment => (
          <div
            className="comment-container d-flex flex-column mb-4"
            key={comment.c_id}
          >
            <Row className="comment-info-container">
              <div className="rank-container ">
                <div className="d-flex mb-3">
                  <div className="comment-avatar mr-3">
                    <img
                      src={`http://localhost:3001/static/images/${comment.avatar}`}
                      alt=""
                    />
                  </div>
                  <div>
                    {comment.last_name_zh}
                    {comment.gender}
                    <div style={{ height: "2rem" }} className="mt-1">
                      <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={comment.rating}
                      />
                    </div>
                    <div className="duration">
                      {comment.trip_start_date} - {comment.trip_end_date}
                    </div>
                  </div>
                </div>
                <p className="mt-2 mb-4 comment-text">{comment.reviews}</p>
              </div>

              <div className="comment-btn-outer-container d-flex">
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
                <div className="ml-auto">
                  <i
                    class={classes}
                    // class="fa fa-thumbs-o-up"
                    aria-hidden="true"
                    onClick={() => onClick(comment.c_id)}
                    style={{
                      cursor: "pointer"
                    }}
                  />
                  <spna>{likedAmount}</spna>
                </div>
              </div>
            </Row>
          </div>
        ))}
      </>
    );
  }
}

export default CommentList;
