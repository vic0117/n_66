import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Dropdown,
  DropdownButton
} from "react-bootstrap";
import Joi from "joi-browser";
import { ToastContainer, toast } from "react-toastify";

import "./CheckOutContent.css";

class CheckOutContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsToBuy: props.productsToBuy,
      tripsToBuy: props.tripsToBuy,
      totalCost: 0,
      userId: props.userId,
      useCouponName: "原價購買",
      useCouponType: "",
      useCouponDiscount: 0,
      Freight: 60,
      creditNum: "",
      validEnd: "",
      securityCode: "",
      errors: {}
    };
  }

  checkOutSchema = Joi.object({
    creditNum: Joi.string()
      .min(16)
      .max(16)
      .required()
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            case "any.empty":
              err.message = "此為必填欄位";
              break;
            case "string.min":
              err.message = "卡號至少為16個字元";
              break;
            case "string.max":
              err.message = "卡號最多為16個字元";
              break;
            default:
              break;
          }
        });
        return errors;
      }),

    validEnd: Joi.string()
      .regex(/^(0[1-9]|1[0-2])\/([0-9]{4}|[0-9]{2})$/)
      .required()
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            case "any.empty":
              err.message = "此為必填欄位";
              break;
            case "string.regex.base":
              err.message = "不正確的格式(MM/YY)";
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    securityCode: Joi.string()
      .min(3)
      .max(3)
      .required()
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            case "any.empty":
              err.message = "此為必填欄位";
              break;
            case "string.min":
              err.message = "至少為3個字元";
              break;
            case "string.max":
              err.message = "最多為3個字元";
              break;
            default:
              break;
          }
        });
        return errors;
      })
  });

  //
  logChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //
  checkOutValidate = async () => {
    let creditNum = this.state.creditNum;

    let validEnd = this.state.validEnd;
    let securityCode = this.state.securityCode;

    await this.setState({
      checkOutJoi: { creditNum, validEnd, securityCode }
    });

    const result = Joi.validate(this.state.checkOutJoi, this.checkOutSchema, {
      abortEarly: false
    });
    console.log(result);
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  //radios
  pickUp = Freight => {
    this.setState({ Freight: Freight });
  };

  // 結帳按鈕
  CheckOut = async e => {
    e.preventDefault();

    const errors = await this.checkOutValidate();
    console.log(errors);
    await this.setState({ errors: errors || {} });
    if (errors) return;

    let { userId } = this.props;
    let totalCost = JSON.parse(localStorage.getItem("totalCost"));
    let tripsToBuy = JSON.parse(localStorage.getItem("tripsToBuy"));
    let productsToBuy = JSON.parse(localStorage.getItem("productsToBuy"));
    let couponList = [];
    let useCouponName = this.state.useCouponName;
    console.log(totalCost + this.state.Freight);
    // 如果沒有買行程
    if (!tripsToBuy) {
      tripsToBuy = [];
      localStorage.setItem("tripsToBuy", JSON.stringify(tripsToBuy));
    }

    if (tripsToBuy) {
      tripsToBuy.forEach(trip => {
        // let coupon = trip.trip_type;
        let coupon = {};
        coupon.type = trip.trip_type;
        coupon.u_id = userId;
        coupon.discount = "85";
        couponList.push(coupon);
      });
    }
    // 如果沒有買商品
    if (!productsToBuy) {
      productsToBuy = [];
      localStorage.setItem("productsToBuy", JSON.stringify(productsToBuy));
    }

    let bodyObj = {
      productsToBuy: JSON.stringify(productsToBuy),
      tripsToBuy: JSON.stringify(tripsToBuy),
      totalCost: JSON.stringify(totalCost + this.state.Freight),
      userId: localStorage.getItem("userId"),
      couponList: couponList,
      useCouponName: useCouponName,
      orderStatus: "運送中"
    };

    // console.log(bodyObj);

    fetch("http://localhost:3001/checkout", {
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
        console.log(json);
        //TODO:
        localStorage.setItem("tripsToBuy", "[]");
        localStorage.setItem("productsToBuy", "[]");
        localStorage.setItem("totalCost", "0");
        this.props.changeNumOfProduct("");
        if (json.success) {
          // 購買成功
          toast.success("感謝您的購買");
          setTimeout(() => {
            window.location = "/account/orders";
          }, 1500);
        } else {
          //購買失敗
          toast.error(json.text);
        }
      });
  };

  // 折價卷
  showCouponType = e => {
    let coupon = e.target.innerText;
    let couponName = coupon.split(" ")[0].toString();
    let couponDiscount = coupon.split(" ")[1] / 100;
    let productsArray = JSON.parse(localStorage.getItem("productsToBuy"));
    let tripsArray = JSON.parse(localStorage.getItem("tripsToBuy"));
    let totalCost = 0;

    if (coupon === "原價購買") {
      // console.log(totalCost)
      // console.log(productsArray);
      if (productsArray) {
        productsArray.forEach(product => {
          totalCost += product.product_price * 1 * product.product_amount;
        });
      }

      if (tripsArray) {
        tripsArray.forEach(trip => {
          totalCost += trip.trip_price * 1 * trip.trip_amount;
        });
      }
      console.log(totalCost);

      this.setState(
        {
          useCouponType: coupon,
          useCouponName: "原價購買",
          useCouponDiscount: couponDiscount,
          totalCost: totalCost
        },
        () => {
          console.log(this.state.totalCost);
          console.log(this.state.useCouponName);
          console.log(this.state.useCouponType);
        }
      );

      totalCost = JSON.stringify(totalCost);
      localStorage.setItem("totalCost", totalCost);
    } else {
      if (
        couponName !== this.state.useCouponName &&
        couponName !== "原價購買"
      ) {
        if (productsArray) {
          productsArray.forEach(product => {
            if (product.product_category === couponName) {
              totalCost += parseInt(
                product.product_price * product.product_amount * couponDiscount
              );
            } else {
              totalCost += product.product_price * 1 * product.product_amount;
            }
          });
        }

        if (tripsArray) {
          tripsArray.forEach(trip => {
            totalCost += trip.trip_price * 1 * trip.trip_amount;
          });
        }

        this.setState({
          useCouponType: coupon,
          useCouponName: couponName,
          useCouponDiscount: couponDiscount,
          totalCost: totalCost
        });
        totalCost = JSON.stringify(totalCost);
        localStorage.setItem("totalCost", totalCost);
      }
    }
  };

  render() {
    const { productsToBuy } = this.props;
    const { tripsToBuy } = this.props;
    const { totalCost } = this.props;
    const { userInfo } = this.props;
    const { arrivalDateStr } = this.props;
    console.log(arrivalDateStr);
    // 淺拷貝userInfo
    let userInformation = Object.assign({}, userInfo);

    const { hasCoupon } = this.props;
    const coupons = { ...hasCoupon };
    let { answer } = coupons;
    let userCoupons = [];
    if (answer) {
      answer.forEach(sb => {
        userCoupons.push(sb);
      });
    }

    return (
      <>
        <div className="myBreadCrumb py-1">
          <a className="ml-3" href="/">
            首頁
          </a>
          <span className="mx-3">></span>
          <a className="current" href="/checkout">
            結帳
          </a>
        </div>
        <Container className=" mt-5 sectionCheckOut">
          <Row>
            <Col className="categories-outer-container " lg={8}>
              <div className="categories-container d-flex">
                {/* <div className="itemImg " ></div> */}
                <div className="align-self-end mb-2 pl-2">品項</div>
                <div className="align-self-end mb-2 ml-auto text-right">
                  價格
                </div>
              </div>
              <div
                className=" py-3"
                // style={{ borderBottom: "1px solid #E8E8E8" }}
              >
                {productsToBuy === null ? (
                  <div></div>
                ) : (
                  productsToBuy.map((item, i) => (
                    <div
                      key={i}
                      className="cartItem d-flex my-3"
                      style={{ borderBottom: "1px solid #E8E8E8" }}
                    >
                      <div className="itemImg">
                        <img
                          src={
                            "http://localhost:3000/images/products/" +
                            item.product_file_name +
                            "/" +
                            item.product_img
                          }
                          alt={item.product_name}
                        />
                      </div>

                      <div className="card-body">
                        <h6 className="productCategory">
                          {item.product_category}
                        </h6>
                        {/* <h6>{item.code}</h6> */}
                        <h5 className="title mb-1 ">{item.product_name}</h5>
                        <div className="mb-4">
                          <span className="size ">{item.product_size}</span>
                        </div>
                        <div className="d-flex ">
                          <span>數量:</span>
                          <h5 className="counter">{item.product_amount}</h5>
                          <div className="">
                            {this.state.useCouponName ===
                            item.product_category ? (
                              <del className="discountPrice">
                                {"NT$" + item.product_price}
                              </del>
                            ) : (
                              "NT$" + item.product_price
                            )}
                          </div>
                          <div className="ml-auto mb-2 pl-2">
                            {this.state.useCouponName === item.product_category
                              ? "NT$" +
                                Math.floor(
                                  item.product_price *
                                    item.product_amount *
                                    this.state.useCouponDiscount
                                )
                              : "NT$" +
                                item.product_price * item.product_amount}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}

                {tripsToBuy === null ? (
                  <div></div>
                ) : (
                  tripsToBuy.map((item, i) => (
                    <div key={i} id={i} className="tripCartItem">
                      <div className="itemImg">
                        <img
                          src={"http://localhost:3000/images/" + item.trip_img}
                          alt={item.trip_name}
                        />
                      </div>
                      <Card.Body className="pr-0">
                        <div className="d-flex w-100 flex-column align-items-start">
                          <h6 className="d-flex tripType">
                            <div>{item.trip_country}</div>
                            <div className="ml-5">{item.trip_type}</div>
                          </h6>
                          <h5 className="title">{item.trip_name}</h5>
                          <span className="d-flex">
                            <span className="size ">
                              {item.trip_duration} 天
                            </span>
                            <span className="size ml-3">
                              {item.trip_start_date}
                            </span>
                            <span className="mx-2">~</span>
                            <span className="size">{item.trip_end_date}</span>
                          </span>
                          <div className="d-flex w-100 quantity">
                            <span>數量: </span>
                            <h5 className=" counter">{item.trip_amount}</h5>
                            <div className="text-center price">
                              NT$ {item.trip_price}
                            </div>
                            <div className="text-right price ml-auto">
                              NT$ {item.trip_amount * item.trip_price}
                            </div>
                          </div>
                        </div>
                      </Card.Body>
                    </div>
                  ))
                )}
              </div>

              {/* ---------------------------------------------------------------------- */}

              <div>
                {answer === null ? (
                  ""
                ) : (
                  <DropdownButton
                    className=""
                    id="couponDropdown"
                    title={
                      this.state.useCouponName === "原價購買"
                        ? "使用折價卷"
                        : this.state.useCouponType
                    }
                  >
                    {userCoupons.map((coupon, i) => (
                      <Dropdown.Item
                        as="button"
                        key={i}
                        onClick={this.showCouponType}
                      >{`${coupon.type} ${coupon.discount} 折`}</Dropdown.Item>
                    ))}
                    <Dropdown.Item as="button" onClick={this.showCouponType}>
                      原價購買
                    </Dropdown.Item>
                  </DropdownButton>
                )}
              </div>

              {/* ---------------------------------------------------------------------- */}
              <div
                className="d-flex mt-2"
                style={{ borderTop: "1px solid #e8e8e8" }}
              >
                {/* <div style={{ flex: 2 }}></div> */}
                <div>運費</div>
                <div className="text-right" style={{ flex: 1 }}>
                  NT$ {this.state.Freight}
                </div>
                {/* <div style={{ flex: 1 }}></div> */}
              </div>
              <div className="d-flex mt-1 mb-4">
                {/* <div style={{ flex: 2 }}></div> */}
                <div>合計</div>
                <h5 className="text-right" style={{ flex: 1 }}>
                  {this.state.useCouponDiscount === 0
                    ? `NT$ ${totalCost + this.state.Freight}`
                    : `NT$ ${this.state.totalCost + this.state.Freight}`}
                </h5>
              </div>
            </Col>
            <Col className="orderDetail-container" lg={4}>
              <div className="orderDetail ">
                <h5 className="mb-3 text-center">送貨資訊</h5>
                <div className="delivery-method">
                  <div className="m-2">
                    <div className="font-size-14 d-flex">
                      姓名:
                      <span className="ml-3 d-block">
                        {userInformation.last_name_zh}
                        {userInformation.first_name_zh}
                      </span>
                    </div>
                    <div className="font-size-14 d-flex">
                      帳號:
                      <span className="ml-3 d-block">
                        {userInformation.email}
                      </span>
                    </div>
                    <div className="font-size-14 d-flex">
                      地址:
                      <span className="ml-3 d-block">
                        {userInformation.address}
                      </span>
                    </div>
                    <a className="font-size-14" href="/account">
                      修改送貨資訊
                    </a>
                  </div>
                  <div className="m-2 d-flex time-method">
                    <div>
                      <div className="mb-1">運送方式</div>
                      <div className="form-check p-0">
                        <div className="d-flex">
                          <input
                            onChange={() => this.pickUp(60)}
                            className="pickUpRadios"
                            type="radio"
                            name="pickUpRadios"
                            id="exampleRadios1"
                            defaultValue="convenienceStore"
                            defaultChecked
                          ></input>
                          <label
                            className="form-check-label text-left font-size-14"
                            // htmlFor="exampleRadios1"
                          >
                            超商取貨
                          </label>
                        </div>
                        <div className="d-flex">
                          <input
                            onChange={() => this.pickUp(100)}
                            className="pickUpRadios"
                            type="radio"
                            name="pickUpRadios"
                            id="exampleRadios1"
                            defaultValue="homeDelivery"
                          ></input>

                          <label className="form-check-label text-left font-size-14">
                            宅配
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="mb-1">預計到貨時間</div>
                      <span className="font-size-14">{arrivalDateStr}</span>
                    </div>
                  </div>
                </div>
                <h5 className="m-2 mt-4 mb-3 text-center">付款方式</h5>
                <div className="payment-container m-2 mt-1 ">
                  <label className="font-size-14" htmlFor="">
                    信用卡卡號
                  </label>
                  <input
                    type="text"
                    name="creditNum"
                    onChange={this.logChange}
                  />

                  <div className="alert alert-danger error-msg">
                    {this.state.errors.creditNum || ""}
                  </div>

                  <div className="d-flex">
                    <div className="invalid-date ">
                      <label className="font-size-14" htmlFor="">
                        到期日期
                      </label>
                      <div className="d-flex">
                        <input
                          type="text"
                          placeholder="MM/YY"
                          name="validEnd"
                          onChange={this.logChange}
                        />
                      </div>
                      <div className="alert alert-danger error-msg">
                        {this.state.errors.validEnd || ""}
                      </div>
                    </div>
                    <div className="security-code ">
                      <label className="font-size-14" htmlFor="">
                        末三碼
                      </label>
                      <input
                        type="text"
                        name="securityCode"
                        onChange={this.logChange}
                      />

                      <div className="alert alert-danger error-msg">
                        {this.state.errors.securityCode || ""}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="checkout-btn-container d-flex">
                  <div
                    onClick={this.CheckOut}
                    className="checkout-btn mx-auto mb-3"
                  >
                    <div className="mask"></div>
                    <div className="font">確認結帳</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <ToastContainer autoClose={2000} />
        </Container>
      </>
    );
  }
}

export default CheckOutContent;
