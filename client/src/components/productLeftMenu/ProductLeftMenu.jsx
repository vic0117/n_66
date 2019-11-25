import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Pagination,
  Dropdown,
  Accordion
} from "react-bootstrap";
import { Link } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import search from "../../components/TripLeftmenu/images/search.svg";
// import location from '../TripLeftMenu/images/location.svg';
import trac from "../../components/TripLeftmenu/images/trac.svg";
import SliderPrice from "../../components/TripLeftmenu/SliderPrice";

//IMAGES
import filterImg from "./img/filter.svg";

//CSS
import "./productLeftMenu.css";
import banner from "./img/header22.jpg";
import TripLeftMenu from "../TripLeftmenu/TripLeftMenu";

class ProductLeftMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      todosPerPage: 10,
      productsData: []
    };
  }

  componentDidMount() {
    let pages = document.querySelector(".page1");
    console.log(pages);
    let filterBtn = document.querySelector(".product-filter-btn");
    let filterMenu = document.querySelector(".product-filter-menu");
    let filterToggler = document.querySelector(".filterToggler");
    let body = document.querySelector("body");

    filterBtn.addEventListener("click", () => {
      filterMenu.style.left = "0";
      filterBtn.style.right = "100%";
      body.style.overflowY = "hidden";
    });

    filterToggler.addEventListener("click", () => {
      filterMenu.style.left = "100%";
      filterBtn.style.right = "0";
      body.style.overflowY = "scroll";
    });
  }

  handleClick = event => {
    let pageItems = document.querySelectorAll(".page-item");
    // console.log(pageItems)
    for (let i = 0; i < pageItems.length; i++) {
      pageItems[i].classList.remove("active");
    }

    event.target.classList.add("active");

    let currentNumber = parseInt(event.target.id);
    // console.log(currentNumber);
    this.setState({
      currentPage: currentNumber
    });
  };

  goPrev = () => {
    let { currentPage } = this.state;

    currentPage -= 1;

    if (currentPage < 1) {
      currentPage = 1;
    }

    let pageItems = document.querySelectorAll(".page-item");
    // console.log(pageItems)
    for (let i = 0; i < pageItems.length; i++) {
      pageItems[i].classList.remove("active");
    }

    pageItems[currentPage].classList.add("active");

    // console.log(currentNumber);
    this.setState({
      currentPage: currentPage
    });
  };

  goNext = () => {
    let { currentPage } = this.state;
    let pageItems = document.querySelectorAll(".page-item");

    currentPage += 1;

    if (currentPage >= pageItems.length - 1) {
      currentPage = pageItems.length - 1;
    }

    // console.log(pageItems)
    for (let i = 0; i < pageItems.length; i++) {
      pageItems[i].classList.remove("active");
    }

    pageItems[currentPage].classList.add("active");

    // console.log(currentNumber);
    this.setState({
      currentPage: currentPage
    });
  };

  render() {
    const { data } = this.props;
    // console.log(data);
    const { currentPage, todosPerPage } = this.state;
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = data.slice(indexOfFirstTodo, indexOfLastTodo);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          className={number == 1 ? "page-item active" : "page-item"}
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });

    const renderTodos = currentTodos.map((item, i) => {
      return (
        <Col key={i} sm={6} lg={4}>
          <Link to={`/products/${item.product_id}`}>
            <Card key={item.product_id} className="product-card">
              <div className="photoFrame">
                <Card.Img
                  variant="top"
                  src={
                    "http://localhost:3000/images/products/" +
                    item.product_file_name +
                    "/" +
                    JSON.parse(item.product_pictures)[0]
                  }
                />
              </div>
              <Card.Body>
                <Card.Title>{item.product_name}</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      );
    });

    return (
      <div className="ProductLeftMenuContainer">
        <div className="product-filter-menu">
          <div className="product-filter-btn d-flex justify-content-center align-items-center">
            <div>
              <img src={filterImg} alt="filterImg" />
            </div>
          </div>

          <div className="product-fake-nav">
            <a
              href="#666"
              className="filterToggler ml-auto d-flex justify-content-center align-items-center"
              role="button"
            >
              <div className="toggle-inner ">
                <div className="white-line up-line"></div>
                <div className="white-line down-line"></div>
              </div>
            </a>
          </div>
          <div className="list">
            <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  <div className="svgFrame">
                    <img
                      src="http://localhost:3000/images/svg/northLight.svg"
                      alt="location"
                    />
                  </div>
                  <p>北極光</p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <ul>
                      <li>不拘</li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  <div id="calender" className="svgFrame">
                    <img
                      src="http://localhost:3000/images/svg/boat.svg"
                      alt="location"
                    />
                  </div>
                  <p>獨木舟</p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <ul>
                      <li>一月</li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  <div id="ring" className="svgFrame">
                    <img
                      src="http://localhost:3000/images/svg/customize.svg"
                      alt="location"
                    />
                  </div>
                  <p>動物觀察</p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <ul>
                      <li>簡單</li>
                      <li>中等</li>
                      <li>困難</li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4">
                  <div id="ring" className="svgFrame">
                    <img
                      src="http://localhost:3000/images/svg/hiking.svg"
                      alt="location"
                    />
                  </div>
                  <p>森林露營</p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    <ul>
                      <li>簡單</li>
                      <li>中等</li>
                      <li>困難</li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="5">
                  <div id="ring" className="svgFrame">
                    <img
                      src="http://localhost:3000/images/svg/multiActivities.svg"
                      alt="location"
                    />
                  </div>
                  <p>多種活動</p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    <ul>
                      <li>簡單</li>
                      <li>中等</li>
                      <li>困難</li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="6">
                  <div id="duration" className="svgFrame">
                    <img
                      src="http://localhost:3000/images/svg/dollar.svg"
                      alt="dollar"
                    />
                  </div>
                  <p>價格區間</p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="6">
                  <Card.Body id="days-of-stay">
                    <SliderPrice />
                    <a
                      className="searchDaysBtn"
                      onClick={this.searchByStay}
                      href="#searchDays"
                      role="button"
                    >
                      確定
                    </a>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>

        <Container fluid className="p-0">
          <Row className="bannerArea">
            <img src={banner} alt="banner" />
          </Row>
        </Container>
        <Container className="productsSection">
          <Row className="leftMenuRow d-flax justify-content-center">
            <Col md={3} className="leftMenuContent">
              <div className="leftMenu">
                {/* <div className="searchBox">
                  <input type="text" placeholder="搜尋"></input>
                  <div className="searchImg">
                    <img src={search} alt="search" />
                  </div>
                </div> */}
                <div className="buttonTitle">
                  <img src={trac} alt="trac" />
                  <p>森林露營</p>
                </div>
                <DropdownButton
                  className=""
                  title="所有類型"
                  // id="dropdown-basic-button"
                  onSelect={eventKey => {
                    this.setState({});
                  }}
                >
                  <Dropdown.Item
                    eventKey="所有類型"
                    value="1"
                    href="#/action-1"
                  >
                    所有類型
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="帳篷" value="2" href="#/action-2">
                    帳篷
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="燈具爐具"
                    value="3"
                    href="#/action-3"
                  >
                    燈具爐具
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="焚火燒烤"
                    value="4"
                    href="#/action-4"
                  >
                    焚火燒烤
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="寢室用具"
                    value="5"
                    href="#/action-5"
                  >
                    寢室用具
                  </Dropdown.Item>
                </DropdownButton>

                <div className="dropDowns">
                  <div className="buttonTitle">
                    <img src={trac} alt="trac" />
                    <p>北極光</p>
                  </div>

                  <DropdownButton
                    // id="dropdown-basic-button"
                    title="所有類型"
                    onSelect={eventKey => {
                      this.setState({});
                    }}
                  >
                    <Dropdown.Item
                      eventKey="所有類型"
                      value="1"
                      href="#/action-1"
                    >
                      所有類型
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey="登山背包"
                      value="2"
                      href="#/action-2"
                    >
                      登山背包
                    </Dropdown.Item>
                  </DropdownButton>

                  <div className="buttonTitle">
                    <img src={trac} alt="trac" />
                    <p>獨木舟</p>
                  </div>
                  <DropdownButton
                    className=""
                    title="所有類型"
                    // id="dropdown-basic-button"
                    onSelect={eventKey => {
                      this.setState({});
                    }}
                  >
                    <Dropdown.Item
                      eventKey="所有類型"
                      value="1"
                      href="#/action-1"
                    >
                      所有類型
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey="北極光"
                      value="1"
                      href="#/action-1"
                    >
                      北極光
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey="駕車遊覽"
                      value="2"
                      href="#/action-2"
                    >
                      駕車遊覽
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey="獨木舟"
                      value="3"
                      href="#/action-3"
                    >
                      獨木舟
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey="雪橇犬"
                      value="3"
                      href="#/action-3"
                    >
                      雪橇犬
                    </Dropdown.Item>
                  </DropdownButton>

                  <div className="buttonTitle">
                    <img src={trac} alt="trac" />
                    <p>郵輪和帆船</p>
                  </div>
                  <DropdownButton
                    className=""
                    // id="dropdown-basic-button"
                    onSelect={eventKey => {
                      this.setState({});
                    }}
                  >
                    <Dropdown.Item
                      eventKey="所有活動"
                      value="1"
                      href="#/action-1"
                    >
                      所有活動
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey="北極光"
                      value="1"
                      href="#/action-1"
                    >
                      北極光
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey="駕車遊覽"
                      value="2"
                      href="#/action-2"
                    >
                      駕車遊覽
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey="獨木舟"
                      value="3"
                      href="#/action-3"
                    >
                      獨木舟
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey="雪橇犬"
                      value="3"
                      href="#/action-3"
                    >
                      雪橇犬
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey="郵輪和帆船"
                      value="3"
                      href="#/action-3"
                    >
                      郵輪和帆船
                    </Dropdown.Item>
                  </DropdownButton>

                  <div className="buttonTitle">
                    <img src={trac} alt="trac" />
                    <p>動物觀察</p>
                  </div>
                  <DropdownButton
                    className=""
                    // id="dropdown-basic-button"
                    onSelect={eventKey => {
                      this.setState({});
                    }}
                  >
                    <Dropdown.Item
                      eventKey="所有活動"
                      value="1"
                      href="#/action-1"
                    >
                      所有活動
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey="北極光"
                      value="1"
                      href="#/action-1"
                    >
                      北極光
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey="駕車遊覽"
                      value="2"
                      href="#/action-2"
                    >
                      駕車遊覽
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey="獨木舟"
                      value="3"
                      href="#/action-3"
                    >
                      獨木舟
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey="雪橇犬"
                      value="3"
                      href="#/action-3"
                    >
                      雪橇犬
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey="郵輪和帆船"
                      value="3"
                      href="#/action-3"
                    >
                      郵輪和帆船
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="家庭" value="3" href="#/action-3">
                      家庭
                    </Dropdown.Item>
                  </DropdownButton>

                  <div
                    className="buttonTitle"
                    style={{ margin: "30px 0 10px 0" }}
                  >
                    <img
                      src="http://localhost:3000/images/svg/dollar.svg"
                      alt="dollar"
                    />
                    <p>價錢</p>
                  </div>
                  <SliderPrice />
                </div>
              </div>
            </Col>
            <Col sm={12} md={9} className="p-0">
              <Container className="p-0 card-container">
                <Row>{renderTodos}</Row>
                <Row>
                  <Col>
                    <ul id="page-numbers" className="pagination">
                      <li className="page-item" onClick={this.goPrev}>
                        -
                      </li>
                      {renderPageNumbers}
                      <li className="page-item" onClick={this.goNext}>
                        +
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ProductLeftMenu;
