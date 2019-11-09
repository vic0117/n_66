import React, { Component } from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import carouselImg1 from './images/marche-sur-la-glace-de-stockholm-1220.jpg'
import carouselImg2 from './images/sotckholm-lhiver-1221.jpg'
import carouselImg3 from './images/stockholm-sous-les-aurores-boreales-1219.jpg'
import './TripDesCarousel.scss'

class TripDesCarousel extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping:true,
      // autoplay: true,
		autoplaySpeed: 3000,
		dots:false,
		speed:800,
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      }
    };
    return (
      <Container>
        <div className='TripDesCarouselBox'>
          <Slider
            {...settings}
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
				className='BigSlide'
          >
            <div className='TripDesCarouselSmallBox'>
              <img src={carouselImg1} alt='carouselImg1' className='TripDesCarouselImg' style={{height:'540px'}}/>
            </div>
            <div className='TripDesCarouselSmallBox'>
              <img src={carouselImg2} alt='carouselImg2' className='TripDesCarouselImg'/>
            </div>
            <div className='TripDesCarouselSmallBox'>
              <img src={carouselImg3} alt='carouselImg3' className='TripDesCarouselImg'/>
            </div>
          </Slider>
          <Slider
            {...settings}
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            swipeToSlide={true}
            focusOnSelect={true}
				className='SmallSlide'
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
          </Slider>
        </div>
      </Container>
    );
  }
}

export default TripDesCarousel;
