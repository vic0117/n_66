import React from "react";
import { withRouter } from 'react-router-dom'
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
// import 'slick-carousel-slick/slick.css';
import "./TripDes2Carousel.scss";
import Slider from "react-slick";


//SIGNAL SVG
import calender from "./images/svg/calender.svg";
import ring from "./images/svg/ring3.svg";

class TripDes2Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
		nav2: this.slider2	
	 });
  }

  render() {
	 const{carouselData} = this.props
    let mainSettings = {
      // dots: false,
      infinity: true,
      speed: 900,
      arrow: true,
      slidesToShow: 4,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: "cubic-bezier(.6,-0.55,0,1.01)",
      responsive: [
        {
          breakpoint: 1530,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1065,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 678,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],

      beforeChange: function(currentSlide, nextSlide) {
        // console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        // console.log("after change", currentSlide);
      }
    };

    let subSettings = {
      infinity: true,
      speed: 900,
      arrow: true,
      slidesToShow: 1,
      slidesToScroll: 3,
      vertical: true,
      verticalSwiping: true,
      autoplaySpeed: 3000,
      beforeChange: function(currentSlide, nextSlide) {
        // console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        // console.log("after change", currentSlide);
      }
    };
	 
    return (
      <>
        <Container fluid className="travelCarouselContainer">
          <Row noGutters>
            <Col>
              <h6 className="sub-title text-center">為您推薦</h6>
              <h1 className="main-title text-center">其他的旅程</h1>
              <div className="rectNavyBlue">
                {carouselData.length === 0 ? (
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  <div className="slider-container">
                    <Slider
                      {...mainSettings}
                      asNavFor={this.state.nav2}
                      ref={slider => (this.slider1 = slider)}
                      className="main-slide2"
                    >
                      {carouselData.map(item => (
                        <div className="out" key={item.sid}>
                          <Link to={`/trips/${item.sid}`}>
                            <div className="card tavel-card">
                              <div className="card-img-top">
                                <img src={`http://localhost:3000/images/${item.trip_menu_img}`} alt={"users here"} />
                              </div>
                              <div className="card-body">
                                <h3 className="card-title">
                                  {item.trip_name}
                                </h3>
                                <small className="card-text text-sm-center ">
											{item.trip_place}
                                </small>
                                <br />
                                <div className="d-flex justify-content-start">
                                  <div className="d-flex justify-content-start align-items-center days">
                                    <img src={calender} alt="calender" />
                                    {item.trip_days}天
                                  </div>
                                  <div className="d-flex justify-content-start align-items-center days">
                                    <img src={ring} alt="ring" />
                                    {item.trip_difficulty}
                                  </div>
                                </div>
                                <div className="d-flex card-price">
                                  <span className="p-0 ">價格：</span>
                                  <p className="ml-auto">{item.trip_price}</p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </Slider>
                    <Slider
                      {...subSettings}
                      asNavFor={this.state.nav1}
                      ref={slider => (this.slider2 = slider)}
                      swipeToSlide={true}
                      focusOnSelect={true}
                      className="sub-slide"
                    >
                      {carouselData.map(item => (
                        <div key={item.sid}>
                          <h1>{item.sid}</h1>
                        </div>
                      ))}
                    </Slider>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default withRouter(TripDes2Carousel);
