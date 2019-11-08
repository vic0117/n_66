import React, { Component } from "react";
import { Form, Accordion, Card, Button, Row } from "react-bootstrap";
import "./MemberInfoList.css";
class MemberInfoList extends Component {
  state = {};
  render() {
    const { data, handleUpdate } = this.props;
    console.log(data);

    return (
      <Accordion defaultActiveKey="0" className="member-info-list-container">
        <Card>
          <Card.Header className="member-info-list-title">
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <span>個人資訊</span>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse
            eventKey="0"
            className="member-info-content-container"
          >
            <Card.Body>
              <Form>
                <p>
                  以下資訊僅用於幫助你在付款時自動填寫你的個人資料，你的資料將會安全地被客路保存且不會公開
                </p>

                <Form.Group className="d-flex">
                  <div className="width-100 mr-3">
                    <Form.Label className="text-align-left">稱謂</Form.Label>
                    <Form.Control as="select" className="dropdowns my-2">
                      <option>請選擇</option>
                      <option>先生</option>
                      <option>女士</option>
                    </Form.Control>
                  </div>
                  <div className="width-200 mr-2">
                    <Form.Label className="text-align-left">
                      中文姓名
                    </Form.Label>
                    <Form.Control
                      className="my-2"
                      type="text"
                      placeholder="姓氏"
                    />
                  </div>
                  <div className="width-200">
                    <Form.Label className="text-align-left"></Form.Label>
                    <Form.Control
                      className="my-2"
                      type="text"
                      placeholder="名字"
                    />
                  </div>
                </Form.Group>

                <Form.Group className="d-flex">
                  <div className="width-100 mr-3"></div>
                  <div className="width-200 mr-2">
                    <Form.Label className="text-align-left">
                      英文姓名
                    </Form.Label>
                    <Form.Control
                      className="my-2"
                      type="text"
                      placeholder="姓氏"
                    />
                  </div>
                  <div className="width-200">
                    <Form.Label className="text-align-left"></Form.Label>
                    <Form.Control
                      className="my-2"
                      type="text"
                      placeholder="名字"
                    />
                  </div>
                </Form.Group>
                <Form.Group className="d-flex birthday">
                  <div className="width-100 mr-3 ">
                    <Form.Label className="text-align-left">生日</Form.Label>
                    <Form.Control
                      className="my-2"
                      type="text"
                      placeholder="西元年"
                    />
                  </div>
                  <div className="mt-4 mr-2">
                    <Form.Label className="text-align-left d-flex"></Form.Label>
                    <Form.Control as="select" className="dropdowns my-2">
                      <option>月份</option>
                      <option>1</option>
                      <option>2</option>
                    </Form.Control>
                  </div>
                  <div className="mt-4 mr-3">
                    <Form.Label className="text-align-left d-flex"></Form.Label>
                    <Form.Control as="select" className="dropdowns my-2">
                      <option>日期</option>
                      <option>1</option>
                      <option>2</option>
                    </Form.Control>
                  </div>
                </Form.Group>
                <Form.Group className="width-200">
                  <Form.Label className="text-align-left">護照號碼</Form.Label>
                  <Form.Control className="my-2" type="text" />
                </Form.Group>

                <Form.Group className="d-flex">
                  <div className="width-100 mr-3">
                    <Form.Label className="text-align-left">
                      郵遞區號
                    </Form.Label>
                    <Form.Control className="my-2" type="text" />
                  </div>
                  <div className="width-350 ">
                    <Form.Label className="text-align-left">
                      聯絡地址
                    </Form.Label>
                    <Form.Control className="my-2" type="text" />
                  </div>
                </Form.Group>
                <Form.Group className="width-200">
                  <Form.Label className="text-align-left">電話號碼</Form.Label>
                  <Form.Control className="my-2" type="tel" />
                </Form.Group>

                <Form.Group className="width-350 mb-5">
                  <Form.Label className="text-align-left my-2">
                    電子信箱
                  </Form.Label>
                  <Form.Control type="email" />
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

export default MemberInfoList;
