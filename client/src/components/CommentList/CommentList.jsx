import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import { Row } from "react-bootstrap";
import axios from "axios";
import "./CommentList.css";

class CommentList extends Component {
  state = { comments: null };
  async componentDidMount() {
    const { data: comments } = await axios.get(
      "http://localhost:3001/comments"
    );
    console.log(comments);
    await this.setState({ comments: comments.rows });
  }
  render() {
    const { comments } = this.state;
    // console.log(comments);
    if (comments === null) return null;
    return (
      <>
        {comments.map(comment => (
          <div
            className="comment-container d-flex flex-column"
            key={comment.c_id}
          >
            <Row className="comment-info-container">
              <div className="rank-container ">
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
                <p className="mt-2 mb-4">{comment.reviews}</p>
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
          </div>
        ))}
      </>
    );
  }
}

export default CommentList;
