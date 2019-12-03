import React from "react";
import {
    Row,
    Col,
    Accordion,
    Card,
    Container
} from "react-bootstrap";

// import SliderDays from "../TripLeftMenu/SliderDays"

// SVG
// import { ReactComponent as Location } from "./images/location.svg";
// import { ReactComponent as Trac } from "./images/trac.svg";
// import { ReactComponent as Binoculars } from "./images/binoculars.svg";
// import { ReactComponent as Search } from "./images/search.svg";
import { ReactComponent as Filter } from "./images/filter.svg";
import $ from 'jquery'
import SliderPrice from '../ProductLeftMenu/SliderPrice';

import "./TripFilter.scss";


class TripFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			  place:null,
			  type:null,
			  month:null,
			  difficulty:null,
		  }
    }

    componentDidMount() {
        let filterIcon = document.querySelector(".icon");
        let tripFilterMenu = document.querySelector(".trip-filter-menu");
        let TripFilterToggler = document.querySelector(".TripFilterToggler");
        let body = document.querySelector("body");
        let anotherSearch = document.querySelector(".anotherSearch");
        // let searchDaysBtn = document.querySelector(".searchDaysBtn");
      //   let windowWidth = 0; 

        filterIcon.addEventListener("click", () => {
            tripFilterMenu.style.left = "0%";
            body.style.overflowY = "hidden";
        });

        TripFilterToggler.addEventListener("click", () => {
            tripFilterMenu.style.left = "100%";
            body.style.overflowY = "auto";
        });

      //   window.addEventListener("resize", () => {
      //       windowWidth = window.innerWidth;

      //       if (windowWidth >= 768) {
      //           anotherSearch.style.pointerEvent = "none";
      //       }
      //   });

        anotherSearch.addEventListener("click", () => {
            tripFilterMenu.style.left = "0%";
            body.style.overflowY = "hidden";
		  });
		  
	 }
	 
	 handle1  = ()=>{
		const place1 = $('.placeCard1').text()
		// console.log(place1)
		this.setState({place:place1})
		this.props.select1(place1)
		// $(this).parent().parent().parent().removeClass('show')
	 }
	 handle2  = ()=>{
		const place2 = $('.placeCard2').text()
		// console.log(place1)
		this.setState({place:place2})
		this.props.select1(place2)
	 }
	 handle3  = ()=>{
		const place3 = $('.placeCard3').text()
		// console.log(place1)
		this.setState({place:place3})
		this.props.select1(place3)
	 }
	 handle4 = ()=>{
		const place4 = $('.placeCard4').text()
		// console.log(place1)
		this.setState({place:place4})
		this.props.select1(place4)
	 }
	 handle5  = ()=>{
		const place5 = $('.placeCard5').text()
		// console.log(place1)
		this.setState({place:place5})
		this.props.select1(place5)
	 }
	 handle6  = ()=>{
		const place6 = $('.placeCard6').text()
		// console.log(place1)
		this.setState({place:place6})
		this.props.select1(place6)
	 }
	 handle7 = ()=>{
		const place7 = $('.placeCard7').text()
		// console.log(place1)
		this.setState({place:place7})
		this.props.select1(place7)
	 }
	 handle8  = ()=>{
		const place8 = $('.placeCard8').text()
		// console.log(place1)
		this.setState({place:place8})
		this.props.select1(place8)
	 }
	 handle9  = ()=>{
		const place9= $('.placeCard9').text()
		// console.log(place1)
		this.setState({place:place9})
		this.props.select1(place9)
	 }
	 handle10  = ()=>{
		const place10 = $('.placeCard10').text()
		// console.log(place1)
		this.setState({place:place10})
		this.props.select1(place10)
	 }
	 handle11 = ()=>{
		const place11 = $('.placeCard11').text()
		// console.log(place1)
		this.setState({place:place11})
		this.props.select1(place11)
	 }
	 ///////////////////////////////////////////////////////
	 handleType1 = ()=>{
		const type1 = $('.typeCard1').text()
		this.setState({type:type1})
		this.props.select2(type1)
	 }
	 handleType2 = ()=>{
		const type2 = $('.typeCard2').text()
		this.setState({type:type2})
		this.props.select2(type2)
	 }
	 handleType3 = ()=>{
		const type3 = $('.typeCard3').text()
		this.setState({type:type3})
		this.props.select2(type3)
	 }
	 handleType4 = ()=>{
		const type4 = $('.typeCard4').text()
		this.setState({type:type4})
		this.props.select2(type4)
	 }
	 handleType5 = ()=>{
		const type5 = $('.typeCard5').text()
		this.setState({type:type5})
		this.props.select2(type5)
	 }
	 handleType6 = ()=>{
		const type6 = $('.typeCard6').text()
		this.setState({type:type6})
		this.props.select2(type6)
	 }
	 handleType7 = ()=>{
		const type7 = $('.typeCard7').text()
		this.setState({type:type7})
		this.props.select2(type7)
	 }
	 handleType8 = ()=>{
		const type8 = $('.typeCard8').text()
		this.setState({type:type8})
		this.props.select2(type8)
	 }
	 handleType9 = ()=>{
		const type9 = $('.typeCard9').text()
		this.setState({type:type9})
		this.props.select2(type9)
	 }
	 handleType10 = ()=>{
		const type10 = $('.typeCard10').text()
		this.setState({type:type10})
		this.props.select2(type10)
	 }
	 handleType11 = ()=>{
		const type11 = $('.typeCard11').text()
		this.setState({type:type11})
		this.props.select2(type11)
	 }
	 handleType12 = ()=>{
		const type12 = $('.typeCard12').text()
		this.setState({type:type12})
		this.props.select2(type12)
	 }
	 handleType13 = ()=>{
		const type13 = $('.typeCard13').text()
		this.setState({type:type13})
		this.props.select2(type13)
	 }
	 handleType14 = ()=>{
		const type14 = $('.typeCard14').text()
		this.setState({type:type14})
		this.props.select2(type14)
	 }
