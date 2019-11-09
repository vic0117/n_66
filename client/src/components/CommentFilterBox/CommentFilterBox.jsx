import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./CommentFilterBox.css";
class CommentFilterBox extends Component {
  state = {};
  render() {
    return (
      <DropdownButton
        id="dropdown-basic-button"
        title="所有目的地"
        className="member-comment-filter-container"
      >
        <Dropdown.Item href="#/action-1">ActAion</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
    );
  }
}

export default CommentFilterBox;
