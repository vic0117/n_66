import React from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';

import './CheckOutContent.css'

class CheckOutContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <>
                <Container className="mt-5">
                    <Row>
                        <Col md={8}>
                            <div className="categories-container d-flex">
                                <div className="itemImg " style={{ flex: 2 }}></div>
                                <div className="align-self-end mb-2 " style={{ flex: 3 }} >品項</div>
                                <div className="align-self-end mb-2" style={{ flex: 1 }}>價格</div>
                                <div className="align-self-end text-center mb-2" style={{ flex: 1 }}>刪除</div>
                            </div>



                            <div className="d-flex p-3" style={{ borderBottom: '1px solid #E8E8E8' }}>
                                <div className="itemImg d-flex" style={{ flex: 2 }}>
                                    <Card.Img variant="top" src="http://localhost:3000/images/products/AquaMarinaBettaHM/AquaMarinaBettaHM.jpg" />
                                </div>
                                <div className="mb-2" style={{ flex: 3 }} >
                                    <h6 >獨木舟</h6>
                                    <div className="title mb-1">Aqua Marina Betta HM-K0 雙人充氣皮艇</div>
                                    <div className="mb-4">尺寸:
                                        <span className="size">412 X 83cm</span>
                                    </div>
                                    <div className="d-flex ">
                                        <span>數量 :</span>
                                       
                                    </div>
                                </div>
                                <div className="mb-2 pl-4" style={{ flex: 1 }}>NT$ 12,800</div>
                                <div className="mb-2" style={{ flex: 1 }}>
                                    <div className="deleteBtn ml-5">
                                        <div className="slash leftLine"></div>
                                        <div className="slash rightLine"></div>
                                    </div>
                                </div>
                            </div>

                            
                            
                            {/* ---------------------------------------------------------------------- */}
                            
                            <div className="d-flex mt-2">
                                <div style={{ flex: 2 }}></div>
                                <div style={{ flex: 3 }}>運費</div>
                                <div style={{ flex: 1 }}>NT$ 60</div>
                                <div style={{ flex: 1 }}></div>
                            </div>
                            <div className="d-flex mt-1">
                                <div style={{ flex: 2 }}></div>
                                <div style={{ flex: 3 }}>合計</div>
                                <div style={{ flex: 1 }}>NT$ 12,860</div>
                                <div style={{ flex: 1 }}></div>
                            </div>


                            {/* <div className="cartItem">
                                <div className="itemImg">
                                    <Card.Img variant="top" src="http://localhost:3000/images/products/AquaMarinaBettaHM/AquaMarinaBettaHM.jpg" />
                                </div>
                                <Card.Body>
                                    <div className="d-flex w-100 flex-column align-items-start">
                                        <h6>
                                            獨木舟
                                            <div className="price">
                                                12,800
                                            </div>

                                            <div className="deleteBtn">
                                                <div className="slash leftLine"></div>
                                                <div className="slash rightLine"></div>
                                            </div>
                                        </h6>
                                        <div className="title">Aqua Marina Betta HM-K0 雙人充氣皮艇</div>
                                        <span>尺寸:  <span className="size">412 X 83cm</span></span>

                                        <div>
                                            <span>
                                                數量 :
                                        </span>
                                            <a className="qtyBtn minusBtn" role="button">-</a>
                                            <input value="1" className="counter" type="text" />
                                            <a className="qtyBtn plus" role="button">+</a>
                                        </div>
                                    </div>
                                </Card.Body>
                            </div> */}


                        </Col>
                        <Col md={4} >
                            <div className="orderDetail">
                                <div className="d-flex">
                                    <div>
                                        <h5>送貨地址</h5>
                                        <h6>XXX</h6>
                                        <h6>台北市</h6>
                                        <h6>民生北路1段 26巷 8號 13-1</h6>
                                        <a href="#7">修改送貨地址</a>
                                        <h5>預計到貨時間</h5>
                                        <span>2019/11/4 - 2019/11/5</span>
                                    </div>
                                    <div>
                                        <h5>送貨地址</h5>
                                        <h6>XXX</h6>
                                        <h6>台北市</h6>
                                        <h6>民生北路1段 26巷 8號 13-1</h6>
                                        <a href="#7">修改帳單地址</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default CheckOutContent;