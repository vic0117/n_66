import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./CommentFilterBox.css";
class CommentFilterBox extends Component {
  state = {
	  titleName:'選擇目的地',

  };

  handleSelect=(eventKey)=>{
	  this.setState({titleName:eventKey})
	  this.props.selectComments(eventKey)
  }


  render() {
    return (
      <DropdownButton
        id="dropdown-basic-button"
        title={this.state.titleName}
        className="member-comment-filter-container"
			onSelect={this.handleSelect}
      >
        <Dropdown.Item eventKey="所有目的地" value="1">
            所有目的地
          </Dropdown.Item>
          <Dropdown.Item eventKey="阿拉斯加州" value="1">
            阿拉斯加州
          </Dropdown.Item>
          <Dropdown.Item eventKey="南極洲" value="2">
            南極洲
          </Dropdown.Item>
          <Dropdown.Item eventKey="加拿大" value="3">
            加拿大
          </Dropdown.Item>
          <Dropdown.Item eventKey="芬蘭" value="3">
            芬蘭
          </Dropdown.Item>
          <Dropdown.Item eventKey="格陵蘭" value="3">
            格陵蘭
          </Dropdown.Item>
          <Dropdown.Item eventKey="費洛群島" value="3">
            費洛群島
          </Dropdown.Item>
          <Dropdown.Item eventKey="冰島" value="3">
            冰島
          </Dropdown.Item>
          <Dropdown.Item eventKey="挪威" value="3">
            挪威
          </Dropdown.Item>
          <Dropdown.Item eventKey="俄羅斯" value="3">
            俄羅斯
          </Dropdown.Item>
          <Dropdown.Item eventKey="斯匹茲卑爾根島" value="3">
            斯匹茲卑爾根島
          </Dropdown.Item>
          <Dropdown.Item eventKey="瑞典" value="3">
            瑞典
          </Dropdown.Item>
      </DropdownButton>
    );
  }
}

export default CommentFilterBox;
