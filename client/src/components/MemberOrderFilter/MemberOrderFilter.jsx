import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import ".././CommentFilterBox/CommentFilterBox.css";
class MemberOrderFilter extends Component {
  state = {
    titleName: "選擇訂單狀態"
  };

  handleSelect = eventKey => {
    this.setState({ titleName: eventKey });
    this.props.selectComments(eventKey);
  };

  render() {
    return (
      <DropdownButton
        id="dropdown-basic-button"
        title={this.state.titleName}
        className="member-comment-filter-container"
        onSelect={this.handleSelect}
      >
        <Dropdown.Item eventKey="所有訂單狀態" value="1">
          所有目的地
        </Dropdown.Item>
        <Dropdown.Item eventKey="已送達" value="1">
          已送達
        </Dropdown.Item>
        <Dropdown.Item eventKey="運送中" value="2">
          運送中
        </Dropdown.Item>
      </DropdownButton>
    );
  }
}

export default MemberOrderFilter;
