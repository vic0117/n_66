import React from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';

import './CheckOutContent.css'

class CheckOutContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productsToBuy: props.productsToBuy,
            tripsToBuy: props.tripsToBuy,
            totalCost: props.totalCost,
            userId: props.userId
        };
    }


    CheckOut = () => {
        let bodyObj = {
            productsToBuy: localStorage.getItem('productsToBuy'),
            tripsToBuy: localStorage.getItem('tripsToBuy'),
            totalCost: localStorage.getItem('totalCost'),
            userId: localStorage.getItem('userId'),
            orderStatus: '運送中'
        }

        // console.log(bodyObj);

        fetch('http://localhost:3001/checkout', {
            method: "POST",
            body: JSON.stringify(bodyObj),
            headers: {
                "content-type": "application/json"
            }
        })
            .then(response => {
                return response.json();
            })
            .then(json => {
                console.log(json)
                //TODO:
                // tosty
            })
    }


    render() {
        const { productsToBuy } = this.props;
        const { tripsToBuy } = this.props;
        const { totalCost } = this.props;
        // const { userId } = this.props;
        return (
            <>
                <Container className=" mt-5 sectionCheckOut">
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
                            <div className=" py-3" style={{ borderBottom: '1px solid #E8E8E8' }}>
                                {
                                    productsToBuy.map((item, i) => (
                                        // <div key={i} id={i} className="cartItem" >
                                        //     <div className="itemImg">
                                        //         <Card.Img
                                        //             variant="top"
                                        //             src={"http://localhost:3000/images/products/" + item.product_file_name + "/" + JSON.parse(item.product_img)[0]}
                                        //         />
                                        //     </div>
                                        //     <Card.Body>
                                        //         <div className="d-flex w-100 flex-column align-items-start">
                                        //             <h6>
                                        //                 帳篷
                                        //                 <div className="price">{item.product_price}</div>
                                        //             </h6>
                                        //             <div className="title">
                                        //                 {item.product_name}
                                        //             </div>
                                        //             <span>
                                        //                 尺寸: <span className="size">{item.product_size}</span>
                                        //             </span>
                                        //             <div className="quantity">
                                        //                 <span>數量 : </span>
                                        //                 <h5 className="counter">{item.product_amount}</h5>
                                        //             </div>
                                        //         </div>
                                        //         <h3>{item.product_amount * item.product_price} 元</h3>
                                        //     </Card.Body>
                                        // </div>

                                        <div
                                            className="d-flex my-3"
                                            style={{ borderBottom: "1px solid #E8E8E8" }}
                                        >
                                            <div className="itemImg d-flex" style={{ flex: 2 }}>
                                                <Card.Img
                                                    variant="top"
                                                    src={"http://localhost:3000/images/products/" + item.product_file_name + "/" + item.product_img}
                                                />
                                            </div>

                                            <div className="mb-2" style={{ flex: 3 }}>
                                                <h6>獨木舟</h6>
                                                <div className="title mb-1 font-size-14">
                                                    {item.product_name}
                                                </div>
                                                <div className="mb-4">
                                                    <span className="size font-size-14">{item.product_size}</span>
                                                </div>
                                                <div className="d-flex ">
                                                    <span>數量</span>
                                                    <input value={item.product_amount} className="counter" type="text" disabled/>
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
                                    ))
                                }

                                {
                                    tripsToBuy.map((item, i) => (
                                        <div key={i} id={i} className="cartItem" >
                                            <div className="itemImg">
                                                <Card.Img
                                                    variant="top"
                                                    src={"http://localhost:3000/images/" + item.trip_menu_img}
                                                />
                                            </div>
                                            <Card.Body>
                                                <div className="d-flex w-100 flex-column align-items-start">
                                                    <h6>
                                                        {item.trip_place}
                                                        <div className="price">{item.trip_price}</div>
                                                    </h6>
                                                    <div className="title">
                                                        {item.trip_name}
                                                    </div>
                                                    <span className="d-flex">
                                                        <span className="size ml-0">{item.trip_days} 天</span>
                                                        <span className="size">{item.trip_start}</span>
                                                        <span>~</span>
                                                        <span className="size">{item.trip_end}</span>
                                                    </span>
                                                    <div className="quantity">
                                                        <span>數量 : </span>
                                                        <h5 className="counter">{item.trip_amount}</h5>
                                                    </div>
                                                </div>
                                                <h3>{item.trip_amount * item.trip_price} 元</h3>
                                            </Card.Body>
                                        </div>
                                    ))
                                }
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
                                <div style={{ flex: 1 }}>NT$ {totalCost}</div>
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
                                                        defaultValue="option1"
                                                        defaultChecked
                                                    ></input>
                                                    <label
                                                        class="form-check-label text-left font-size-14"
                                                        htmlFor="exampleRadios1"
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
                                    <button onClick={this.CheckOut} className="m-auto">確認結帳</button>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default CheckOutContent;