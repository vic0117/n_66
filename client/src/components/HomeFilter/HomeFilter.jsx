import React, { Component } from "react";
import {
  Dropdown,
  DropdownButton,
  Form,
  Button,
  Row,
  InputGroup,
  FormControl,
  Col,
  Accordion,
  Card
} from "react-bootstrap";
import { Link } from "react-router-dom";
import $ from "jquery";

//SVG
import { ReactComponent as Location } from "./images/location.svg";
import { ReactComponent as Trac } from "./images/trac.svg";
import { ReactComponent as Binoculars } from "./images/binoculars.svg";
import { ReactComponent as Search } from "./images/search.svg";
import { ReactComponent as Filter } from "./images/filter.svg";
import "./HomeFilter.scss";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import { display } from "@material-ui/system";

class HomeFilter extends Component {
  state = {
    titleName1: "選擇目的地",
    titleName2: "活動與主題",
    titleName3: "出發月份",
	 inputSearch: "",
	 place:'所有目的地',
	 month:'所有月份',
	 type:'所有活動',
	 difficulty:'所有難度',
  };
  handleSelect1 = eventKey => {
    this.setState({ titleName1: eventKey });
    this.props.HomeSelect1(eventKey);
  };
  handleSelect2 = eventKey => {
    this.setState({ titleName2: eventKey });
    this.props.HomeSelect2(eventKey);
  };
  handleSelect3 = eventKey => {
    this.setState({ titleName3: eventKey });
    this.props.HomeSelect3(eventKey);
  };

  ////////RWD


