import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import "./CommentModal.css";

class CommentModal extends Component {
  state = {
    rating: 1,
    reviews: "",
    commentContent: ""
  };

  handleChange = event => {
    this.setState({ commentContent: event.target.value });
  };

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({ rating: nextValue });
  };

  onClick = async value => {
    await this.props.handlerating(this.state.rating);
    await this.props.handlesubmitcomment(value);
    await this.props.handlecommentcontent(this.state.commentContent);
    await this.props.handlecommentssubmit();
  };

  render() {
    const { rating } = this.state;
    const { reviewinfo } = this.props;
    console.log(this.props.reviewinfo);
    return (
      <>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {reviewinfo.trip_name}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <h4 style={{ fontSize: "1rem" }}>
              {this.props.userinfo.last_name_zh}
              {this.props.userinfo.first_name_zh}
            </h4>
            <div className="d-flex modal-rank-container">
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={rating}
                onStarClick={this.onStarClick.bind(this)}
              />
            </div>
            <textarea
              className="comment-content"
              type="text"
              name="review"
              id="review"
              placeholder="分享您的旅行體驗..."
              value={this.state.commentContent}
              onChange={this.handleChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="submit"
              className="modal-btn"
              onClick={() => this.onClick(this.props.reviewinfo)}
            >
              送出
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default CommentModal;
