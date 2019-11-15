import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from 'react-bootstrap';
import './CartContent.css';



class CartContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }




    render() {
        return (
            <>
                <Container className="cartSection">
                    <Row>
                        <Col md={8}>
                            <div className="cartItem">
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

                                        <div className="quantity">
                                            <span>
                                                數量 :
                                            </span>
                                            <a href="#minus" className="qtyBtn minusBtn" role="button">-</a>
                                            <input defaultValue="1" className="counter" type="text" />
                                            <a href="plus" className="qtyBtn plus" role="button">+</a>
                                        </div>
                                    </div>
                                </Card.Body>
                            </div>


                        </Col>
                        <Col md={4} >
                            <div className="userCard">
                                <p>@123gmail.com</p>
                                <Link className="toList" to="/products">繼續逛逛</Link>
                                <Link className="checkOut" to="/checkout" >進行結帳</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default CartContent;