//////////////////////////////////////////////////////
		handleMonth1 = ()=>{
			const month1 = $('.monthCard1').text()
			this.setState({month:month1})
			this.props.select3(month1)
		}
		handleMonth2 = ()=>{
			const month2 = $('.monthCard2').text()
			this.setState({month:month2})
			this.props.select3(month2)
		}
		handleMonth3 = ()=>{
			const month3 = $('.monthCard3').text()
			this.setState({month:month3})
			this.props.select3(month3)
		}
		handleMonth4 = ()=>{
			const month4 = $('.monthCard4').text()
			this.setState({month:month4})
			this.props.select3(month4)
		}
		handleMonth5 = ()=>{
			const month5 = $('.monthCard5').text()
			this.setState({month:month5})
			this.props.select3(month5)
		}
		handleMonth6 = ()=>{
			const month6 = $('.monthCard6').text()
			this.setState({month:month6})
			this.props.select3(month6)
		}
		handleMonth7 = ()=>{
			const month7 = $('.monthCard7').text()
			this.setState({month:month7})
			this.props.select3(month7)
		}
		handleMonth8 = ()=>{
			const month8 = $('.monthCard8').text()
			this.setState({month:month8})
			this.props.select3(month8)
		}
		handleMonth9 = ()=>{
			const month9 = $('.monthCard9').text()
			this.setState({month:month9})
			this.props.select3(month9)
		}
		handleMonth10 = ()=>{
			const month10 = $('.monthCard10').text()
			this.setState({month:month10})
			this.props.select3(month10)
		}
		handleMonth11 = ()=>{
			const month11 = $('.monthCard11').text()
			this.setState({month:month11})
			this.props.select3(month11)
		}
		handleMonth12 = ()=>{
			const month12 = $('.monthCard12').text()
			this.setState({month:month12})
			this.props.select3(month12)
		}

