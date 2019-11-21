import React, { Component } from "react";
import Slider from "react-slick";
// import { Container } from "react-bootstrap";
// import carouselImg1 from './images/marche-sur-la-glace-de-stockholm-1220.jpg'
// import carouselImg2 from './images/sotckholm-lhiver-1221.jpg'
// import carouselImg3 from './images/stockholm-sous-les-aurores-boreales-1219.jpg'
import "./TripDesCarousel.scss";

class TripDesCarousel extends Component {
  constructor() {
    super();
    this.state = {
      nav1: null,
      nav2: null
    };
  }
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  //   sliders33() {
  // 	  console.log(this.state.carouselImg)
  //     return this.props.carouselImg.map(item => (
  //       <div className="TripDesCarouselSmallBox" key={item}>
  //         <img
  //           src={"http://localhost:3000/images/" + item}
  //           alt="carouselImg1"
  //           className="TripDesCarouselImg"
  //         />
  //       </div>
  //     ))
  //   }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      autoplay: true,
      autoplaySpeed: 3000,
      Dots: false,
      speed: 800,
      beforeChange: function(currentSlide, nextSlide) {
        //   console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        //   console.log("after change", currentSlide);
      }
    };
    const { detailData } = this.props;
    console.log(detailData);
    return (
      <>
        <div className="TripDesCarouselBox">
          {detailData.map(item => (
            <Slider
              {...settings}
              key={item.sid}
              asNavFor={this.state.nav2}
              ref={slider => (this.slider1 = slider)}
              className="BigSlide"
              arrows={false}
            >
              <div className="TripDesCarouselSmallBox">
                <img
                  src={`http://localhost:3000/images/${item.trip_des2_carousel_img1}`}
                  alt="carouselImg2"
                  className="TripDesCarouselImg"
                />
              </div>
              <div className="TripDesCarouselSmallBox">
                <img
                  src={`http://localhost:3000/images/${item.trip_des2_carousel_img2}`}
                  alt="carouselImg2"
                  className="TripDesCarouselImg"
                />
              </div>
              <div className="TripDesCarouselSmallBox">
                <img
                  src={`http://localhost:3000/images/${item.trip_des2_carousel_img3}`}
                  alt="carouselImg3"
                  className="TripDesCarouselImg"
                />
              </div>
              {/* {this.sliders33()} */}
            </Slider>
          ))}

          <Slider
            {...settings}
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            swipeToSlide={true}
            focusOnSelect={true}
            className="SmallSlide"
            dots={true}
          >
            <div>
              <h1>01</h1>
            </div>
            <div>
              <h1>02</h1>
            </div>
            <div>
              <h1>03</h1>
            </div>
            {/* {this.sliders2()} */}
          </Slider>
        </div>
      </>
    );
  }
}

export default TripDesCarousel;
