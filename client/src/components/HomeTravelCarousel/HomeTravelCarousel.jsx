import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
// import 'slick-carousel-slick/slick.css';
import './HomeTravelCarousel.css';
import Slider from "react-slick";

//CARD IMAGE
import cardImage2 from './images/aurores-boreales-en-laponie-norvegienne-1155.jpg';
import cardImage3 from './images/canoe-sur-la-riviere-batiscan-au-quebec-2233.jpg';
import cardImage4 from './images/macareux-moine-au-svalbard-135.jpg';
import cardImage6 from './images/roadtrip-en-islande-115.jpg';
import cardImage7 from './images/snaefellsnes-islande-1303.jpg';
import cardImage8 from './images/trek-a-landmannalaugar-islande-219.jpg';
import cardImage9 from './images/voiture-sur-le-lac-baikal-546.jpg';
// import cardImage10 from './images/voyage-aux-iles-feroe-68.jpg';

//SIGNAL SVG
import calender from './images/svg/calender.svg';
import ring from './images/svg/ring3.svg';


class HomeTravelCarousel extends React.Component {

    constructor() {
        super();
        this.state = {
            nav1: null,
            nav2: null,
            suggestion: [
                {
                    id: 1,
                    href: '#',
                    userName: '挪威',
                    image: cardImage2,
                    subTitle: '特羅姆瑟多種活動和北極光',
                    days: '8',
                    level: '易',
                    price: '$ 67485'
                },
                {
                    id: 2,
                    href: '#',
                    userName: '冰島',
                    image: cardImage7,
                    subTitle: '從斯奈山半島到南海岸',
                    days: '10',
                    level: '易',
                    price: '$ 79950'
                },
                {
                    id: 3,
                    href: '#',
                    userName: '加拿大',
                    image: cardImage3,
                    subTitle: '',
                    days: '5',
                    level: '易',
                    price: '$ 58875'
                },
                {
                    id: 4,
                    href: '#',
                    userName: '阿拉斯加',
                    image: cardImage4,
                    subTitle: '',
                    days: '3',
                    level: '易',
                    price: '$ 29999'
                },
                {
                    id: 5,
                    href: '#',
                    userName: '瑞典',
                    image: cardImage6,
                    subTitle: '',
                    days: '8',
                    level: '易',
                    price: '$ 63875'
                },
                {
                    id: 6,
                    href: '#',
                    userName: '俄羅斯',
                    image: cardImage9,
                    subTitle: '貝加爾湖，西伯利亞的明珠',
                    days: '5',
                    level: '易',
                    price: '$ 59680'
                },
                {
                    id: 7,
                    href: '#',
                    userName: '挪威',
                    image: cardImage7,
                    subTitle: '',
                    days: '4',
                    level: '易',
                    price: '$ 37910'
                },
                {
                    id: 8,
                    href: '#',
                    userName: '阿拉斯加',
                    image: cardImage8,
                    subTitle: '',
                    days: '5',
                    level: '易',
                    price: '$ 68235'
                },
                {
                    id: 9,
                    href: '#',
                    userName: '瑞典',
                    image: cardImage9,
                    subTitle: '',
                    days: '3',
                    level: '易',
                    price: '$ 49865'
                },
                // {
                //     id: 10,
                //     href: '#',
                //     userName: '芬蘭',
                //     image: cardImage10,
                //     subTitle: '',
                //     days: '3',
                //     level: '易',
                //     price: '$ 31280'
                // },
            ]
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }


    render() {

        let mainSettings = {
            // dots: false,
            infinity: true,
            speed: 900,
            arrow: true,
            slidesToShow: 4,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 5000,
            cssEase: 'cubic-bezier(.6,-0.55,0,1.01)',
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

            beforeChange: function (currentSlide, nextSlide) {
                // console.log("before change", currentSlide, nextSlide);
            },
            afterChange: function (currentSlide) {
                // console.log("after change", currentSlide);
            }
        }

        let subSettings = {
            infinity: true,
            speed: 900,
            arrow: true,
            slidesToShow: 1,
            slidesToScroll: 3,
            vertical: true,
            verticalSwiping: true,
            autoplaySpeed: 5000,
            beforeChange: function (currentSlide, nextSlide) {
                // console.log("before change", currentSlide, nextSlide);
            },
            afterChange: function (currentSlide) {
                // console.log("after change", currentSlide);
            }
        }


        return (
            <>
                <Container fluid className="travelCarouselContainer">
                    <Row noGutters>
                        <Col>
                            <h6 className="sub-title text-center">為您推薦</h6>
                            <h1 className="main-title text-center">我們的選擇</h1>
                            <div className="rectNavyBlue">

                                {
                                    (this.state.suggestion.length === 0) ? (
                                        <div className="spinner-border" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    ) : (

                                            <div className="slider-container">
                                                <Slider {...mainSettings}
                                                    asNavFor={this.state.nav2}
                                                    ref={slider => (this.slider1 = slider)}
                                                    className="main-slide"
                                                >
                                                    {this.state.suggestion.map(current => (
                                                        <div className="out" key={current.id}>
                                                            <Link to = {current.href}>
                                                                <div className="card tavel-card">
                                                                    <div className="card-img-top">
                                                                        <img src={current.image} alt={'users here'}/>
                                                                    </div>
                                                                    <div className="card-body">
                                                                        <h3 className="card-title">{current.userName}</h3>
                                                                        <small className="card-text text-sm-center ">{current.subTitle}</small>
                                                                        <br />
                                                                        <div className="d-flex justify-content-start" >
                                                                            <div className="d-flex justify-content-start align-items-center days">
                                                                                <img src={calender} alt="calender" />
                                                                                {current.days}天
                                                                            </div>
                                                                            <div className="d-flex justify-content-start align-items-center days">
                                                                                <img src={ring} alt="ring" />
                                                                                {current.level}
                                                                            </div>
                                                                        </div>
                                                                        <div className="d-flex card-price" >
                                                                            <span className="p-0 ">起價:</span>
                                                                            <p className="ml-auto">{current.price}</p>
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
                                                    className='sub-slide'
                                                >
                                                    {this.state.suggestion.map(current => (
                                                        <div key={current.id}>
                                                            <h1>{current.id}</h1>
                                                        </div>
                                                    ))}
                                                </Slider>
                                            </div>
                                        )
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    };

};

export default HomeTravelCarousel;