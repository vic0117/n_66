import React, { Component } from "react";
import { Form, Accordion, Card, Button } from "react-bootstrap";
import "./MemberInfoList.css";
class MemberInfoList extends Component {
  state = {};
  render() {
    const { userInfo } = this.props;
    console.log(userInfo);

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
              <Form onSubmit={this.props.onSubmit} method="POST">
                <p>
                  以下資訊僅用於幫助你在付款時自動填寫你的個人資料，你的資料將會安全地被客路保存且不會公開
                </p>

                <Form.Group className="d-flex">
                  <div className="width-100 mr-3">
                    <Form.Label className="text-align-left">稱謂</Form.Label>
                    <Form.Control
                      as="select"
                      className="dropdowns my-2"
                      name="gender"
                      value={userInfo.gender}
                      onChange={this.props.onChange}
                    >
                      <option value="0">請選擇</option>
                      <option value="先生">先生</option>
                      <option value="女士">女士</option>
                      <option value="小姐">小姐</option>
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
                      name="last_name_zh"
                      value={userInfo.last_name_zh}
                      onChange={this.props.onChange}
                    />
                  </div>
                  <div className="width-200">
                    <Form.Label className="text-align-left"></Form.Label>
                    <Form.Control
                      className="my-2"
                      type="text"
                      placeholder="名字"
                      name="first_name_zh"
                      value={userInfo.first_name_zh}
                      onChange={this.props.onChange}
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
                      name="last_name_en"
                      value={userInfo.last_name_en}
                      onChange={this.props.onChange}
                    />
                  </div>
                  <div className="width-200">
                    <Form.Label className="text-align-left"></Form.Label>
                    <Form.Control
                      className="my-2"
                      type="text"
                      placeholder="名字"
                      name="first_name_en"
                      value={userInfo.first_name_en}
                      onChange={this.props.onChange}
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
                      name="bday_year"
                      value={userInfo.bday_year}
                      onChange={this.props.onChange}
                    />
                  </div>
                  <div className="mt-4 mr-2">
                    <Form.Label className="text-align-left d-flex"></Form.Label>
                    <Form.Control
                      as="select"
                      className="dropdowns my-2"
                      name="bday_month"
                      value={userInfo.bday_month}
                      onChange={this.props.onChange}
                    >
                      <option value="0">月份</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </Form.Control>
                  </div>
                  <div className="mt-4 mr-3">
                    <Form.Label className="text-align-left d-flex"></Form.Label>
                    <Form.Control
                      as="select"
                      className="dropdowns my-2"
                      name="bday_date"
                      value={userInfo.bday_date}
                      onChange={this.props.onChange}
                    >
                      <option value="0">日期</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </Form.Control>
                  </div>
                </Form.Group>
                <Form.Group className="width-200">
                  <Form.Label className="text-align-left">護照號碼</Form.Label>
                  <Form.Control
                    className="my-2"
                    type="text"
                    name="passport"
                    value={userInfo.passport}
                    onChange={this.props.onChange}
                  />
                </Form.Group>

                <Form.Group className="d-flex">
                  <div className="width-100 mr-3">
                    <Form.Label className="text-align-left">
                      郵遞區號
                    </Form.Label>
                    <Form.Control
                      className="my-2"
                      type="text"
                      name="zip_code"
                      value={userInfo.zip_code}
                      onChange={this.props.onChange}
                    />
                  </div>
                  <div className="width-350 ">
                    <Form.Label className="text-align-left">
                      聯絡地址
                    </Form.Label>
                    <Form.Control
                      className="my-2"
                      type="text"
                      name="address"
                      value={userInfo.address}
                      onChange={this.props.onChange}
                    />
                  </div>
                </Form.Group>
                <Form.Group className="width-200">
                  <Form.Label className="text-align-left">電話號碼</Form.Label>
                  <Form.Control
                    className="my-2"
                    type="tel"
                    name="tel"
                    value={userInfo.tel}
                    onChange={this.props.onChange}
                  />
                </Form.Group>

                <Form.Group className="width-350 mb-5">
                  <Form.Label className="text-align-left my-2">
                    電子信箱
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={userInfo.email}
                    onChange={this.props.onChange}
                    disabled
                  />
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
