import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import ".././CommentFilterBox/CommentFilterBox.css";

class MemberWishFilter extends Component {
  state = {
    titleName: "選擇商品類型"
  };

  handleSelect = eventKey => {
    this.props.onSelectWishes(eventKey);
    console.log(eventKey);
    if (eventKey === "trips") eventKey = "旅遊行程";
    if (eventKey === "products") eventKey = "戶外用品";
    this.setState({ titleName: eventKey });
  };

  render() {
    return (
      <DropdownButton
        id="dropdown-basic-button"
        title={this.state.titleName}
        className="member-comment-filter-container"
        onSelect={this.handleSelect}
      >
        <Dropdown.Item eventKey="選擇商品類型" value="1">
          選擇商品類型
        </Dropdown.Item>
        <Dropdown.Item eventKey="trips" value="2">
          旅遊行程
        </Dropdown.Item>
        <Dropdown.Item eventKey="products" value="3">
          戶外用品
        </Dropdown.Item>
      </DropdownButton>
    );
  }
}

export default MemberWishFilter;
