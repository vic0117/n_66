import React from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";

import "./CheckOutContent.css";

class CheckOutContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col className="categories-outer-container " lg={8}>
            <div className="categories-container d-flex">
              <div className="itemImg " style={{ flex: 2 }}></div>
              <div className="align-self-end mb-2 pl-2" style={{ flex: 3 }}>
                品項
              </div>
              <div className="align-self-end mb-2" style={{ flex: 2 }}>
                價格
              </div>
              <div
                className="align-self-end text-center mb-2"
                style={{ flex: 1 }}
              >
                刪除
              </div>
            </div>
            {/*  */}
            <div
              className="d-flex p-3"
              style={{ borderBottom: "1px solid #E8E8E8" }}
            >
              <div className="itemImg d-flex" style={{ flex: 2 }}>
                <Card.Img
                  variant="top"
                  src="http://localhost:3000/images/products/AquaMarinaBettaHM/AquaMarinaBettaHM.jpg"
                />
              </div>
              <div className="mb-2" style={{ flex: 3 }}>
                <h6>獨木舟</h6>
                <div className="title mb-1 font-size-14">
                  Aqua Marina Betta HM-K0 雙人充氣皮艇
                </div>
                <div className="mb-4">
                  <span className="size font-size-14">412 x 83 cm</span>
                </div>
                <div className="d-flex ">
                  <span>數量</span>
                  <a className="qtyBtn minusBtn" role="button">
                    -
                  </a>
                  <input value="1" className="counter" type="text" />
                  <a className="qtyBtn plus" role="button">
                    +
                  </a>
                </div>
              </div>
              <div className="mb-2 pl-2" style={{ flex: 2 }}>
                NT$ 12,800
              </div>
              <div className="mb-2" style={{ flex: 1 }}>
                <div className="deleteBtn ml-5">
                  <div className="slash leftLine"></div>
                  <div className="slash rightLine"></div>
                </div>
              </div>
            </div>
            <div
              className="d-flex p-3"
              style={{ borderBottom: "1px solid #E8E8E8" }}
            >
              <div className="itemImg d-flex" style={{ flex: 2 }}>
                <Card.Img
                  variant="top"
                  src="http://localhost:3000/images/products/AquaMarinaBettaHM/AquaMarinaBettaHM.jpg"
                />
              </div>
              <div className="mb-2" style={{ flex: 3 }}>
                <h6>獨木舟</h6>
                <div className="title mb-1 font-size-14">
                  Aqua Marina Betta HM-K0 雙人充氣皮艇
                </div>
                <div className="mb-4">
                  <span className="size font-size-14">412 x 83 cm</span>
                </div>
                <div className="d-flex ">
                  <span>數量</span>
                  <a className="qtyBtn minusBtn" role="button">
                    -
                  </a>
                  <input value="1" className="counter" type="text" />
                  <a className="qtyBtn plus" role="button">
                    +
                  </a>
                </div>
              </div>
              <div className="mb-2 pl-2" style={{ flex: 2 }}>
                NT$ 12,800
              </div>
              <div className="mb-2" style={{ flex: 1 }}>
                <div className="deleteBtn ml-5">
                  <div className="slash leftLine"></div>
                  <div className="slash rightLine"></div>
                </div>
              </div>
            </div>
            <div
              className="d-flex p-3"
              style={{ borderBottom: "1px solid #E8E8E8" }}
            >
              <div className="itemImg d-flex" style={{ flex: 2 }}>
                <Card.Img
                  variant="top"
                  src="http://localhost:3000/images/products/AquaMarinaBettaHM/AquaMarinaBettaHM.jpg"
                />
              </div>
              <div className="mb-2" style={{ flex: 3 }}>
                <h6>獨木舟</h6>
                <div className="title mb-1 font-size-14">
                  Aqua Marina Betta HM-K0 雙人充氣皮艇
                </div>
                <div className="mb-4">
                  <span className="size font-size-14">412 x 83 cm</span>
                </div>
                <div className="d-flex ">
                  <span>數量</span>
                  <a className="qtyBtn minusBtn" role="button">
                    -
                  </a>
                  <input value="1" className="counter" type="text" />
                  <a className="qtyBtn plus" role="button">
                    +
                  </a>
                </div>
              </div>
              <div className="mb-2 pl-2" style={{ flex: 2 }}>
                NT$ 12,800
              </div>
              <div className="mb-2" style={{ flex: 1 }}>
                <div className="deleteBtn ml-5">
                  <div className="slash leftLine"></div>
                  <div className="slash rightLine"></div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="d-flex mt-2 ">
              <div style={{ flex: 2 }}></div>
              <div className="pl-2" style={{ flex: 3 }}>
                運費
              </div>
              <div style={{ flex: 2 }}>NT$ 60</div>
              <div style={{ flex: 1 }}></div>
            </div>
            <div className="d-flex mt-1 mb-4">
              <div style={{ flex: 2 }}></div>
              <div className="pl-2" style={{ flex: 3 }}>
                總計
              </div>
              <div style={{ flex: 2 }}>NT$ 12,860</div>
              <div style={{ flex: 1 }}></div>
            </div>
          </Col>

          <Col className="orderDetail-container" lg={4}>
            <form>
              <div className="orderDetail ">
                <div className="m-2">
                  <div className="mb-1">送貨資訊</div>
                  <div className="font-size-14">XXX</div>
                  <div className="font-size-14">jordantseng1024@gmail.com</div>
                  <div className="font-size-14">
                    台北市 民生北路1段26巷8號 13-1
                  </div>
                  <a className="font-size-14" href="#7">
                    修改送貨資訊
                  </a>
                </div>
                <div className="m-2 mt-3 d-flex time-method">
                  <div>
                    <div className="mb-1">運送方式</div>
                    <div class="form-check">
                      <div>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                          checked
                        ></input>
                        <label
                          class="form-check-label text-left font-size-14"
                          for="exampleRadios1"
                        >
                          超商取貨
                        </label>
                      </div>
                      <div>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                          checked
                        ></input>

                        <label
                          class="form-check-label text-left font-size-14"
                          for="exampleRadios1"
                        >
                          宅配
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="mb-1">預計到貨時間</div>
                    <span className="font-size-14">2019/11/4 - 2019/11/5</span>
                  </div>
                </div>
              </div>
              <div className="m-2 mt-4">付款方式</div>
              <div className="payment-container m-2 mt-1">
                <label className="font-size-14" htmlFor="">
                  信用卡卡號
                </label>
                <input type="text" />
                <div className="d-flex">
                  <div className="invalid-date ">
                    <label className="font-size-14" htmlFor="">
                      到期日期
                    </label>
                    <div className="d-flex">
                      <input className="mr-2" type="text" />
                      <input type="text" />
                    </div>
                  </div>
                  <div className="security-code ">
                    <label className="font-size-14" htmlFor="">
                      末三碼
                    </label>
                    <input type="text" />
                  </div>
                </div>
              </div>
              <div className="checkout-btn d-flex">
                <button className="m-auto">確認結帳</button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CheckOutContent;
