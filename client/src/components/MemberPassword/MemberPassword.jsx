import React, { Component } from "react";
import { Accordion, Card, Button, Form } from "react-bootstrap";
import "./MemberPassword.css";
class MemberPassword extends Component {
  state = {};
  render() {
    return (
      <Accordion
        defaultActiveKey="0"
        className="member-password-container mt-4"
      >
        <Card>
          <Card.Header className="member-password-title">
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              <span>密碼管理</span>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse
            eventKey="1"
            className="member-password-content-container"
          >
            <Card.Body>
              <Form onSubmit={this.props.onSubmit} method="POST">
                <p>須包含至少5個字符，最多10個字符</p>
                <Form.Group className="width-300">
                  <Form.Label className="text-align-left">現有密碼</Form.Label>
                  <Form.Control
                    className="my-2"
                    type="password"
                    name="password"
                    onChange={this.props.onChange}
                  />
                </Form.Group>
                <Form.Group className="width-300 mb-4">
                  <Form.Label className="text-align-left mt-2">新密碼</Form.Label>
                  <Form.Control
                    className="my-2"
                    type="password"
                    name="new_password"
                    onChange={this.props.onChange}
                    placeholder="更改密碼"
                  />
                  {
                    <div className="alert alert-danger error-msg">
                      {this.props.errors.new_password || ""}
                    </div>
                  }
                  <Form.Control
                    type="password"
                    onChange={this.props.onChange}
                    name="comfirm_password"
                    placeholder="確認新密碼"
                  />
                  {
                    <div className="alert alert-danger error-msg">
                      {this.props.errors.comfirm_password || ""}
                    </div>
                  }
                </Form.Group>
                <Button type="submit">儲存</Button>
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}

export default MemberPassword;
