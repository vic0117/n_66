import React, { Component } from "react";
import { Container, Row, Col, Card, Pagination } from 'react-bootstrap';


import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import search from "../TripLeftmenu/images/search.svg";
// import location from "../TripLeftmenu/images/location.svg";
import trac from "../TripLeftmenu/images/trac.svg";
import dollar from '../TripLeftmenu/images/dollar.svg'
import SliderPrice from '../TripLeftmenu/SliderPrice';
import "./productLeftMenu.scss";

import image1 from '../../images/prducts/AquaMarinaBettaHM/AquaMarinaBettaHM.jpg'
import banner from '../../images/prducts/header22.jpg';


class ProductLeftMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonTitleName1: "選擇主題"
        };
    }

    render() {
        return (
            <>
                <Container fluid className="p-0">
                    <Row className="bannerArea">
                        <img src={banner} alt="banner"/>
                    </Row>
                </Container>
                <Container>

                    <Row>
                        <Col md={3}>
                            <div className="leftMenu">
                                <div className="searchBox">
                                    <input type="text" placeholder="搜尋"></input>
                                    <div className='searchImg'>
                                        <img src={search} alt="search" />
                                    </div>
                                </div>

                                <div className="dropDowns">
                                    <div className="buttonTitle">
                                        <img src={trac} alt="trac" />
                                        <p>北極光</p>
                                    </div>

                                    <DropdownButton
                                        
                                        id="dropdown-basic-button"
                                        onSelect={eventKey => {
                                            this.setState({  });
                                        }}
                                    >
                                        <Dropdown.Item eventKey="北極光" value="1" href="#/action-1">北極光</Dropdown.Item>
                                        <Dropdown.Item eventKey="駕車遊覽" value="2" href="#/action-2">駕車遊覽</Dropdown.Item>
                                        <Dropdown.Item eventKey="獨木舟" value="3" href="#/action-3">獨木舟</Dropdown.Item>
                                        <Dropdown.Item eventKey="雪橇犬" value="3" href="#/action-3">雪橇犬</Dropdown.Item>
                                    </DropdownButton>

                                    <div className="buttonTitle">
                                        <img src={trac} alt="trac" />
                                        <p>獨木舟</p>
                                    </div>
                                    <DropdownButton
                                        className=""
                                        id="dropdown-basic-button"
                                        onSelect={eventKey => {
                                            this.setState({  });
                                        }}
                                    >
                                        <Dropdown.Item eventKey="所有活動" value="1" href="#/action-1">所有活動</Dropdown.Item>
                                        <Dropdown.Item eventKey="北極光" value="1" href="#/action-1">北極光</Dropdown.Item>
                                        <Dropdown.Item eventKey="駕車遊覽" value="2" href="#/action-2">駕車遊覽</Dropdown.Item>
                                        <Dropdown.Item eventKey="獨木舟" value="3" href="#/action-3">獨木舟</Dropdown.Item>
                                        <Dropdown.Item eventKey="雪橇犬" value="3" href="#/action-3">雪橇犬</Dropdown.Item>
                                    </DropdownButton>

                                    <div className="buttonTitle">
                                        <img src={trac} alt="trac" />
                                        <p>郵輪和帆船</p>
                                    </div>
                                    <DropdownButton
                                        className=""
                                        id="dropdown-basic-button"
                                        onSelect={eventKey => {
                                            this.setState({  });
                                        }}
                                    >
                                        <Dropdown.Item eventKey="所有活動" value="1" href="#/action-1">所有活動</Dropdown.Item>
                                        <Dropdown.Item eventKey="北極光" value="1" href="#/action-1">北極光</Dropdown.Item>
                                        <Dropdown.Item eventKey="駕車遊覽" value="2" href="#/action-2">駕車遊覽</Dropdown.Item>
                                        <Dropdown.Item eventKey="獨木舟" value="3" href="#/action-3">獨木舟</Dropdown.Item>
                                        <Dropdown.Item eventKey="雪橇犬" value="3" href="#/action-3">雪橇犬</Dropdown.Item>
                                        <Dropdown.Item eventKey="郵輪和帆船" value="3" href="#/action-3">郵輪和帆船</Dropdown.Item>
                                    </DropdownButton>

                                    <div className="buttonTitle">
                                        <img src={trac} alt="trac" />
                                        <p>動物觀察</p>
                                    </div>
                                    <DropdownButton
                                        className=""
                                        id="dropdown-basic-button"
                                        onSelect={eventKey => {
                                            this.setState({  });
                                        }}
                                    >
                                        <Dropdown.Item eventKey="所有活動" value="1" href="#/action-1">所有活動</Dropdown.Item>
                                        <Dropdown.Item eventKey="北極光" value="1" href="#/action-1">北極光</Dropdown.Item>
                                        <Dropdown.Item eventKey="駕車遊覽" value="2" href="#/action-2">駕車遊覽</Dropdown.Item>
                                        <Dropdown.Item eventKey="獨木舟" value="3" href="#/action-3">獨木舟</Dropdown.Item>
                                        <Dropdown.Item eventKey="雪橇犬" value="3" href="#/action-3">雪橇犬</Dropdown.Item>
                                        <Dropdown.Item eventKey="郵輪和帆船" value="3" href="#/action-3">郵輪和帆船</Dropdown.Item>
                                        <Dropdown.Item eventKey="家庭" value="3" href="#/action-3">家庭</Dropdown.Item>
                                    </DropdownButton>



                                    {/* <RangeSlider /> */}
                                    <div className="buttonTitle" style={{ margin: '30px 0 10px 0' }}>
                                        <img src={dollar} alt="dollar" />
                                        <p>價錢</p>
                                    </div>
                                    <SliderPrice />
                                </div>
                            </div>
                        </Col>
                        <Col md={9} className="p-0">
                            <Container className="p-0 card-container">
                                <Row className="d-flex justify-content-center align-items-center">
                                    <Pagination>
                                        <Pagination.First />
                                        <Pagination.Prev />
                                        <Pagination.Item>{1}</Pagination.Item>
                                        <Pagination.Ellipsis />

                                        <Pagination.Item>{10}</Pagination.Item>
                                        <Pagination.Item>{11}</Pagination.Item>
                                        <Pagination.Item active>{12}</Pagination.Item>
                                        <Pagination.Item>{13}</Pagination.Item>
                                        <Pagination.Item disabled>{14}</Pagination.Item>

                                        <Pagination.Ellipsis />
                                        <Pagination.Item>{20}</Pagination.Item>
                                        <Pagination.Next />
                                        <Pagination.Last />
                                    </Pagination>
                                </Row>
                                <Row>
                                    <Col    sm={6} lg={4}>
                                        <Card className="product-card">
                                            <div className="photoFrame">
                                                <Card.Img variant="top" src={image1} />
                                            </div>
                                            <Card.Body>
                                                <Card.Title>Aqua Marina Betta HM-K0 2 人充氣皮艇</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col    sm={6} lg={4}>
                                        <Card className="product-card">
                                            <div className="photoFrame">
                                                <Card.Img variant="top" src={image1} />
                                            </div>
                                            <Card.Body>
                                                <Card.Title>Aqua Marina Betta HM-K0 2 人充氣皮艇</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col  sm={6} lg={4}>
                                        <Card className="product-card">
                                            <div className="photoFrame">
                                                <Card.Img variant="top" src={image1} />
                                            </div>
                                            <Card.Body>
                                                <Card.Title>Aqua Marina Betta HM-K0 2 人充氣皮艇</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col    sm={6} lg={4}>
                                        <Card className="product-card">
                                            <div className="photoFrame">
                                                <Card.Img variant="top" src={image1} />
                                            </div>
                                            <Card.Body>
                                                <Card.Title>Aqua Marina Betta HM-K0 2 人充氣皮艇</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col    sm={6} lg={4}>
                                        <Card className="product-card">
                                            <div className="photoFrame">
                                                <Card.Img variant="top" src={image1} />
                                            </div>
                                            <Card.Body>
                                                <Card.Title>Aqua Marina Betta HM-K0 2 人充氣皮艇</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col    sm={6} lg={4}>
                                        <Card className="product-card">
                                            <div className="photoFrame">
                                                <Card.Img variant="top" src={image1} />
                                            </div>
                                            <Card.Body>
                                                <Card.Title>Aqua Marina Betta HM-K0 2 人充氣皮艇</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col    sm={6} lg={4}>
                                        <Card className="product-card">
                                            <div className="photoFrame">
                                                <Card.Img variant="top" src={image1} />
                                            </div>
                                            <Card.Body>
                                                <Card.Title>Aqua Marina Betta HM-K0 2 人充氣皮艇</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col    sm={6} lg={4}>
                                        <Card className="product-card">
                                            <div className="photoFrame">
                                                <Card.Img variant="top" src={image1} />
                                            </div>
                                            <Card.Body>
                                                <Card.Title>Aqua Marina Betta HM-K0 2 人充氣皮艇</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col    sm={6} lg={4}>
                                        <Card className="product-card">
                                            <div className="photoFrame">
                                                <Card.Img variant="top" src={image1} />
                                            </div>
                                            <Card.Body>
                                                <Card.Title>Aqua Marina Betta HM-K0 2 人充氣皮艇</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col    sm={6} lg={4}>
                                        <Card className="product-card">
                                            <div className="photoFrame">
                                                <Card.Img variant="top" src={image1} />
                                            </div>
                                            <Card.Body>
                                                <Card.Title>Aqua Marina Betta HM-K0 2 人充氣皮艇</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col    sm={6} lg={4}>
                                        <Card className="product-card">
                                            <div className="photoFrame">
                                                <Card.Img variant="top" src={image1} />
                                            </div>
                                            <Card.Body>
                                                <Card.Title>Aqua Marina Betta HM-K0 2 人充氣皮艇</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col    sm={6} lg={4}>
                                        <Card className="product-card">
                                            <div className="photoFrame">
                                                <Card.Img variant="top" src={image1} />
                                            </div>
                                            <Card.Body>
                                                <Card.Title>Aqua Marina Betta HM-K0 2 人充氣皮艇</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col    sm={6} lg={4}>
                                        <Card className="product-card">
                                            <div className="photoFrame">
                                                <Card.Img variant="top" src={image1} />
                                            </div>
                                            <Card.Body>
                                                <Card.Title>Aqua Marina Betta HM-K0 2 人充氣皮艇</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                            <div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default ProductLeftMenu;
