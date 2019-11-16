import React, { Component } from 'react';
import SliderDays from "../TripLeftmenu/SliderDays";
import {
	Dropdown,
	Form,
	Button,
	Row,
	InputGroup,
	FormControl,
	Col,
	Accordion,
	Card,
	Container
 } from "react-bootstrap";

 class TripMenuFilter extends Component {
	 constructor(props) {
		 super(props);
		 this.state = {  }
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
	 }


	 render() { 
		 return ( <>
		 <Container>
			<Row className="before-rwd">
			<Col>
			  <div className="main-filter-container-rwd d-flex">
				 <div className="icon d-flex">
					<Filter className="m-auto " height="20" width="20" />
				 </div>
				 <div className="search">
					<p>搜尋</p>
					<a className="anotherSearch" href="#5" role="button"> </a>
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
		 </div></Container>
	  </>
		  );
	 }
 }
  
 export default TripMenuFilter;