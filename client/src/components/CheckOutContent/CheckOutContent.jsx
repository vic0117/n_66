import React from 'react';
import { Container, Row, Col, Card, Dropdown, DropdownButton } from 'react-bootstrap';

import './CheckOutContent.css'

class CheckOutContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productsToBuy: props.productsToBuy,
            tripsToBuy: props.tripsToBuy,
            totalCost: 0,
            userId: props.userId,
            useCouponName: "",
            useCouponType: "",
            useCouponDiscount: 0
        };
    }

    // 結帳按鈕
    CheckOut = () => {
        let { userId } = this.props;
        let tripsToBuy = JSON.parse(localStorage.getItem('tripsToBuy'))
        let productsToBuy = JSON.parse(localStorage.getItem('productsToBuy'))
        let couponList = []

        // 如果沒有買行程
        if(!tripsToBuy){
            tripsToBuy = []
            localStorage.setItem('tripsToBuy', JSON.stringify(tripsToBuy))
        }

        if(tripsToBuy){
            tripsToBuy.forEach((trip) => {
                // let coupon = trip.trip_type;
                let coupon = {};
                coupon.type = trip.trip_type;
                coupon.u_id = userId;
                coupon.discount = "85";
    
                couponList.push(coupon);
            })
        }

        // 如果沒有買商品
        if(!productsToBuy){
            productsToBuy = [];
            localStorage.setItem('productsToBuy', JSON.stringify(productsToBuy));
        }


        let bodyObj = {
            productsToBuy: JSON.stringify(productsToBuy),
            tripsToBuy: JSON.stringify(tripsToBuy),
            totalCost: localStorage.getItem('totalCost'),
            userId: localStorage.getItem('userId'),
            couponList: couponList,
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

                localStorage.setItem('tripsToBuy', '[]')
                localStorage.setItem('productsToBuy', '[]')
                localStorage.setItem('totalCost', '0')
            })
    }

    // 折價卷
    showCouponType = (e) => {
        let coupon = e.target.innerText;
        let couponName = coupon.split(' ')[0].toString();
        let couponDiscount = coupon.split(' ')[1] / 100
        let productsArray = JSON.parse(localStorage.getItem('productsToBuy'));
        let tripsArray = JSON.parse(localStorage.getItem('tripsToBuy'));
        let totalCost = 0;

        if(coupon === '原價購買'){
            console.log(totalCost)
            // console.log(productsArray);
            if (productsArray) {
                productsArray.forEach(product => {
                    totalCost += product.product_price * 1;
                })
            }

            if (tripsArray) {
                tripsArray.forEach(trip => {
                    totalCost += trip.trip_price * 1 ;
                })
            }
            console.log(totalCost)

            this.setState({
                useCouponType: coupon,
                useCouponName: '原價購買',
                useCouponDiscount: couponDiscount,
                totalCost: totalCost
            }, () => {
                console.log(this.state.totalCost);
                console.log(this.state.useCouponName);
                console.log(this.state.useCouponType);
            })

            totalCost = JSON.stringify(totalCost);
            localStorage.setItem('totalCost', totalCost);
        }
        else{
            if (couponName !== this.state.useCouponName && couponName !== '原價購買' ) {
                console.log(true);
    
                if (productsArray) {
                    productsArray.forEach(product => {
                        if(product.product_category === couponName){
                            totalCost += parseInt(product.product_price * couponDiscount);
                        }
                        else{
                            totalCost += product.product_price * 1
                        }
                        
                    })
                }
    
                if (tripsArray) {
                    tripsArray.forEach(trip => {
                        totalCost += trip.trip_price * 1;
                    })
                }
    
                this.setState({
                    useCouponType: coupon,
                    useCouponName: couponName,
                    useCouponDiscount: couponDiscount,
                    totalCost: totalCost
                }, () => {
                    console.log(this.state.totalCost);
                    console.log(this.state.useCouponName);
                    console.log(this.state.useCouponType);
                })
    
                totalCost = JSON.stringify(totalCost);
                localStorage.setItem('totalCost', totalCost);
            }
        }
    }


    render() {
        const { productsToBuy } = this.props;
        const { tripsToBuy } = this.props;
        const { totalCost } = this.props;
        const { userId } = this.props;
        const { hasCoupon } = this.props;
        const coupons = { ...hasCoupon }
        let { answer } = coupons;
        let userCoupons = []
        if (answer) {
            answer.forEach(sb => {
                userCoupons.push(sb);
            })
        }

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
                                <div className="align-self-end mb-2 text-right" style={{ flex: 2 }}>
                                    價格
                                </div>

                            </div>
                            <div className=" py-3" style={{ borderBottom: '1px solid #E8E8E8' }}>
                                {
                                    productsToBuy === null ? (
                                        <div></div>
                                    ) : (
                                            productsToBuy.map((item, i) => (
                                                <div
                                                    key={i}
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
                                                        <h6>{item.product_category}</h6>
                                                        {/* <h6>{item.code}</h6> */}
                                                        <div className="title mb-1 font-size-14">
                                                            {item.product_name}
                                                        </div>
                                                        <div className="mb-4">
                                                            <span className="size font-size-14">{item.product_size}</span>
                                                        </div>
                                                        <div className="d-flex ">
                                                            <span>數量</span>
                                                            <h5 className="ml-3 counter">{item.product_amount}</h5>
                                                            <div className="mb-2 pl-2" style={{ flex: 1 }}>
                                                                {
                                                                    this.state.useCouponName === item.product_category ? (<del className="discountPrice">{'NT$' + item.product_price}</del>) :
                                                                        ('NT$' + item.product_price)
                                                                }

                                                            </div>
                                                            <div className="mb-2 pl-2" style={{ flex: 4 }}>
                                                                {
                                                                    this.state.useCouponName === item.product_category ? ('NT$' + Math.floor(item.product_price * item.product_amount * this.state.useCouponDiscount)) :
                                                                        ('NT$' + item.product_price * item.product_amount)

                                                                }
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="mb-2" style={{ flex: 1 }}>
                                                        <div className="deleteBtn ml-5">
                                                            <div className="slash leftLine"></div>
                                                            <div className="slash rightLine"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        )
                                }

                                {
                                    tripsToBuy === null ? (
                                        <div></div>
                                    ) : (
                                            tripsToBuy.map((item, i) => (
                                                <div key={i} id={i} className="cartItem" >
                                                    <div className="itemImg">
                                                        <Card.Img
                                                            variant="top"
                                                            src={"http://localhost:3000/images/" + item.trip_img}
                                                        />
                                                    </div>
                                                    <Card.Body className="pr-0">
                                                        <div className="d-flex w-100 flex-column align-items-start">
                                                            <h6 className="d-flex">
                                                                <div>{item.trip_country}</div>
                                                                <div className="">{item.trip_type}</div>

                                                            </h6>
                                                            <div className="title">
                                                                {item.trip_name}
                                                            </div>
                                                            <span className="d-flex">
                                                                <span className="size ">{item.trip_duration} 天</span>
                                                                <span className="size ml-3">{item.trip_start_date}</span>
                                                                <span>~</span>
                                                                <span className="size">{item.trip_end_date}</span>
                                                            </span>
                                                            <div className="d-flex w-100 quantity">
                                                                <div style={{ flex: 2 }}>數量 : </div>
                                                                <h5 className=" counter" style={{ flex: 1 }}>{item.trip_amount}</h5>
                                                                <div className="text-center price" style={{ flex: 3 }}>{item.trip_price}</div>
                                                                <div className="text-right price" style={{ flex: 5 }}>NT$ {item.trip_amount * item.trip_price} </div>
                                                            </div>
                                                        </div>

                                                    </Card.Body>
                                                </div>
                                            ))
                                        )
                                }
                            </div>



                            {/* ---------------------------------------------------------------------- */}

                            <div>
                                {
                                    answer === null ? ('') : (
                                        <DropdownButton id="dropdown-basic-button" title="使用折價卷">
                                            {
                                                userCoupons.map((coupon, i) => (
                                                    <Dropdown.Item
                                                        as="button"
                                                        key={i}
                                                        onClick={this.showCouponType}
                                                    >{`${coupon.type} ${coupon.discount} 折`}</Dropdown.Item>
                                                ))
                                            }
                                            <Dropdown.Item
                                                as="button"
                                                onClick={this.showCouponType}
                                            >原價購買
                                            </Dropdown.Item>
                                        </DropdownButton>
                                    )
                                }
                            </div>

                            {/* ---------------------------------------------------------------------- */}
                            <div className="d-flex mt-2">
                                <div style={{ flex: 2 }}></div>
                                <div style={{ flex: 3 }}>運費</div>
                                <div className="text-right" style={{ flex: 1 }}>NT$ 60</div>
                                {/* <div style={{ flex: 1 }}></div> */}
                            </div>
                            <div className="d-flex mt-1">
                                <div style={{ flex: 2 }}></div>
                                <div style={{ flex: 3 }}>合計</div>
                                <h5 className="text-right" style={{ flex: 1 }}>
                                    {
                                        this.state.useCouponDiscount === 0 ? (`NT$ ${totalCost}`) :
                                            (`NT$ ${this.state.totalCost}`)
                                    }

                                </h5>
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
                                            <div className="form-check">
                                                <div>
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="exampleRadios"
                                                        id="exampleRadios1"
                                                        value="option1"
                                                        checked
                                                    ></input>
                                                    <label
                                                        className="form-check-label text-left font-size-14"
                                                        htmlFor="exampleRadios1"
                                                    >
                                                        超商取貨
                                                    </label>
                                                </div>
                                                <div>
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="exampleRadios"
                                                        id="exampleRadios1"
                                                        value="option1"
                                                        defaultChecked
                                                    ></input>

                                                    <label
                                                        className="form-check-label text-left font-size-14"
                                                        htmlFor="exampleRadios1"
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
                                    <button onClick={this.CheckOut} className="mx-auto mb-3">確認結帳</button>
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