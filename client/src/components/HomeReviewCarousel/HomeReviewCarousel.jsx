import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";

import './HomeReviewCarousel.css';

class HomeReviewCarousel extends React.Component {
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
        const bigSettings = {
            
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            speed: 800,
        };


        const smallSettings = {
            
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            // autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            speed: 800,
        };

        return (
            <Container fluid className="SectionReviewCarousel">
                <h6 className="subtitle">我們的成績單</h6>
                <h1 className="title">客戶評論</h1>
                <div className='ReviewCarouselBox'>
                    <div className="BlueBlock"></div>
                    <Slider
                        {...bigSettings}
                        asNavFor={this.state.nav2}
                        ref={slider => (this.slider1 = slider)}
                        className='BigSlide'
                    >
                        <div className='TripDesCarouselSmallBox'>
                            <img src="http://localhost:3000/images/bg/aurore-boreale-en-islande-121.jpg" alt='carouselImg1' className='TripDesCarouselImg' style={{ height: '540px' }} />
                            <a href="#55">
                                <Container fluid>
                                    <Row>
                                        <Col lg={6} className="countryFrame">
                                            <img src="http://localhost:3000/images/contryBorder/islande.svg" alt='carouselImg1' />
                                        </Col>
                                        <Col lg={6} className="commentCard d-flex align-items-center">
                                            <div >
                                                <div className="d-flex stars">
                                                    <div className="star">
                                                        <img src="http://localhost:3000/images/svg/star.svg" alt="star" />
                                                    </div>
                                                    <div className="star">
                                                        <img src="http://localhost:3000/images/svg/star.svg" alt="star" />
                                                    </div>
                                                    <div className="star">
                                                        <img src="http://localhost:3000/images/svg/star.svg" alt="star" />
                                                    </div>
                                                    <div className="star">
                                                        <img src="http://localhost:3000/images/svg/star.svg" alt="star" />
                                                    </div>
                                                    <div className="star">
                                                        <img src="http://localhost:3000/images/svg/star.svg" alt="star" />
                                                    </div>
                                                </div>
                                                <div className="customerInformation">
                                                    <span>Michel，53歲</span>
                                                </div>
                                                <h6>冰島</h6>
                                                <p className="commentText">
                                                    神奇的旅程風景截然不同，美麗不斷，吸引著我們，自由和魔幻的感覺。
                                                    蘭德曼納勞（Landmannalaugar）的山坡真的不容錯過，5星推薦。
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </a>
                        </div>
                        <div className='TripDesCarouselSmallBox'>
                            <img src="http://localhost:3000/images/bg/voyage-dans-les-iles-lofoten-en-norvege-du-nord-72.jpg" alt='carouselImg2' className='TripDesCarouselImg' />
                            <a href="#7">
                            <Container fluid>
                                    <Row>
                                        <Col md={6} className="countryFrame">
                                            <img src="http://localhost:3000/images/contryBorder/norvege.svg" alt='norvege' />
                                        </Col>
                                        <Col md={6} className="commentCard d-flex align-items-center">
                                            <div >
                                                <div className="d-flex stars">
                                                    <div className="star">
                                                        <img src="http://localhost:3000/images/svg/star.svg" alt="star" />
                                                    </div>
                                                    <div className="star">
                                                        <img src="http://localhost:3000/images/svg/star.svg" alt="star" />
                                                    </div>
                                                    <div className="star">
                                                        <img src="http://localhost:3000/images/svg/star.svg" alt="star" />
                                                    </div>
                                                    <div className="star">
                                                        <img src="http://localhost:3000/images/svg/star.svg" alt="star" />
                                                    </div>
                                                    <div className="star">
                                                        <img src="http://localhost:3000/images/svg/star.svg" alt="star" />
                                                    </div>
                                                </div>
                                                <div className="customerInformation">
                                                    <span>Rose，62歲</span>
                                                </div>
                                                <h6>挪威-拉普蘭，北開普省和羅弗敦群島</h6>
                                                <p className="commentText">
                                                    非常感謝 埃里卡（Erika）的協助；豐富的發現之旅，非常棒的團隊。
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </a>
                        </div>
                        <div className='TripDesCarouselSmallBox'>
                            <img src="http://localhost:3000/images/bg/ours-polaires-au-spitzberg-234.jpg" alt='carouselImg3' className='TripDesCarouselImg' />
                            <a href="#58">
                            <Container fluid>
                                    <Row>
                                        <Col md={6} className="countryFrame">
                                            <img src="http://localhost:3000/images/contryBorder/spitzberg.svg" alt='carouselImg1' />
                                        </Col>
                                        <Col md={6} className="commentCard d-flex align-items-center">
                                            <div >
                                                <div className="d-flex stars">
                                                    <div className="star">
                                                        <img src="http://localhost:3000/images/svg/star.svg" alt="star" />
                                                    </div>
                                                    <div className="star">
                                                        <img src="http://localhost:3000/images/svg/star.svg" alt="star" />
                                                    </div>
                                                    <div className="star">
                                                        <img src="http://localhost:3000/images/svg/star.svg" alt="star" />
                                                    </div>
                                                    <div className="star">
                                                        <img src="http://localhost:3000/images/svg/star.svg" alt="star" />
                                                    </div>
                                                    <div className="star">
                                                        <img src="http://localhost:3000/images/svg/star.svg" alt="star" />
                                                    </div>
                                                </div>
                                                <div className="customerInformation">
                                                    <span>愛吃火鍋，56歲</span>
                                                </div>
                                                <h6>斯匹次卑爾根-斯匹次卑爾根的冬季冒險</h6>
                                                <p className="commentText">
                                                    經驗非常豐富的團隊，我們確實處於極端條件的地區。
                                                    不要尋求最低限度的舒適感，而應該是人類的冒險：我們面對惡劣的條件，我們的局限性是什麼？
                                                    風景很美。現場團隊可愛，友善，隨時準備為您提供幫助。
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </a>
                        </div>
                    </Slider>


                    <Slider
                        {...smallSettings}
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

export default HomeReviewCarousel;
