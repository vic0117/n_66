import React, { Component } from "react";
import HomeNavBar from "./../HomeNavBar/HomeNavBar";
import "./CommentHeader.css";
import { ReactComponent as Reviews } from "./images/reviews.svg";

class CommentHeader extends Component {
  state = {};
  render() {
    return (
      <>
        <HomeNavBar currentUser={this.props.currentUser} />
        <div className="comment-header-container">
          <div className="filter"></div>
          <div className="content ">
            <Reviews className="reviews" />
            <div>評論</div>
            <div className="d-flex justify-content-center m-1">
              <div className="votes">{this.props.comments}則評論</div>
              <div className="ranking">{this.props.ratingAvg} / 5</div>
            </div>

            <span>“您的意見對我們很重要”</span>
          </div>
        </div>
      </>
    );
  }
}

export default CommentHeader;
