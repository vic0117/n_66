import React, { Component } from "react";
import {
  Dropdown,
  Form,
  Button,
  Row,
  InputGroup,
  FormControl,
  Col,
  Accordion,
  Card
} from "react-bootstrap";

import SliderDays from "../TripLeftmenu/SliderDays";

//SVG
import { ReactComponent as Location } from "./images/location.svg";
import { ReactComponent as Trac } from "./images/trac.svg";
import { ReactComponent as Binoculars } from "./images/binoculars.svg";
import { ReactComponent as Search } from "./images/search.svg";
import { ReactComponent as Filter } from "./images/filter.svg";
import "./HomeFilter.css";

class HomeFilter extends Component {
  state = {};
  handleSelect1 = eventKey => {
    this.setState({ buttonTitleName1: eventKey });
    // this.props.select1(eventKey);
  };

  searchByStay = () => {
    console.log("aaaa");
  };

  componentDidMount() {
    let filterIcon = document.querySelector(".icon");
    let filterMenu = document.querySelector(".filter-menu");
    let filterToggler = document.querySelector(".filterToggler");
    let body = document.querySelector("body");
    let anotherSearch = document.querySelector(".anotherSearch");
    // let searchDaysBtn = document.querySelector(".searchDaysBtn");
    let windowWidth = 0;

    filterIcon.addEventListener("click", () => {
      filterMenu.style.left = "0%";
      body.style.overflowY = "hidden";
    });

    filterToggler.addEventListener("click", () => {
      filterMenu.style.left = "100%";
      body.style.overflowY = "auto";
    });

    window.addEventListener("resize", () => {
      windowWidth = window.innerWidth;

      if (windowWidth >= 768) {
        anotherSearch.style.pointerEvent = "none";
      }
    });

    anotherSearch.addEventListener("click", () => {
      filterMenu.style.left = "0%";
      body.style.overflowY = "hidden";
    });
    // toggle 分類和搜尋
    const search_btn = document.querySelector(".search-btn");
    search_btn.addEventListener("click", function() {
      let filter_icons = document
        .querySelector(".drop-down-container")
        .classList.contains("home-filter-show");

      if (filter_icons) {
        document
          .querySelector(".drop-down-container")
          .classList.remove("home-filter-show");
        document
          .querySelector(".drop-down-container")
          .classList.add("home-filter-hide");
        document
          .querySelector(".searchbox-input-container")
          .classList.remove("home-filter-hide");
        document
          .querySelector(".searchbox-input-container")
          .classList.add("home-filter-show");
      } else {
        document
          .querySelector(".drop-down-container")
          .classList.remove("home-filter-hide");
        document
          .querySelector(".drop-down-container")
          .classList.add("home-filter-show");
        document
          .querySelector(".searchbox-input-container")
          .classList.remove("home-filter-show");
        document
          .querySelector(".searchbox-input-container")
          .classList.add("home-filter-hide");
      }
    });
  }

