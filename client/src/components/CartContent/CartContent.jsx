import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

//CSS
import "./CartContent.css";


class CartContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsToBuy: props.data,
      tripsToBuy: props.tripData,
      costArray: [],
      totalCost: props.totalCost,
    };
  }

  componentDidMount() {
    // const productsToBuy = JSON.parse(localStorage.getItem("productsToBuy"));
    // this.setState({ productsToBuy: productsToBuy });
    // console.log(productsToBuy);
  }



  deleteProduct = async (i) => {
    let productsArray = await JSON.parse(localStorage.getItem('productsToBuy'));
    let tripsArray = await JSON.parse(localStorage.getItem('tripsToBuy'));
    // console.log(i);

    productsArray.forEach(product => {
      if (product.code === i) {
        // console.log(productsArray.indexOf(product));
        productsArray.splice(productsArray.indexOf(product), 1);
      }
    });

    console.log(productsArray)
    this.props.delete(productsArray)

    let totalCost = 0;

    if (productsArray) {
      productsArray.forEach(item => {
        let subCost = item.product_amount * item.product_price;
        totalCost += subCost;
      })
    }

    if (tripsArray) {
      tripsArray.forEach(trip => {
        let subCost = trip.trip_amount * trip.trip_price;
        totalCost += subCost;
      })
    }


    totalCost = JSON.stringify(totalCost);
    localStorage.setItem('totalCost', totalCost);

    this.props.countTotalCost(totalCost);

    productsArray = JSON.stringify(productsArray);
    localStorage.setItem('productsToBuy', productsArray);
    // console.log(this.state);
  }

  IncreaseQuantity = async (i) => {
    let productsArray = await JSON.parse(localStorage.getItem('productsToBuy'));
    productsArray.forEach(product => {
      if (product.code === i) {
        product.product_amount += 1;
      }
    });

    this.props.count1(productsArray)

    let tripsArray = await JSON.parse(localStorage.getItem('tripsToBuy'));
    let totalCost = 0

    if (productsArray) {
      productsArray.forEach(item => {
        let subCost = item.product_amount * item.product_price;
        totalCost += subCost;
      })
    }


    if (tripsArray) {
      tripsArray.forEach(trip => {
        let subCost = trip.trip_amount * trip.trip_price;
        totalCost += subCost;
      })
    }


    totalCost = JSON.stringify(totalCost);
    localStorage.setItem('totalCost', totalCost);
    this.props.countTotalCost(totalCost);

    productsArray = JSON.stringify(productsArray);
    localStorage.setItem('productsToBuy', productsArray);
  }

  DecreaseQuantity = async (i) => {
    let productsArray = await JSON.parse(localStorage.getItem('productsToBuy'));

    productsArray.forEach(product => {
      if (product.code === i) {
        product.product_amount <= 1 ? product.product_amount = 1 : product.product_amount -= 1;
      }
    });

    const { count2 } = this.props
    count2(productsArray)

    let tripsArray = await JSON.parse(localStorage.getItem('tripsToBuy'));
    let totalCost = 0;


    if (productsArray) {

      productsArray.forEach(item => {
        let subCost = item.product_amount * item.product_price;
        totalCost += subCost;
      })
    }

    if (tripsArray) {
      tripsArray.forEach(trip => {
        let subCost = trip.trip_amount * trip.trip_price;
        totalCost += subCost;
      })
    }


    totalCost = JSON.stringify(totalCost);
    localStorage.setItem('totalCost', totalCost);

    this.props.countTotalCost(totalCost);

    productsArray = JSON.stringify(productsArray);
    localStorage.setItem('productsToBuy', productsArray);
  }

  deleteTrip = async (i) => {
    let productsArray = await JSON.parse(localStorage.getItem('productsToBuy'));
    let tripsArray = await JSON.parse(localStorage.getItem('tripsToBuy'));
    // console.log(i);
    tripsArray.forEach(trip => {
      if (trip.code === i) {
        // console.log(productsArray.indexOf(product));
        tripsArray.splice(tripsArray.indexOf(trip), 1);
      }
    });

    console.log(tripsArray)
    this.props.setTripState(tripsArray)

    let totalCost = 0;

    if (productsArray) {
      productsArray.forEach(item => {
        let subCost = item.product_amount * item.product_price;
        totalCost += subCost;
      })
    }

    if (tripsArray) {
      tripsArray.forEach(trip => {
        let subCost = trip.trip_amount * trip.trip_price;
        totalCost += subCost;
      })
    }


    totalCost = JSON.stringify(totalCost);
    localStorage.setItem('totalCost', totalCost);

    this.props.countTotalCost(totalCost);

    tripsArray = JSON.stringify(tripsArray);
    localStorage.setItem('tripsToBuy', tripsArray);
    // console.log(this.state);
  }

  IncreaseTrip = async (i) => {
    let tripsArray = await JSON.parse(localStorage.getItem('tripsToBuy'));

    tripsArray.forEach(trip => {
      if (trip.code === i) {
        trip.trip_amount += 1;
      }
    });

    this.props.setTripState(tripsArray)

    let productsArray = await JSON.parse(localStorage.getItem('productsToBuy'));
    let totalCost = 0

    if (productsArray) {
      productsArray.forEach(item => {
        let subCost = item.product_amount * item.product_price;
        totalCost += subCost;
      })
    }

    if (tripsArray) {
      tripsArray.forEach(item => {
        let subCost = item.trip_amount * item.trip_price;
        totalCost += subCost;
      })
    }


    totalCost = JSON.stringify(totalCost);
    localStorage.setItem('totalCost', totalCost);

    this.props.countTotalCost(totalCost);

    tripsArray = JSON.stringify(tripsArray);
    localStorage.setItem('tripsToBuy', tripsArray);
  }

  DecreaseTrip = async (i) => {
    let tripsArray = await JSON.parse(localStorage.getItem('tripsToBuy'));

    tripsArray.forEach(trip => {
      if (trip.code === i) {
        trip.trip_amount <= 1 ? trip.trip_amount = 1 : trip.trip_amount -= 1;
      }
    });

    this.props.setTripState(tripsArray)

    let productsArray = await JSON.parse(localStorage.getItem('productsToBuy'));
    let totalCost = 0

    if (productsArray) {
      productsArray.forEach(item => {
        let subCost = item.product_amount * item.product_price;
        totalCost += subCost;
      })
    }

    if (tripsArray) {
      tripsArray.forEach(item => {
        let subCost = item.trip_amount * item.trip_price;
        totalCost += subCost;
      })
    }

    totalCost = JSON.stringify(totalCost);
    localStorage.setItem('totalCost', totalCost);

    this.props.countTotalCost(totalCost);

    tripsArray = JSON.stringify(tripsArray);
    localStorage.setItem('tripsToBuy', tripsArray);
  }



  render() {

    const { data } = this.props;
    const { tripData } = this.props;
    // console.log(tripData);

    // return (
    //   <>
    //     <Container className="cartSection">
    //       <Row>
    //         <Col md={8}>
    //           {data.map((item, i) => (
    //             <div key={i} id={i} className="cartItem" >
    //               <div className="itemImg">
    //                 <Card.Img
    //                   variant="top"
    //                   src={"http://localhost:3000/images/products/" + item.product_file_name + "/" + JSON.parse(item.product_img)[0]}
    //                 />
    //               </div>
    //               <Card.Body>
    //                 <div className="d-flex w-100 flex-column align-items-start">
    //                   <h6>
    //                     帳篷
    //                     <div className="price">{item.product_price}</div>

    //                     <div onClick={() => this.deleteProduct(item.code)} className="deleteBtn">
    //                       <div className="slash leftLine"></div>
    //                       <div className="slash rightLine"></div>
    //                     </div>
    //                   </h6>
    //                   <div className="title">
    //                     {item.product_name}
    //                   </div>
    //                   <span>
    //                     尺寸: <span className="size">{item.product_size}</span>
    //                   </span>

    //                   <div className="quantity">
    //                     <span>數量 : </span>
    //                     <button variant="primary" onClick={() => this.DecreaseQuantity(item.code)} className="qtyBtn minusBtn"><span>-</span></button>
    //                     <h5 className="counter">{item.product_amount}</h5>
    //                     <button variant="primary" onClick={() => this.IncreaseQuantity(item.code)} className="qtyBtn plus"><span>+</span></button>
    //                   </div>
    //                 </div>
    //                 <h3>{item.product_amount * item.product_price} 元</h3>
    //               </Card.Body>
    //             </div>
    //           ))}

    
    if (data === null && tripData == null) {
      return (

        <Container fluid className="p-0 cartBanner">
          <Row className="cartBannerRow">
            <img src="http://localhost:3000/images/bg/header22.jpg" alt="banner" />
            <h1>購物車是空的喔~</h1>
          </Row>
        </Container>
      )
    }
    else {
      return (
        <>
          <Container fluid className="p-0 cartBanner">
            <Row className="cartBannerRow">
              <img src="http://localhost:3000/images/bg/header22.jpg" alt="banner" />
            </Row>
          </Container>
          <Container className="cartSection">
            <Row>
              <Col md={8}>
                {
                  data === null ? (
                    <div></div>
                  ) : (
                      data.map((item, i) => (
                        <div key={i} id={i} className="cartItem" >
                          <div className="itemImg">
                            <Card.Img
                              variant="top"
                              src={"http://localhost:3000/images/products/" + item.product_file_name + "/" + item.product_img}
                            />
                          </div>
                          <Card.Body>
                            <div className="d-flex w-100 flex-column align-items-start">
                              <h6>
                                帳篷
                              <div className="price">{item.product_price}</div>

                                <div onClick={() => this.deleteProduct(item.code)} className="deleteBtn">
                                  <div className="slash leftLine"></div>
                                  <div className="slash rightLine"></div>
                                </div>
                              </h6>
                              <div className="title">
                                {item.product_name}
                              </div>
                              <span>
                                尺寸: <span className="size">{item.product_size}</span>
                              </span>

                              <div className="quantity">
                                <span>數量 : </span>
                                <button variant="primary" onClick={() => this.DecreaseQuantity(item.code)} className="qtyBtn minusBtn"><span>-</span></button>
                                <h5 className="counter">{item.product_amount}</h5>
                                <button variant="primary" onClick={() => this.IncreaseQuantity(item.code)} className="qtyBtn plus"><span>+</span></button>
                              </div>
                            </div>
                            <h3>{item.product_amount * item.product_price} 元</h3>
                          </Card.Body>
                        </div>
                      ))
                    )
                }
                {
                  tripData === null ? (
                    <div></div>
                  ) : (
                      tripData.map((item, i) => (
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

                                <div onClick={() => this.deleteTrip(item.code)} className="deleteBtn">
                                  <div className="slash leftLine"></div>
                                  <div className="slash rightLine"></div>
                                </div>
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
                                <button variant="primary" onClick={() => this.DecreaseTrip(item.code)} className="qtyBtn minusBtn"><span>-</span></button>
                                <h5 className="counter">{item.trip_amount}</h5>
                                <button variant="primary" onClick={() => this.IncreaseTrip(item.code)} className="qtyBtn plus"><span>+</span></button>
                              </div>
                            </div>
                            <h3>{item.trip_amount * item.trip_price} 元</h3>
                          </Card.Body>
                        </div>
                      ))
                    )
                }
              </Col>
              <Col md={4}>
                <div className="userCard">
                  <p>@123gmail.com</p>
                  <Link className="toList" to="/products">
                    繼續逛逛
                    </Link>
                  <Link className="checkOut" to="/checkout">
                    進行結帳
                    </Link>
                </div>
              </Col>
            </Row>

            <Row>
              {
                <Col>
                  {
                    data === null && tripData == null ? (
                      <div></div>
                    ) : (
                        <h2>總價: {this.props.totalCost}</h2>
                      )
                  }
                </Col>
              }
            </Row>
          </Container>
        </>
      );
    }
  }
}

export default CartContent;