/////////////////////////////////////////////////////////////
		handleDifficulty1=()=>{
			const difficulty1 = $('.difficultyCard1').text()
			this.setState({difficulty:difficulty1})
			this.props.select4(difficulty1)
		}
		handleDifficulty2=()=>{
			const difficulty2 = $('.difficultyCard2').text()
			this.setState({difficulty:difficulty2})
			this.props.select4(difficulty2)
		}
		handleDifficulty3=()=>{
			const difficulty3 = $('.difficultyCard3').text()
			this.setState({difficulty:difficulty3})
			this.props.select4(difficulty3)
		}
		handleDifficulty4=()=>{
			const difficulty4 = $('.difficultyCard4').text()
			this.setState({difficulty:difficulty4})
			this.props.select4(difficulty4)
		}
		handleDifficulty5=()=>{
			const difficulty5 = $('.difficultyCard5').text()
			this.setState({difficulty:difficulty5})
			this.props.select4(difficulty5)
		}
		handleDifficulty6=()=>{
			const difficulty6 = $('.difficultyCard6').text()
			this.setState({difficulty:difficulty6})
			this.props.select4(difficulty6)
		}
		handlePrice=(value)=>{
			this.setState({Price:value})
			this.props.select6(value)
		}
	 

	 render() {
		
        return (

            <Container className="TripFilterSection1">
                <Row className="before-rwd">
                    <Col>
                        <div className="main-filter-container-rwd d-flex">
                            <div className="icon d-flex">
                                <Filter className="m-auto " height="20" width="20" />
                            </div>
                            <div className="search">
                                <p>搜尋</p>
                                <a className="anotherSearch" href="#5" role="button">
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>


                <div className="trip-filter-menu">
                    <div className="fakeNav">
                        <a
                            className="TripFilterToggler ml-auto d-flex justify-content-center align-items-center"
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
												<h6>{this.state.place}</h6>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body >
                                        <ul>
                                            <li className = 'placeCard1' onClick={this.handle1}>所有目的地</li>
                                            <li className = 'placeCard2' onClick={this.handle2}>阿拉斯加洲</li>
                                            <li className = 'placeCard3' onClick={this.handle3}>南極洲</li>
                                            <li className = 'placeCard4' onClick={this.handle4}>加拿大</li>
                                            <li className = 'placeCard5' onClick={this.handle5}>芬蘭</li>
                                            <li className = 'placeCard6' onClick={this.handle6}>格陵蘭</li>
                                            <li className = 'placeCard7' onClick={this.handle7}>費洛群島</li>
                                            <li className = 'placeCard8' onClick={this.handle8}>挪威</li>
                                            <li className = 'placeCard9' onClick={this.handle9}>俄羅斯</li>
                                            <li className = 'placeCard10' onClick={this.handle10}>斯匹茲卑爾根島</li>
                                            <li className = 'placeCard11' onClick={this.handle11}>瑞典</li>
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
												<h6>{this.state.type}</h6>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <ul>
                                            <li className = 'typeCard1' onClick={this.handleType1}>所有活動</li>
                                            <li className = 'typeCard2' onClick={this.handleType2}>北極光</li>
                                            <li className = 'typeCard3' onClick={this.handleType3}>獨木舟</li>
                                            <li className = 'typeCard4' onClick={this.handleType4}>動物觀察</li>
                                            <li className = 'typeCard5' onClick={this.handleType5}>多活動</li>
                                            <li className = 'typeCard6' onClick={this.handleType6}>駕車遊覽</li>
                                            <li className = 'typeCard7' onClick={this.handleType7}>雪橇犬</li>
                                            <li className = 'typeCard8' onClick={this.handleType8}>郵輪和帆船</li>
                                            <li className = 'typeCard9' onClick={this.handleType9}>家庭</li>
                                            <li className = 'typeCard10' onClick={this.handleType10}>划艇</li>
                                            <li className = 'typeCard11' onClick={this.handleType11}>步行</li>
                                            <li className = 'typeCard12' onClick={this.handleType12}>跨年</li>
                                            <li className = 'typeCard13' onClick={this.handleType13}>雪鞋</li>
                                            <li className = 'typeCard14' onClick={this.handleType14}>攝影</li>
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
												<h6>{this.state.month}</h6>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                        <ul>
                                            <li className = 'monthCard1' onClick={this.handleMonth1}>一月</li>
                                            <li className = 'monthCard2' onClick={this.handleMonth2}>二月</li>
                                            <li className = 'monthCard3' onClick={this.handleMonth3}>三月</li>
                                            <li className = 'monthCard4' onClick={this.handleMonth4}>四月</li>
                                            <li className = 'monthCard5' onClick={this.handleMonth5}>五月</li>
                                            <li className = 'monthCard6' onClick={this.handleMonth6}>六月</li>
                                            <li className = 'monthCard7' onClick={this.handleMonth7}>七月</li>
                                            <li className = 'monthCard8' onClick={this.handleMonth8}>八月</li>
                                            <li className = 'monthCard9' onClick={this.handleMonth9}>九月</li>
                                            <li className = 'monthCard10' onClick={this.handleMonth10}>十月</li>
                                            <li className = 'monthCard11' onClick={this.handleMonth11}>十一月</li>
                                            <li className = 'monthCard12' onClick={this.handleMonth12}>十二月</li>
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
												<h6>{this.state.difficulty}</h6>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>
                                        <ul>
                                            <li className = 'difficultyCard1' onClick={this.handleDifficulty1}>所有難度</li>
                                            <li className = 'difficultyCard2' onClick={this.handleDifficulty2}>非常簡單</li>
                                            <li className = 'difficultyCard3' onClick={this.handleDifficulty3}>簡單</li>
                                            <li className = 'difficultyCard4' onClick={this.handleDifficulty4}>普通</li>
                                            <li className = 'difficultyCard5' onClick={this.handleDifficulty5}>困難</li>
                                            <li className = 'difficultyCard6' onClick={this.handleDifficulty6}>非常困難</li>
                                        </ul>
                                    </Card.Body>
                                </Accordion.Collapse>
										  <Accordion.Collapse eventKey="6">
                  						<Card.Body id="days-of-stay">
                   						 <SliderPrice handlePrice = {this.handlePrice} select6={this.props.select6}/>
                  						</Card.Body>
               						 </Accordion.Collapse>
                            </Card>
										{/* <div className='selectCom'>
											<p>確定</p>
										</div> */}
                            
                        </Accordion>
                    </div>
                </div>
            </Container>

        );
    }
}

export default TripFilter;