  render() {
    return (
      <div className="filter-home-container">
        <Form className="main-filter-container">
          <Row className="row-no-margin searchbox-row">
            {/*  */}
            <div className="d-flex drop-down-container home-filter-show">
              <Dropdown className="filter-icon-container d-flex-2 ">
                <Dropdown.Toggle id="dropdown-basic" className="filter-icon">
                  <Location
                    className="location"
                    height="24"
                    width="24"
                  ></Location>
                  <span className="filter-icon-title">目的地</span>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  className="toggle-menu"
                  onSelect={eventKey => this.setState({ qwe: eventKey })}
                >
                  <Dropdown.Item eventKey="冰島" className="toggle-item">
                    冰島
                  </Dropdown.Item>

                  <Dropdown.Item eventKey="芬蘭" className="toggle-item">
                    芬蘭
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="加拿大" className="toggle-item">
                    加拿大
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="俄羅斯" className="toggle-item">
                    俄羅斯
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown className="filter-icon-container d-flex-2">
                <Dropdown.Toggle id="dropdown-basic" className="filter-icon">
                  <Trac className="trac" height="24" width="24"></Trac>
                  <span className="filter-icon-title">旅行類型</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="toggle-menu">
                  <Dropdown.Item href="#/action-1" className="toggle-item">
                    冰島
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" className="toggle-item">
                    挪威
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3" className="toggle-item">
                    芬蘭
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3" className="toggle-item">
                    加拿大
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3" className="toggle-item">
                    俄羅斯
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown className="filter-icon-container d-flex-2">
                <Dropdown.Toggle id="dropdown-basic" className="filter-icon">
                  <Binoculars
                    className="binoculars"
                    height="24"
                    width="24"
                  ></Binoculars>
                  <span className="filter-icon-title">活動與主題</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="toggle-menu">
                  <Dropdown.Item href="#/action-1" className="toggle-item">
                    不拘
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" className="toggle-item">
                    北極光
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3" className="toggle-item">
                    獨木舟
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3" className="toggle-item">
                    動物觀察
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3" className="toggle-item">
                    多種活動
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <InputGroup className="searchbox-input-container home-filter-hide">
              <FormControl
                placeholder="請輸入關鍵字"
                aria-label="Username"
                aria-describedby="basic-addon1"
                className="searchbox-input"
              />
            </InputGroup>
            {/*  */}
            <div className="d-flex d-flex-1 search-btn">
              <Search heigth="20" width="20" className="margin-auto search" />
            </div>
            <div className="d-flex-1 submit-btn">
              <Button
                type="submit"
                className="main-filter-btn d-flex-1 text-center"
              >
                搜尋
              </Button>
            </div>
          </Row>
        </Form>

        <Row className="before-rwd">
          <Col>
            <div className="main-filter-container-rwd d-flex">
              <div className="icon d-flex">
                <Filter className="m-auto " height="20" width="20" />
              </div>
              <div className="search">
                <p>搜尋</p>
                <a className="anotherSearch" href="#1" role="button">
                  {" "}
                </a>
              </div>
            </div>
          </Col>
        </Row>

        <div className="filter-menu">
          <div className="fakeNav">
            <a
              className="filterToggler ml-auto d-flex justify-content-center align-items-center"
              href="#3"
              role="button"
            >
              <div className="toggle-inner ">
                <div className="white-line up-line"></div>
                <div className="white-line down-line"></div>
              </div>
            </a>
          </div>
          <div className="list">
            <Accordion>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  <div className="svgFrame">
                    <img
                      src="http://localhost:3000/images/svg/location.svg"
                      alt="location"
                    />
                  </div>
                  <p>目的地</p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <ul>
                      <li>不拘</li>
                      <li>阿拉斯加</li>
                      <li>南極洲</li>
                      <li>加拿大</li>
                      <li>芬蘭</li>
                      <li>格陵蘭</li>
                      <li>費羅群島</li>
                      <li>挪威</li>
                      <li>俄羅斯</li>
                      <li>斯匹次卑爾根</li>
                      <li>瑞典</li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  <div className="svgFrame">
                    <img
                      src="http://localhost:3000/images/svg/trac.svg"
                      alt="location"
                    />
                  </div>
                  <p>活動與主題</p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <ul>
                      <li>不拘</li>
                      <li>北極光</li>
                      <li>獨木舟</li>
                      <li>動物觀察</li>
                      <li>多種活動</li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  <div id="calender" className="svgFrame">
                    <img
                      src="http://localhost:3000/images/svg/calender.svg"
                      alt="location"
                    />
                  </div>
                  <p>出發月份</p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <ul>
                      <li>一月</li>
                      <li>二月</li>
                      <li>三月</li>
                      <li>四月</li>
                      <li>五月</li>
                      <li>六月</li>
                      <li>七月</li>
                      <li>八月</li>
                      <li>九月</li>
                      <li>十月</li>
                      <li>十一月</li>
                      <li>十二月</li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  <div id="ring" className="svgFrame">
                    <img
                      src="http://localhost:3000/images/svg/ring3.svg"
                      alt="location"
                    />
                  </div>
                  <p>困難度</p>
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
                  <div id="duration" className="svgFrame">
                    <img
                      src="http://localhost:3000/images/svg/duration.svg"
                      alt="duration"
                    />
                  </div>
                  <p>停留時間</p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body id="days-of-stay">
                    <SliderDays />
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
      </div>
    );
  }
}

export default HomeFilter;
