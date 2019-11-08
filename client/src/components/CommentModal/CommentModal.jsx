import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { ReactComponent as Star } from "./images/star.svg";
import { ReactComponent as StarSolid } from "./images/star-solid.svg";
import "./CommentModal.css";
class CommentModal extends Component {
  state = {};

  render() {
    return (
      <form>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              冬季的斯格哥爾摩
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <h4>用戶名</h4>
            <div className="d-flex modal-rank-container">
              <Star height="16" width="16" />
              <Star height="16" width="16" />
              <Star height="16" width="16" />
              <Star height="16" width="16" />
              <Star height="16" width="16" />
            </div>
            <textarea
              className="comment-content"
              type="text"
              name=""
              id=""
              placeholder="分享您的旅行體驗..."
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide} className="modal-btn">
              送出
            </Button>
            <Button onClick={this.props.onHide} className="modal-btn">
              取消
            </Button>
          </Modal.Footer>
        </Modal>
      </form>
    );
  }
}

export default CommentModal;