  handle1  = ()=>{
	const place1 = $('.placeCard1').text()
	// console.log(place1)
	this.setState({place:place1})
	// $(this).parent().parent().parent().removeClass('show')
 }
 handle2  = ()=>{
	const place2 = $('.placeCard2').text()
	// console.log(place1)
	this.setState({place:place2})
 }
 handle3  = ()=>{
	const place3 = $('.placeCard3').text()
	// console.log(place1)
	this.setState({place:place3})
 }
 handle4 = ()=>{
	const place4 = $('.placeCard4').text()
	// console.log(place1)
	this.setState({place:place4})
 }
 handle5  = ()=>{
	const place5 = $('.placeCard5').text()
	// console.log(place1)
	this.setState({place:place5})
 }
 handle6  = ()=>{
	const place6 = $('.placeCard6').text()
	// console.log(place1)
	this.setState({place:place6})
 }
 handle7 = ()=>{
	const place7 = $('.placeCard7').text()
	// console.log(place1)
	this.setState({place:place7})
 }
 handle8  = ()=>{
	const place8 = $('.placeCard8').text()
	// console.log(place1)
	this.setState({place:place8})
 }
 handle9  = ()=>{
	const place9= $('.placeCard9').text()
	// console.log(place1)
	this.setState({place:place9})
 }
 handle10  = ()=>{
	const place10 = $('.placeCard10').text()
	// console.log(place1)
	this.setState({place:place10})
 }
 handle11 = ()=>{
	const place11 = $('.placeCard11').text()
	// console.log(place1)
	this.setState({place:place11})
 }
 ///////////////////////////////////////////////////////
 handleType1 = ()=>{
	const type1 = $('.typeCard1').text()
	this.setState({type:type1})
 }
 handleType2 = ()=>{
	const type2 = $('.typeCard2').text()
	this.setState({type:type2})
 }
 handleType3 = ()=>{
	const type3 = $('.typeCard3').text()
	this.setState({type:type3})
 }
 handleType4 = ()=>{
	const type4 = $('.typeCard4').text()
	this.setState({type:type4})
 }
 handleType5 = ()=>{
	const type5 = $('.typeCard5').text()
	this.setState({type:type5})
 }
 handleType6 = ()=>{
	const type6 = $('.typeCard6').text()
	this.setState({type:type6})
 }
 handleType7 = ()=>{
	const type7 = $('.typeCard7').text()
	this.setState({type:type7})
 }
 handleType8 = ()=>{
	const type8 = $('.typeCard8').text()
	this.setState({type:type8})
 }
 handleType9 = ()=>{
	const type9 = $('.typeCard9').text()
	this.setState({type:type9})
 }
 handleType10 = ()=>{
	const type10 = $('.typeCard10').text()
	this.setState({type:type10})
 }
 handleType11 = ()=>{
	const type11 = $('.typeCard11').text()
	this.setState({type:type11})
 }
 handleType12 = ()=>{
	const type12 = $('.typeCard12').text()
	this.setState({type:type12})
 }
 handleType13 = ()=>{
	const type13 = $('.typeCard13').text()
	this.setState({type:type13})
 }
 handleType14 = ()=>{
	const type14 = $('.typeCard14').text()
	this.setState({type:type14})
 }
//////////////////////////////////////////////////////
	handleMonth1 = ()=>{
		const month1 = $('.monthCard1').text()
		this.setState({month:month1})
	}
	handleMonth2 = ()=>{
		const month2 = $('.monthCard2').text()
		this.setState({month:month2})
	}
	handleMonth3 = ()=>{
		const month3 = $('.monthCard3').text()
		this.setState({month:month3})
	}
	handleMonth4 = ()=>{
		const month4 = $('.monthCard4').text()
		this.setState({month:month4})
	}
	handleMonth5 = ()=>{
		const month5 = $('.monthCard5').text()
		this.setState({month:month5})
	}
	handleMonth6 = ()=>{
		const month6 = $('.monthCard6').text()
		this.setState({month:month6})
	}
	handleMonth7 = ()=>{
		const month7 = $('.monthCard7').text()
		this.setState({month:month7})
	}
	handleMonth8 = ()=>{
		const month8 = $('.monthCard8').text()
		this.setState({month:month8})
	}
	handleMonth9 = ()=>{
		const month9 = $('.monthCard9').text()
		this.setState({month:month9})
	}
	handleMonth10 = ()=>{
		const month10 = $('.monthCard10').text()
		this.setState({month:month10})
	}
	handleMonth11 = ()=>{
		const month11 = $('.monthCard11').text()
		this.setState({month:month11})
	}
	handleMonth12 = ()=>{
		const month12 = $('.monthCard12').text()
		this.setState({month:month12})
	}

/////////////////////////////////////////////////////////////
	handleDifficulty1=()=>{
		const difficulty1 = $('.difficultyCard1').text()
		this.setState({difficulty:difficulty1})
	}
	handleDifficulty2=()=>{
		const difficulty2 = $('.difficultyCard2').text()
		this.setState({difficulty:difficulty2})
	}
	handleDifficulty3=()=>{
		const difficulty3 = $('.difficultyCard3').text()
		this.setState({difficulty:difficulty3})
	}
	handleDifficulty4=()=>{
		const difficulty4 = $('.difficultyCard4').text()
		this.setState({difficulty:difficulty4})
	}
	handleDifficulty5=()=>{
		const difficulty5 = $('.difficultyCard5').text()
		this.setState({difficulty:difficulty5})
	}
	handleDifficulty6=()=>{
		const difficulty6 = $('.difficultyCard6').text()
		this.setState({difficulty:difficulty6})
	}

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
    console.log(this.state.inputSearch);
    return (
      <div className="filter-home-container">
        <Form className="main-filter-container">
          <Row className="row-no-margin searchbox-row">
            <div className="d-flex drop-down-container home-filter-show">
              <Dropdown className="filter-icon-container d-flex-2 ">
                <Dropdown.Toggle
                  id="dropdown-basic-button"
                  className="filter-icon"
                  title={this.state.titleName}
                >
                  <Location
                    className="location"
                    height="24"
                    width="24"
                  ></Location>
                  <span className="filter-icon-title">
                    {this.state.titleName1}
                  </span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="toggle-menu">
                  <Dropdown.Item
                    eventKey="所有目的地"
                    className="toggle-item"
                    onSelect={this.handleSelect1}
                  >
                    所有目的地
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="阿拉斯加州"
                    className="toggle-item"
                    onSelect={this.handleSelect1}
                  >
                    阿拉斯加州
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="南極洲"
                    className="toggle-item"
                    onSelect={this.handleSelect1}
                  >
                    南極洲
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="加拿大"
                    className="toggle-item"
                    onSelect={this.handleSelect1}
                  >
                    加拿大
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="芬蘭"
                    className="toggle-item"
                    onSelect={this.handleSelect1}
                  >
                    芬蘭
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="格陵蘭"
                    className="toggle-item"
                    onSelect={this.handleSelect1}
                  >
                    格陵蘭
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="費洛群島"
                    className="toggle-item"
                    onSelect={this.handleSelect1}
                  >
                    費洛群島
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="冰島"
                    className="toggle-item"
                    onSelect={this.handleSelect1}
                  >
                    冰島
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="挪威"
                    className="toggle-item"
                    onSelect={this.handleSelect1}
                  >
                    挪威
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="俄羅斯"
                    className="toggle-item"
                    onSelect={this.handleSelect1}
                  >
                    俄羅斯
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="斯匹茲卑爾根島"
                    className="toggle-item"
                    onSelect={this.handleSelect1}
                  >
                    斯匹茲卑爾根島
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="瑞典"
                    className="toggle-item"
                    onSelect={this.handleSelect1}
                  >
                    瑞典
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown className="filter-icon-container d-flex-2">
                <Dropdown.Toggle id="dropdown-basic" className="filter-icon">
                  <Trac className="trac" height="24" width="24"></Trac>
                  <span className="filter-icon-title">
                    {this.state.titleName2}
                  </span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="toggle-menu">
                  <Dropdown.Item
                    eventKey="所有活動"
                    className="toggle-item"
                    onSelect={this.handleSelect2}
                  >
                    所有活動
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="北極光"
                    className="toggle-item"
                    onSelect={this.handleSelect2}
                  >
                    北極光
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="駕車遊覽"
                    className="toggle-item"
                    onSelect={this.handleSelect2}
                  >
                    駕車遊覽
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="獨木舟"
                    className="toggle-item"
                    onSelect={this.handleSelect2}
                  >
                    獨木舟
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="雪橇犬"
                    className="toggle-item"
                    onSelect={this.handleSelect2}
                  >
                    雪橇犬
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="郵輪和帆船"
                    className="toggle-item"
                    onSelect={this.handleSelect2}
                  >
                    郵輪和帆船
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="家庭"
                    className="toggle-item"
                    onSelect={this.handleSelect2}
                  >
                    家庭
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="多活動"
                    className="toggle-item"
                    onSelect={this.handleSelect2}
                  >
                    多活動
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="動物觀察"
                    className="toggle-item"
                    onSelect={this.handleSelect2}
                  >
                    動物觀察
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="攝影"
                    className="toggle-item"
                    onSelect={this.handleSelect2}
                  >
                    攝影
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="划艇"
                    className="toggle-item"
                    onSelect={this.handleSelect2}
                  >
                    划艇
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="步行"
                    className="toggle-item"
                    onSelect={this.handleSelect2}
                  >
                    步行
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="雪鞋"
                    className="toggle-item"
                    onSelect={this.handleSelect2}
                  >
                    雪鞋
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="跨年"
                    className="toggle-item"
                    onSelect={this.handleSelect2}
                  >
                    跨年
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="遠足"
                    className="toggle-item"
                    onSelect={this.handleSelect2}
                  >
                    遠足
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
                  <span className="filter-icon-title">
                    {this.state.titleName3}
                  </span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="toggle-menu">
                  <Dropdown.Item
                    eventKey="所有月份"
                    className="toggle-item"
                    onSelect={this.handleSelect3}
                  >
                    所有月份
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="一月"
                    className="toggle-item"
                    onSelect={this.handleSelect3}
                  >
                    一月
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="二月"
                    className="toggle-item"
                    onSelect={this.handleSelect3}
                  >
                    二月
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="三月"
                    className="toggle-item"
                    onSelect={this.handleSelect3}
                  >
                    三月
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="四月"
                    className="toggle-item"
                    onSelect={this.handleSelect3}
                  >
                    四月
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="五月"
                    className="toggle-item"
                    onSelect={this.handleSelect3}
                  >
                    五月
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="六月"
                    className="toggle-item"
                    onSelect={this.handleSelect3}
                  >
                    六月
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="七月"
                    className="toggle-item"
                    onSelect={this.handleSelect3}
                  >
                    七月
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="八月"
                    className="toggle-item"
                    onSelect={this.handleSelect3}
                  >
                    八月
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="九月"
                    className="toggle-item"
                    onSelect={this.handleSelect3}
                  >
                    九月
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="十月"
                    className="toggle-item"
                    onSelect={this.handleSelect3}
                  >
                    十月
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="十一月"
                    className="toggle-item"
                    onSelect={this.handleSelect3}
                  >
                    十一月
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="十二月"
                    className="toggle-item"
                    onSelect={this.handleSelect3}
                  >
                    十二月
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <InputGroup
              className="searchbox-input-container home-filter-hide"
              onChange={e => this.setState({ inputSearch: e.target.value })}
            >
              <FormControl
                placeholder="請輸入關鍵字"
                aria-label="Username"
                aria-describedby="basic-addon1"
                className="searchbox-input"
              />
            </InputGroup>
            <div className="d-flex d-flex-1 search-btn">
              <Search heigth="20" width="20" className="margin-auto search" />
            </div>
            <div className="d-flex-1 submit-btn">
              <Link
                to={`/trips/page/1?place=${this.state.titleName1}&type=${this.state.titleName2}&month=${this.state.titleName3}&search=${this.state.inputSearch}`}
              >
                <Button
                  type="button"
                  className="main-filter-btn d-flex-1 text-center"
                  // onClick={()=>this.props.HomeSearch()}
                >
                  搜尋
                </Button>
              </Link>
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
                <a className="anotherSearch" href="#1" role="button"></a>
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
                  <p>選擇目的地</p>
						<h6 className = {this.state.place =='所有目的地'? 'displayNone' : '' }>{this.state.place}</h6>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <ul>
                      <li className="placeCard1" onClick={this.handle1}>
                        所有目的地
                      </li>
                      <li className="placeCard2" onClick={this.handle2}>
                        阿拉斯加洲
                      </li>
                      <li className="placeCard3" onClick={this.handle3}>
                        南極洲
                      </li>
                      <li className="placeCard4" onClick={this.handle4}>
                        加拿大
                      </li>
                      <li className="placeCard5" onClick={this.handle5}>
                        芬蘭
                      </li>
                      <li className="placeCard6" onClick={this.handle6}>
                        格陵蘭
                      </li>
                      <li className="placeCard7" onClick={this.handle7}>
                        費洛群島
                      </li>
                      <li className="placeCard8" onClick={this.handle8}>
                        挪威
                      </li>
                      <li className="placeCard9" onClick={this.handle9}>
                        俄羅斯
                      </li>
                      <li className="placeCard10" onClick={this.handle10}>
                        斯匹茲卑爾根島
                      </li>
                      <li className="placeCard11" onClick={this.handle11}>
                        瑞典
                      </li>
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
						<h6 className = {this.state.type =='所有活動'? 'displayNone' : '' }>{this.state.type}</h6>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <ul>
                      <li className="typeCard1" onClick={this.handleType1}>
                        所有活動
                      </li>
                      <li className="typeCard2" onClick={this.handleType2}>
                        北極光
                      </li>
                      <li className="typeCard3" onClick={this.handleType3}>
                        獨木舟
                      </li>
                      <li className="typeCard4" onClick={this.handleType4}>
                        動物觀察
                      </li>
                      <li className="typeCard5" onClick={this.handleType5}>
                        多活動
                      </li>
                      <li className="typeCard6" onClick={this.handleType6}>
                        駕車遊覽
                      </li>
                      <li className="typeCard7" onClick={this.handleType7}>
                        雪橇犬
                      </li>
                      <li className="typeCard8" onClick={this.handleType8}>
                        郵輪和帆船
                      </li>
                      <li className="typeCard9" onClick={this.handleType9}>
                        家庭
                      </li>
                      <li className="typeCard10" onClick={this.handleType10}>
                        划艇
                      </li>
                      <li className="typeCard11" onClick={this.handleType11}>
                        步行
                      </li>
                      <li className="typeCard12" onClick={this.handleType12}>
                        跨年
                      </li>
                      <li className="typeCard13" onClick={this.handleType13}>
                        雪鞋
                      </li>
                      <li className="typeCard14" onClick={this.handleType14}>
                        攝影
                      </li>
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
						<h6 className = {this.state.month =='所有月份'? 'displayNone' : '' }>{this.state.month}</h6>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <ul>
                      <li className="monthCard1" onClick={this.handleMonth1}>
                        一月
                      </li>
                      <li className="monthCard2" onClick={this.handleMonth2}>
                        二月
                      </li>
                      <li className="monthCard3" onClick={this.handleMonth3}>
                        三月
                      </li>
                      <li className="monthCard4" onClick={this.handleMonth4}>
                        四月
                      </li>
                      <li className="monthCard5" onClick={this.handleMonth5}>
                        五月
                      </li>
                      <li className="monthCard6" onClick={this.handleMonth6}>
                        六月
                      </li>
                      <li className="monthCard7" onClick={this.handleMonth7}>
                        七月
                      </li>
                      <li className="monthCard8" onClick={this.handleMonth8}>
                        八月
                      </li>
                      <li className="monthCard9" onClick={this.handleMonth9}>
                        九月
                      </li>
                      <li className="monthCard10" onClick={this.handleMonth10}>
                        十月
                      </li>
                      <li className="monthCard11" onClick={this.handleMonth11}>
                        十一月
                      </li>
                      <li className="monthCard12" onClick={this.handleMonth12}>
                        十二月
                      </li>
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
						<h6 className = {this.state.difficulty =='所有難度'? 'displayNone' : '' }>{this.state.difficulty}</h6>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <ul>
                      <li
                        className="difficultyCard1"
                        onClick={this.handleDifficulty1}
                      >
                        所有難度
                      </li>
                      <li
                        className="difficultyCard2"
                        onClick={this.handleDifficulty2}
                      >
                        非常簡單
                      </li>
                      <li
                        className="difficultyCard3"
                        onClick={this.handleDifficulty3}
                      >
                        簡單
                      </li>
                      <li
                        className="difficultyCard4"
                        onClick={this.handleDifficulty4}
                      >
                        普通
                      </li>
                      <li
                        className="difficultyCard5"
                        onClick={this.handleDifficulty5}
                      >
                        困難
                      </li>
                      <li
                        className="difficultyCard6"
                        onClick={this.handleDifficulty6}
                      >
                        非常困難
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
				<Link to={`/trips/page/1?place=${this.state.place}&type=${this.state.type}&month=${this.state.month}&difficulty=${this.state.difficulty}`}>
					<div className='FilterSearchBox'>搜尋</div>
				</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeFilter;
